import React from "react";

interface MessageComponentProps {
  message: string;
}

const MessageComponent: React.FC<MessageComponentProps> = ({ message }) => {
  return (
    <div>
      <h2>Message from Contract</h2>
      <p>{message}</p>
    </div>
  );
};

export default MessageComponent;
