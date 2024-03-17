import React, { useState, useEffect } from "react";
import MessageComponent from "./MessageComponent";
import MessageEditor from "./MessageEditor";
import { fetchMessageFromContract, updateMessageInContract } from "./web3Utils";
import { REACT_APP_CONTRACT_ADDRESS } from "../env";

const App: React.FC = () => {
  const contractAddress = REACT_APP_CONTRACT_ADDRESS;
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const fetchMessage = async () => {
      const messageFromContract = await fetchMessageFromContract(
        contractAddress
      );
      setMessage(messageFromContract);
    };

    fetchMessage();
  }, [contractAddress]);

  const handleUpdateMessage = async (newMessage: string) => {
    await updateMessageInContract(contractAddress, newMessage);
    setMessage(newMessage);
  };

  return (
    <div className="App">
      <MessageComponent message={message} />
      <MessageEditor updateMessage={handleUpdateMessage} />
    </div>
  );
};

export default App;
