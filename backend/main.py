from google import genai
from dotenv import load_dotenv
import os


load_dotenv()
api_key = os.getenv("GENAI_API_KEY")

client = genai.Client(api_key=api_key)

print("Sending request to Gemini...")

response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents="What is menopause?"
)

print("Received response!")

print(response.text)