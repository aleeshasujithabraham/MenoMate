from google import genai
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_cors import CORS
import os

load_dotenv()
api_key = os.getenv("GENAI_API_KEY")

client = genai.Client(api_key=api_key)

app = Flask(__name__)
CORS(app)

@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json.sget("message")

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=user_message
    )

    return jsonify({"reply": response.text})

if __name__ == "__main__":
    app.run(debug=True, port=5000)