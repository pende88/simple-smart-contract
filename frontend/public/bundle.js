var contractAbi = [];

var contractAddress = '0x29BdeF27aDC76012C16af12F9500aaAea33c4a51';

var web3 = new Web3('HTTP://127.0.0.1:7545');

var simpleSmartContract  = new web3.eth.Contract(contractAbi, contractAddress);

console.log(simpleSmartContract);

web3.eth.getAccounts().then(console.log);
