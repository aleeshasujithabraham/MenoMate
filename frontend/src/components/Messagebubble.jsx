function MessageBubble(props) {
  return (
    <div className={props.sender}>
      {props.text}
    </div>
  );
}

export default MessageBubble;