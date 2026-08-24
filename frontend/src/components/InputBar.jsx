import { useState } from 'react';

function InputBar(props) {
  const [inputText, setInputText] = useState("");

  function handleClick() {
    props.onSend(inputText);
    setInputText("");
  }

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleClick}>Send</button>
    </div>
  );
}

export default InputBar;