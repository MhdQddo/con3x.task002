import React, { useState } from "react";

interface MessageEditorProps {
  updateMessage: (newMessage: string) => void;
}

const MessageEditor: React.FC<MessageEditorProps> = ({ updateMessage }) => {
  const [newMessage, setNewMessage] = useState<string>("");

  const handleUpdateMessage = () => {
    updateMessage(newMessage);
    setNewMessage(""); // Clear input field after updating
  };

  return (
    <div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={handleUpdateMessage}>Update Message</button>
    </div>
  );
};

export default MessageEditor;
