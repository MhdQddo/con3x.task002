import { REACT_APP_CONTRACT_ADDRESS } from "../env";
import { fetchMessageFromContract, updateMessageInContract } from "../src/web3Utils";

async function gettest(msg: string)  {
    await updateMessageInContract(REACT_APP_CONTRACT_ADDRESS ,msg);
    const messageRetrived = await fetchMessageFromContract(REACT_APP_CONTRACT_ADDRESS);
    return messageRetrived;
}

module.exports = gettest;