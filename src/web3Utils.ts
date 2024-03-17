import Web3 from "web3";
import { REACT_APP_ACCOUNT_ADDRESS, REACT_APP_RPC_SERVER } from "../env";

export const fetchMessageFromContract = async (
  contractAddress: string
): Promise<string> => {
  try {
    const web3 = new Web3(REACT_APP_RPC_SERVER);

    const contractABI = [
      {
        constant: true,
        inputs: [],
        name: "message",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
    ];
    const contract = new web3.eth.Contract(contractABI as any, contractAddress);

    const result = await contract.methods.message().call();
    return String(result);
  } catch (error) {
    console.error("Error retrieving message:", error);
    return "";
  }
};

export const updateMessageInContract = async (
  contractAddress: string,
  newMessage: string
): Promise<void> => {
  try {
    const web3 = new Web3(REACT_APP_RPC_SERVER);
    const contractABI = [
      {
        constant: false,
        inputs: [
          {
            internalType: "string",
            name: "_msg",
            type: "string",
          },
        ],
        name: "setMessage",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    ];
    const contract = new web3.eth.Contract(contractABI as any, contractAddress);

    await contract.methods
      .setMessage(newMessage)
      .send({ from: REACT_APP_ACCOUNT_ADDRESS });
  } catch (error) {
    console.error("Error updating message:", error);
  }
};
