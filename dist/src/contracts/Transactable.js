var contract = {
  "abi": [{
    "constant": false,
    "inputs": [{
      "name": "_guarantor",
      "type": "address"
    }, {
      "name": "_v",
      "type": "uint8"
    }, {
      "name": "_r",
      "type": "bytes32"
    }, {
      "name": "_s",
      "type": "bytes32"
    }, {
      "name": "_dest",
      "type": "address"
    }, {
      "name": "_value",
      "type": "uint256"
    }, {
      "name": "_ts",
      "type": "uint256"
    }],
    "name": "execute",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_v",
      "type": "uint8"
    }, {
      "name": "_r",
      "type": "bytes32"
    }, {
      "name": "_s",
      "type": "bytes32"
    }, {
      "name": "_dest",
      "type": "address"
    }, {
      "name": "_value",
      "type": "uint256"
    }, {
      "name": "_ts",
      "type": "uint256"
    }],
    "name": "validateTransaction",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_ts",
      "type": "uint256"
    }],
    "name": "validateTimestamp",
    "outputs": [{
      "name": "",
      "type": "bool"
    }, {
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }]
};
module.exports = contract;