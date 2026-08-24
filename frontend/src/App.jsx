import MessageBubble from './components/MessageBubble';
import InputBar from './components/InputBar';
import { useState } from 'react';

function App() {
  const [messages, setMessages] = useState([
    { text: "Hello!", sender: "bot" },
    { text: "Hi there", sender: "user" }
  ]);

  function handleSend(newText) {
    setMessages([...messages, { text: newText, sender: "user" }]);
  }

  return (
    <div>
      {messages.map((msg, index) => (
        <MessageBubble key={index} text={msg.text} sender={msg.sender} />
      ))}
      <InputBar onSend={handleSend} />
    </div>
  );
}


export default App;