import streamlit as st
import pdfplumber
import os
from dotenv import load_dotenv
import requests

# Load Hugging Face API key
load_dotenv()
hf_api_key = os.getenv("HF_API_KEY")

# Function to extract text from PDF
def extract_text_from_pdf(uploaded_file):
    text = ""
    with pdfplumber.open(uploaded_file) as pdf:
        for page in pdf.pages:
            content = page.extract_text()
            if content:
                text += content + "\n"
    return text

# Function to get AI feedback from Hugging Face model
def get_feedback(text):
    prompt = f"""You are an English teacher evaluating a student's homework.
    Give detailed feedback on:
    - Grammar
    - Clarity and sentence structure
    - Content relevance and accuracy
    - Overall flow

    Then give a mark out of 10 for each of the following:
    - Grammar
    - Clarity
    - Content
    - Structure

    And finally give a total score out of 40.
    Be strict but fair. Do not summarize the homework.

    Homework:
    {text}

    Teacher's Feedback and Evaluation:
    """

    headers = {
        "Authorization": f"Bearer {hf_api_key}",
        "Content-Type": "application/json"
    }

    payload = {
        "inputs": prompt,
        "parameters": {"max_new_tokens": 400}
    }

    response = requests.post(
        "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1",
        headers=headers,
        json=payload
    )

    if response.status_code == 200:
        result = response.json()
        return result[0]["generated_text"].split("Teacher's Feedback and Evaluation:")[-1].strip()
    else:
        return f"Error from Hugging Face: {response.status_code} - {response.text}"


# Streamlit web app
st.set_page_config(page_title="AI Homework Feedback", layout="centered")
st.title("📚 AI Homework Feedback")

uploaded_file = st.file_uploader("Upload your homework (PDF only)", type=["pdf"])

if uploaded_file:
    with st.spinner("Extracting text from PDF..."):
        extracted_text = extract_text_from_pdf(uploaded_file)

    if extracted_text.strip():
        st.success("✅ Text extracted successfully!")
        st.subheader("🧠 Suggestions & Feedback:")
        with st.spinner("Getting AI feedback..."):
            feedback = get_feedback(extracted_text)
            st.write(feedback)
    else:
        st.error("❌ No readable text found in the PDF.")
