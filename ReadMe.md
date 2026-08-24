## Progress Log — MenoMate

### Frontend (React + Vite)
- Set up project structure: `src/components/` with `MessageBubble.jsx`, `MessageList.jsx`, `MessageBubble.jsx`, `InputBar.jsx`
- Built `MessageBubble` component — displays a single message using `text` and `sender` props
- Learned props (passing data into components) and how components are used like custom tags (`<MessageBubble />`)
- Rendered a list of messages using `.map()` instead of hardcoding each bubble
- Introduced `useState` to manage the `messages` array as React state (so the UI updates when it changes)
- Built `InputBar` component — controlled input using `useState` (`value` + `onChange`)
- Connected `InputBar` to `App` via a function passed as a prop (`onSend`), so typing + clicking Send appends a new message to the chat using the spread operator (`[...messages, newMessage]`)
- End result: fully working local chat UI — type a message, hit Send, it appears in the message list

### Backend (Flask + Gemini API)
- Wrote initial script using `google-genai` client to call Gemini (`gemini-2.5-flash`) and return `response.text`
- Converting script into a Flask API:
  - `/chat` POST endpoint that accepts a JSON `message` field
  - Uses `flask-cors` to allow requests from the React dev server (different port)
  - Returns Gemini's reply as JSON: `{ "reply": "..." }`
- Using a `.venv` virtual environment for backend dependencies

### Next steps
- Confirm Flask server runs correctly on `localhost:5000`
- Connect frontend `handleSend` to the real `/chat` endpoint via `fetch`
- Display Gemini's actual reply as a bot message in the chat
- Style the UI (message bubbles, layout, colors)
- Build out the actual RAG pipeline (retrieval + embeddings) for menopause/endometriosis info