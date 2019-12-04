"use strict";

var contract = {
  "abi": [{
    "constant": true,
    "inputs": [],
    "name": "parentAddress",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "creator",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [{
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_candidate",
      "type": "address"
    }],
    "name": "canContribute",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "content_type",
      "type": "address"
    }, {
      "name": "content_contract",
      "type": "address"
    }],
    "name": "addContentType",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "canConfirm",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_locator",
      "type": "bytes"
    }],
    "name": "submitNode",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "address"
    }],
    "name": "contentTypeContracts",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "typeHash",
      "type": "bytes32"
    }],
    "name": "findTypeByHash",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "candidate",
      "type": "address"
    }],
    "name": "canNodePublish",
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
      "name": "_kmsID",
      "type": "string"
    }, {
      "name": "prefix",
      "type": "bytes"
    }],
    "name": "getKMSInfo",
    "outputs": [{
      "name": "",
      "type": "string"
    }, {
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "address"
    }],
    "name": "canReview",
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
      "name": "content_type",
      "type": "address"
    }],
    "name": "validType",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "contentObj",
      "type": "address"
    }],
    "name": "publish",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "registerSpaceNode",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "addressKMS",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "countVersionHashes",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "commitPending",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "requiresReview",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "address_KMS",
      "type": "address"
    }],
    "name": "createLibrary",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "kill",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "numActiveNodes",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "libraryFactory",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "confirmCommit",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "uint256"
    }],
    "name": "activeNodeLocators",
    "outputs": [{
      "name": "",
      "type": "bytes"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "uint256"
    }],
    "name": "activeNodeAddresses",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "version",
    "outputs": [{
      "name": "",
      "type": "bytes32"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "createGroup",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_kmsAddr",
      "type": "address"
    }],
    "name": "getKMSID",
    "outputs": [{
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "new_factory",
      "type": "address"
    }],
    "name": "setFactory",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "clearPending",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "pendingHash",
    "outputs": [{
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "address"
    }],
    "name": "userWallets",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_nodeAddr",
      "type": "address"
    }, {
      "name": "_locator",
      "type": "bytes"
    }],
    "name": "addNode",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_kmsID",
      "type": "string"
    }, {
      "name": "_locator",
      "type": "bytes"
    }],
    "name": "addKMSLocator",
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
      "name": "",
      "type": "uint256"
    }],
    "name": "pendingNodeLocators",
    "outputs": [{
      "name": "",
      "type": "bytes"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "uint256"
    }],
    "name": "pendingNodeAddresses",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "newCreator",
      "type": "address"
    }],
    "name": "transferCreatorship",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "canCommit",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "description",
    "outputs": [{
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "createAccessWallet",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "uint256"
    }],
    "name": "versionTimestamp",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "uint256"
    }],
    "name": "versionHashes",
    "outputs": [{
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "new_factory",
      "type": "address"
    }],
    "name": "setWalletFactory",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "new_factory",
      "type": "address"
    }],
    "name": "setGroupFactory",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "new_factory",
      "type": "address"
    }],
    "name": "setContentFactory",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_kmsIdStr",
      "type": "string"
    }],
    "name": "checkKMS",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "contentFactory",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "content_space_description",
      "type": "string"
    }],
    "name": "setDescription",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "address"
    }],
    "name": "hasAccess",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_objectHash",
      "type": "string"
    }],
    "name": "commit",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "uint256"
    }],
    "name": "contentTypes",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_candidate",
      "type": "address"
    }],
    "name": "canPublish",
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
      "name": "content_type",
      "type": "address"
    }],
    "name": "whitelistedType",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "new_factory",
      "type": "address"
    }],
    "name": "setLibraryFactory",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "getAccessWallet",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_kmsID",
      "type": "string"
    }, {
      "name": "_pubKey",
      "type": "string"
    }],
    "name": "setKMSPublicKey",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "unregisterSpaceNode",
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
      "name": "key",
      "type": "bytes"
    }],
    "name": "getMeta",
    "outputs": [{
      "name": "",
      "type": "bytes"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "contentSpace",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "groupFactory",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_nodeAddr",
      "type": "address"
    }],
    "name": "removeNode",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "createContentType",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "lib",
      "type": "address"
    }, {
      "name": "content_type",
      "type": "address"
    }],
    "name": "createContent",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "updateRequest",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "factory",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "walletFactory",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "contentTypesLength",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "engageAccountLibrary",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "address_KMS",
      "type": "address"
    }],
    "name": "setAddressKMS",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_kmsAddr",
      "type": "address"
    }],
    "name": "checkKMSAddr",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_nodeAddr",
      "type": "address"
    }],
    "name": "approveNode",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "objectHash",
    "outputs": [{
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_versionHash",
      "type": "string"
    }],
    "name": "deleteVersion",
    "outputs": [{
      "name": "",
      "type": "int256"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "key",
      "type": "bytes"
    }, {
      "name": "value",
      "type": "bytes"
    }],
    "name": "putMeta",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_v",
      "type": "uint8[]"
    }, {
      "name": "_r",
      "type": "bytes32[]"
    }, {
      "name": "_s",
      "type": "bytes32[]"
    }, {
      "name": "_from",
      "type": "address[]"
    }, {
      "name": "_dest",
      "type": "address[]"
    }, {
      "name": "_value",
      "type": "uint256[]"
    }, {
      "name": "_ts",
      "type": "uint256[]"
    }],
    "name": "executeBatch",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "accessRequest",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "newOwner",
      "type": "address"
    }],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "numPendingNodes",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "address"
    }],
    "name": "nodeMapping",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "content_type",
      "type": "address"
    }],
    "name": "removeContentType",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_kmsID",
      "type": "string"
    }, {
      "name": "_locator",
      "type": "bytes"
    }],
    "name": "removeKMSLocator",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "name": "content_space_name",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  }, {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "contentTypeAddress",
      "type": "address"
    }],
    "name": "CreateContentType",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "libraryAddress",
      "type": "address"
    }],
    "name": "CreateLibrary",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "groupAddress",
      "type": "address"
    }],
    "name": "CreateGroup",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "contentAddress",
      "type": "address"
    }],
    "name": "CreateContent",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "wallet",
      "type": "address"
    }],
    "name": "CreateAccessWallet",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "accountAddress",
      "type": "address"
    }],
    "name": "EngageAccountLibrary",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "factory",
      "type": "address"
    }],
    "name": "SetFactory",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "nodeObjAddr",
      "type": "address"
    }],
    "name": "RegisterNode",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "nodeObjAddr",
      "type": "address"
    }],
    "name": "UnregisterNode",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "sender",
      "type": "address"
    }, {
      "indexed": false,
      "name": "status",
      "type": "uint256"
    }],
    "name": "AddKMSLocator",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "sender",
      "type": "address"
    }, {
      "indexed": false,
      "name": "status",
      "type": "uint256"
    }],
    "name": "RemoveKMSLocator",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "version",
      "type": "bytes32"
    }, {
      "indexed": false,
      "name": "owner",
      "type": "address"
    }],
    "name": "CreateSpace",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "walletAddress",
      "type": "address"
    }],
    "name": "GetAccessWallet",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "addr",
      "type": "address"
    }, {
      "indexed": false,
      "name": "locator",
      "type": "bytes"
    }],
    "name": "NodeSubmitted",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "addr",
      "type": "address"
    }, {
      "indexed": false,
      "name": "locator",
      "type": "bytes"
    }],
    "name": "NodeApproved",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "ownerAddr",
      "type": "address"
    }, {
      "indexed": false,
      "name": "nodeAddr",
      "type": "address"
    }],
    "name": "AddNode",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "ownerAddr",
      "type": "address"
    }, {
      "indexed": false,
      "name": "nodeAddr",
      "type": "address"
    }],
    "name": "RemoveNode",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "contentType",
      "type": "address"
    }, {
      "indexed": false,
      "name": "contentContract",
      "type": "address"
    }],
    "name": "ContentTypeAdded",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "contentType",
      "type": "address"
    }],
    "name": "ContentTypeRemoved",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "spaceAddress",
      "type": "address"
    }, {
      "indexed": false,
      "name": "parentAddress",
      "type": "address"
    }, {
      "indexed": false,
      "name": "objectHash",
      "type": "string"
    }],
    "name": "CommitPending",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "objectHash",
      "type": "string"
    }],
    "name": "UpdateRequest",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "spaceAddress",
      "type": "address"
    }, {
      "indexed": false,
      "name": "objectHash",
      "type": "string"
    }],
    "name": "VersionConfirm",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "spaceAddress",
      "type": "address"
    }, {
      "indexed": false,
      "name": "versionHash",
      "type": "string"
    }, {
      "indexed": false,
      "name": "index",
      "type": "int256"
    }],
    "name": "VersionDelete",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [],
    "name": "AccessRequest",
    "type": "event"
  }],
  "bytecode": "60806040527f4f776e61626c6532303139303532383139333830304d4c00000000000000000060009081557f41636365737369626c6532303139303232323133353930304d4c0000000000006006557f4564697461626c6532303139303830313133353530304d4c00000000000000006007557f436f6e7461696e657232303139303532393039313830304d4c00000000000000600e556011557f55736572537061636532303139303530363135353330304d4c000000000000006013557f4e6f6465537061636532303139303532383137303130304d4c000000000000006015557f42617365436f6e74656e74537061636532303139303830313134303430304d4c601a553480156200011257600080fd5b506040516200594c3803806200594c8339810160405280516001805432600160a060020a031991821681179092556002805490911690911790550180516200016290601b906020840190620001c6565b5060038054600160a060020a03191630179055601a5460025460408051928352600160a060020a0391909116602083015280517f599bb380c80b69455450a615c515544b8da3b09f2efa116a5f0567682203cf549281900390910190a1506200026b565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200020957805160ff191683800117855562000239565b8280016001018555821562000239579182015b82811115620002395782518255916020019190600101906200021c565b50620002479291506200024b565b5090565b6200026891905b8082111562000247576000815560010162000252565b90565b6156d1806200027b6000396000f3006080604052600436106103ac5763ffffffff60e060020a600035041662821de381146103ae57806302d05d3f146103df57806306fdde03146103f45780630eaec2c51461047e5780630f58a786146104b357806314cfabb3146104da578063160eee74146104ef5780631cdbee5a146105485780631f2caaec1461056957806326683e1414610581578063268bfac4146105a257806329d002191461071757806329dedde5146107385780632cf99422146107595780632f7a781a1461077a57806332eaf21b1461078f578063331b86c0146107a4578063375a6e7c146107cb5780633dd71d99146107e057806340b89f06146107f557806341c0e1b51461081657806343f59ec71461082b578063441c5aa314610840578063446e8826146108555780635272ae171461085d57806352f82dd81461087557806354fd4d501461088d578063575185ed146108a2578063589aafc1146108b75780635bb47808146108d85780635f6a1301146108f9578063628449fd1461090e57806363e6ffdd1461092357806364f0f05014610944578063653a92f6146109ab57806369e30ff814610a425780636be9514c14610a5a5780636d2e4b1b14610a725780636e37542714610a935780637284e41614610aa85780637708bc4114610abd5780637886f74714610ad25780637ca8f61814610aea5780637ebf879c14610b02578063837b3b9314610b2357806385ce1df114610b445780638d2a23db14610b655780638da5cb5b14610bbe578063904696a814610bd357806390c3f38f14610be857806395a078e814610c415780639867db7414610c62578063991a3a7c14610cbb5780639b55f9011461047e5780639cb121ba14610cd35780639d05d18d14610cf4578063a2d67fcf14610d15578063a69cb73414610d2a578063abe596b114610dc1578063ac55c90614610dd6578063af570c0414610e2f578063b04b6caa14610e44578063b2b99ec914610e59578063b8cfaf0514610e7a578063bf4e088f14610e8f578063c287e0ed14610eb6578063c45a015514610ecb578063c5c0369914610ee0578063c65bcbe214610ef5578063c82710c114610f0a578063c9e8e72d14610f1f578063d6be0f4914610f40578063dd4c97a014610f61578063e02dd9c214610f82578063e1a7071714610f97578063e542b7cb14610ff0578063e9861ab114611087578063f155188714611232578063f2fde38b14611247578063f41a158714611268578063fbd1b4ce1461127d578063fd0891961461129e578063fe7ac19f146112bf575b005b3480156103ba57600080fd5b506103c3611356565b60408051600160a060020a039092168252519081900360200190f35b3480156103eb57600080fd5b506103c3611366565b34801561040057600080fd5b50610409611375565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561044357818101518382015260200161042b565b50505050905090810190601f1680156104705780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561048a57600080fd5b5061049f600160a060020a0360043516611403565b604080519115158252519081900360200190f35b3480156104bf57600080fd5b506103ac600160a060020a0360043581169060243516611434565b3480156104e657600080fd5b5061049f6115a9565b3480156104fb57600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526103ac9436949293602493928401919081908401838280828437509497506115b99650505050505050565b34801561055457600080fd5b506103c3600160a060020a036004351661196c565b34801561057557600080fd5b506103c3600435611987565b34801561058d57600080fd5b5061049f600160a060020a0360043516611c0b565b3480156105ae57600080fd5b506040805160206004803580820135601f810184900484028501840190955284845261063994369492936024939284019190819084018382808284375050604080516020601f89358b018035918201839004830284018301909452808352979a999881019791965091820194509250829150840183828082843750949750611c699650505050505050565b604051808060200180602001838103835285818151815260200191508051906020019080838360005b8381101561067a578181015183820152602001610662565b50505050905090810190601f1680156106a75780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b838110156106da5781810151838201526020016106c2565b50505050905090810190601f1680156107075780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b34801561072357600080fd5b5061049f600160a060020a03600435166120b2565b34801561074457600080fd5b5061049f600160a060020a03600435166120b8565b34801561076557600080fd5b5061049f600160a060020a03600435166120d6565b34801561078657600080fd5b506103c36121f6565b34801561079b57600080fd5b506103c3612370565b3480156107b057600080fd5b506107b961237f565b60408051918252519081900360200190f35b3480156107d757600080fd5b5061049f612385565b3480156107ec57600080fd5b5061049f61238e565b34801561080157600080fd5b506103c3600160a060020a0360043516612393565b34801561082257600080fd5b506103ac61246e565b34801561083757600080fd5b506107b96124aa565b34801561084c57600080fd5b506103c36124b0565b61049f6124bf565b34801561086957600080fd5b506104096004356126af565b34801561088157600080fd5b506103c3600435612723565b34801561089957600080fd5b506107b961274b565b3480156108ae57600080fd5b506103c3612751565b3480156108c357600080fd5b50610409600160a060020a036004351661281b565b3480156108e457600080fd5b506103ac600160a060020a036004351661282e565b34801561090557600080fd5b506103ac61287e565b34801561091a57600080fd5b506104096128bc565b34801561092f57600080fd5b506103c3600160a060020a0360043516612917565b34801561095057600080fd5b5060408051602060046024803582810135601f81018590048502860185019096528585526103ac958335600160a060020a03169536956044949193909101919081908401838280828437509497506129329650505050505050565b3480156109b757600080fd5b506040805160206004803580820135601f810184900484028501840190955284845261049f94369492936024939284019190819084018382808284375050604080516020601f89358b018035918201839004830284018301909452808352979a999881019791965091820194509250829150840183828082843750949750612b779650505050505050565b348015610a4e57600080fd5b50610409600435612eda565b348015610a6657600080fd5b506103c3600435612ee8565b348015610a7e57600080fd5b506103ac600160a060020a0360043516612ef6565b348015610a9f57600080fd5b5061049f612f44565b348015610ab457600080fd5b50610409612f55565b348015610ac957600080fd5b506103c3612fb0565b348015610ade57600080fd5b506107b9600435612fbb565b348015610af657600080fd5b50610409600435612fda565b348015610b0e57600080fd5b506103ac600160a060020a0360043516612fe8565b348015610b2f57600080fd5b506103ac600160a060020a0360043516613038565b348015610b5057600080fd5b506103ac600160a060020a0360043516613088565b348015610b7157600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526107b99436949293602493928401919081908401838280828437509497506130d89650505050505050565b348015610bca57600080fd5b506103c3613140565b348015610bdf57600080fd5b506103c361314f565b348015610bf457600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526103ac94369492936024939284019190819084018382808284375094975061315e9650505050505050565b348015610c4d57600080fd5b5061049f600160a060020a03600435166131a3565b348015610c6e57600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526103ac9436949293602493928401919081908401838280828437509497506131a99650505050505050565b348015610cc757600080fd5b506103c36004356132d6565b348015610cdf57600080fd5b5061049f600160a060020a03600435166132e4565b348015610d0057600080fd5b506103ac600160a060020a036004351661333b565b348015610d2157600080fd5b506103c361338b565b348015610d3657600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526103ac94369492936024939284019190819084018382808284375050604080516020601f89358b018035918201839004830284018301909452808352979a9998810197919650918201945092508291508401838280828437509497506134179650505050505050565b348015610dcd57600080fd5b5061049f6134be565b348015610de257600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526104099436949293602493928401919081908401838280828437509497506135b59650505050505050565b348015610e3b57600080fd5b506103c3613763565b348015610e5057600080fd5b506103c3613772565b348015610e6557600080fd5b506103ac600160a060020a0360043516613781565b348015610e8657600080fd5b506103c361384d565b348015610e9b57600080fd5b506103c3600160a060020a0360043581169060243516613914565b348015610ec257600080fd5b506103ac6139f8565b348015610ed757600080fd5b506103c3613ace565b348015610eec57600080fd5b506103c3613add565b348015610f0157600080fd5b506107b9613aec565b348015610f1657600080fd5b506103c3613af2565b348015610f2b57600080fd5b506103ac600160a060020a0360043516613b2c565b348015610f4c57600080fd5b506107b9600160a060020a0360043516613b7c565b348015610f6d57600080fd5b506103ac600160a060020a0360043516613bf2565b348015610f8e57600080fd5b50610409613e33565b348015610fa357600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526107b9943694929360249392840191908190840183828082843750949750613e8e9650505050505050565b348015610ffc57600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526103ac94369492936024939284019190819084018382808284375050604080516020601f89358b018035918201839004830284018301909452808352979a9998810197919650918201945092508291508401838280828437509497506144369650505050505050565b34801561109357600080fd5b50604080516020600480358082013583810280860185019096528085526103ac95369593946024949385019291829185019084908082843750506040805187358901803560208181028481018201909552818452989b9a998901989297509082019550935083925085019084908082843750506040805187358901803560208181028481018201909552818452989b9a998901989297509082019550935083925085019084908082843750506040805187358901803560208181028481018201909552818452989b9a998901989297509082019550935083925085019084908082843750506040805187358901803560208181028481018201909552818452989b9a998901989297509082019550935083925085019084908082843750506040805187358901803560208181028481018201909552818452989b9a998901989297509082019550935083925085019084908082843750506040805187358901803560208181028481018201909552818452989b9a99890198929750908201955093508392508501908490808284375094975061451e9650505050505050565b34801561123e57600080fd5b5061049f614724565b34801561125357600080fd5b506103ac600160a060020a0360043516614755565b34801561127457600080fd5b506107b96147ba565b34801561128957600080fd5b506103c3600160a060020a03600435166147c0565b3480156112aa57600080fd5b5061049f600160a060020a03600435166147db565b3480156112cb57600080fd5b506040805160206004803580820135601f810184900484028501840190955284845261049f94369492936024939284019190819084018382808284375050604080516020601f89358b018035918201839004830284018301909452808352979a99988101979196509182019450925082915084018382808284375094975061497e9650505050505050565b600354600160a060020a03165b90565b600154600160a060020a031681565b601b805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156113fb5780601f106113d0576101008083540402835291602001916113fb565b820191906000526020600020905b8154815290600101906020018083116113de57829003601f168201915b505050505081565b600254600090600160a060020a038381169116148061142c5750600254600160a060020a031633145b90505b919050565b600254600160a060020a03163214806114575750600254600160a060020a031633145b151561146257600080fd5b600160a060020a0380831660009081526012602052604090205416158015611490575061148e826132e4565b155b1561153c5760105460115410156114e6578160106011548154811015156114b357fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a03160217905550611532565b601080546001810182556000919091527f1b6847dc741a1b0cd08d278845f9d819d87b734759afb55fe2de5cb82a9ae672018054600160a060020a031916600160a060020a0384161790555b6011805460010190555b600160a060020a038281166000818152601260209081526040918290208054600160a060020a0319169486169485179055815192835282019290925281517f280016f7418306a55542432120fd1a239ef9fcc1a92694d8d44ca76be0249ea7929181900390910190a15050565b60006115b433611c0b565b905090565b6116ef601880548060200260200160405190810160405280929190818152602001828054801561161257602002820191906000526020600020905b8154600160a060020a031681526001909101906020018083116115f4575b50505050506019805480602002602001604051908101604052809291908181526020016000905b828210156116e45760008481526020908190208301805460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152928301828280156116d05780601f106116a5576101008083540402835291602001916116d0565b820191906000526020600020905b8154815290600101906020018083116116b357829003601f168201915b505050505081526020019060010190611639565b505050503384614e0c565b156116f957600080fd5b611824601680548060200260200160405190810160405280929190818152602001828054801561175257602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311611734575b50505050506017805480602002602001604051908101604052809291908181526020016000905b828210156116e45760008481526020908190208301805460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152928301828280156118105780601f106117e557610100808354040283529160200191611810565b820191906000526020600020905b8154815290600101906020018083116117f357829003601f168201915b505050505081526020019060010190611779565b1561182e57600080fd5b60185460641161183d57600080fd5b60198054600181018083556000929092528251611881917f944998273e477b495144fb8794c914197f3ccb46be2900f4698fd0ef743c9695019060208501906154a3565b50506018805460018101825560009182527fb13d2d76d1f4b7be834882e410b3e3a8afaf69f83600ae24db354391d2378d2e018054600160a060020a0319163390811790915560408051828152602081810183815286519383019390935285517fae5645569f32b946f7a747113c64094a29a6b84c5ddf55816ef4381ce8a3a46d958794926060850192908601918190849084905b8381101561192e578181015183820152602001611916565b50505050905090810190601f16801561195b5780820380516001836020036101000a031916815260200191505b50935050505060405180910390a150565b601260205260009081526040902054600160a060020a031681565b600080805b601054821015611bff5760108054839081106119a457fe5b6000918252602091829020015460408051808401889052815180820385018152908201918290528051600160a060020a03909316945092909182918401908083835b60208310611a055780518252601f1990920191602091820191016119e6565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206000191681600160a060020a031663e02dd9c26040518163ffffffff1660e060020a028152600401600060405180830381600087803b158015611a7457600080fd5b505af1158015611a88573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526020811015611ab157600080fd5b810190808051640100000000811115611ac957600080fd5b82016020810184811115611adc57600080fd5b8151640100000000811182820187101715611af657600080fd5b50509291905050506040516020018082805190602001908083835b60208310611b305780518252601f199092019160209182019101611b11565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040526040518082805190602001908083835b60208310611b935780518252601f199092019160209182019101611b74565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020600019161415611bf4576010805483908110611bd857fe5b600091825260209091200154600160a060020a03169250611c04565b60019091019061198c565b600092505b5050919050565b6000805b601654811015611c5e5782600160a060020a0316601682815481101515611c3257fe5b600091825260209091200154600160a060020a03161415611c565760019150611c63565b600101611c0f565b600091505b50919050565b60608060608060608060006023896040518082805190602001908083835b60208310611ca65780518252601f199092019160209182019101611c87565b51815160209384036101000a60001901801990921691161790529201948552506040805194859003820185208054808402870184019092528186529350915060009084015b82821015611d965760008481526020908190208301805460408051601f6002600019610100600187161502019094169390930492830185900485028101850190915281815292830182828015611d825780601f10611d5757610100808354040283529160200191611d82565b820191906000526020600020905b815481529060010190602001808311611d6557829003601f168201915b505050505081526020019060010190611ceb565b5050505094506024896040518082805190602001908083835b60208310611dce5780518252601f199092019160209182019101611daf565b518151600019602094850361010090810a820192831692199390931691909117909252949092019687526040805197889003820188208054601f6002600183161590980290950116959095049283018290048202880182019052818752929450925050830182828015611e825780601f10611e5757610100808354040283529160200191611e82565b820191906000526020600020905b815481529060010190602001808311611e6557829003601f168201915b50505050509350845160001415611eaf5783602060405190810160405280600081525090965096506120a6565b611eb98589614f5a565b9250600090505b825181101561209f576001835103811415611fa457818382815181101515611ee457fe5b906020019060200201516040516020018083805190602001908083835b60208310611f205780518252601f199092019160209182019101611f01565b51815160209384036101000a600019018019909216911617905285519190930192850191508083835b60208310611f685780518252601f199092019160209182019101611f49565b6001836020036101000a038019825116818451168082178552505050505050905001925050506040516020818303038152906040529150612097565b818382815181101515611fb357fe5b906020019060200201516040516020018083805190602001908083835b60208310611fef5780518252601f199092019160209182019101611fd0565b51815160209384036101000a600019018019909216911617905285519190930192850191508083835b602083106120375780518252601f199092019160209182019101612018565b6001836020036101000a038019825116818451168082178552505050505050905001807f2c000000000000000000000000000000000000000000000000000000000000008152506001019250505060405160208183030381529060405291505b600101611ec0565b8184965096505b50505050509250929050565b50600090565b6000601154600014156120cd5750600161142f565b61142c826132e4565b60008033600160a060020a038416146120ee57600080fd5b82905080600160a060020a0316638280dd8f60006040518263ffffffff1660e060020a02815260040180828152602001915050602060405180830381600087803b15801561213b57600080fd5b505af115801561214f573d6000803e3d6000fd5b505050506040513d602081101561216557600080fd5b5050604080517f27c1c21d0000000000000000000000000000000000000000000000000000000081529051600160a060020a038316916327c1c21d9160048083019260209291908290030181600087803b1580156121c257600080fd5b505af11580156121d6573d6000803e3d6000fd5b505050506040513d60208110156121ec57600080fd5b5051159392505050565b3360009081526022602052604081205481908190600160a060020a03161561221d57600080fd5b600091505b60165482101561226857601680543391908490811061223d57fe5b600091825260209091200154600160a060020a0316141561225d57612268565b600190910190612222565b601654821061227657600080fd5b601d54604080517f5c6dc2190000000000000000000000000000000000000000000000000000000081523360048201529051600160a060020a0390921691635c6dc219916024808201926020929091908290030181600087803b1580156122dc57600080fd5b505af11580156122f0573d6000803e3d6000fd5b505050506040513d602081101561230657600080fd5b5051336000908152602260209081526040918290208054600160a060020a031916600160a060020a038516908117909155825190815291519293507f4575facd117046c9c28b69a3eb9c08939f2462a5a22ea6c6dcd4f79b8dd124e992918290030190a192915050565b600f54600160a060020a031681565b600a5490565b600d5460ff1681565b600090565b60208054604080517f40b89f06000000000000000000000000000000000000000000000000000000008152600160a060020a0385811660048301529151600094859493909316926340b89f06926024808201939182900301818787803b1580156123fc57600080fd5b505af1158015612410573d6000803e3d6000fd5b505050506040513d602081101561242657600080fd5b505160408051600160a060020a038316815290519192507f473c07a6d0228c4fb8fe2be3b4617c3b5fb7c0f8cd9ba4b67e8631844b9b6571919081900360200190a192915050565b600254600160a060020a03163214806124915750600254600160a060020a031633145b151561249c57600080fd5b600254600160a060020a0316ff5b60175490565b602054600160a060020a031681565b60006124c96115a9565b15156124d457600080fd5b600d5460ff1615156124e557600080fd5b60006008805460018160011615610100020316600290049050111561259457600a805460018181018084556000939093526008805461255b937fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a8019260026101009183161591909102600019019091160461551d565b5050600954600b80546001810182556000919091527f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db901555b600c80546125b7916008916002600019610100600184161502019091160461551d565b50426009556040805160208101918290526000908190526125da91600c916154a3565b50600d805460ff1916905560035460408051600160a060020a039092168083526020830182815260088054600260001960018316156101000201909116049385018490527f482875da75e6d9f93f74a5c1a61f14cf08822057c01232f44cb92ae998e30d8e9492939092919060608301908490801561269a5780601f1061266f5761010080835404028352916020019161269a565b820191906000526020600020905b81548152906001019060200180831161267d57829003601f168201915b5050935050505060405180910390a150600190565b60178054829081106126bd57fe5b600091825260209182902001805460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152935090918301828280156113fb5780601f106113d0576101008083540402835291602001916113fb565b601680548290811061273157fe5b600091825260209091200154600160a060020a0316905081565b601a5481565b600080601e60009054906101000a9004600160a060020a0316600160a060020a031663575185ed6040518163ffffffff1660e060020a028152600401602060405180830381600087803b1580156127a757600080fd5b505af11580156127bb573d6000803e3d6000fd5b505050506040513d60208110156127d157600080fd5b505160408051600160a060020a038316815290519192507fa3b1fe71ae61bad8cffa485b230e24e518938f76182a30fa0d9979e7237ad159919081900360200190a18091505b5090565b606061142c61282861505f565b83615064565b600254600160a060020a03163214806128515750600254600160a060020a031633145b151561285c57600080fd5b601d8054600160a060020a031916600160a060020a0392909216919091179055565b612886612f44565b151561289157600080fd5b6040805160208101918290526000908190526128af91600c916154a3565b50600d805460ff19169055565b600c805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156113fb5780601f106113d0576101008083540402835291602001916113fb565b601460205260009081526040902054600160a060020a031681565b600254600160a060020a03163214806129555750600254600160a060020a031633145b151561296057600080fd5b612a9660168054806020026020016040519081016040528092919081815260200182805480156129b957602002820191906000526020600020905b8154600160a060020a0316815260019091019060200180831161299b575b50505050506017805480602002602001604051908101604052809291908181526020016000905b82821015612a8b5760008481526020908190208301805460408051601f6002600019610100600187161502019094169390930492830185900485028101850190915281815292830182828015612a775780601f10612a4c57610100808354040283529160200191612a77565b820191906000526020600020905b815481529060010190602001808311612a5a57829003601f168201915b5050505050815260200190600101906129e0565b505050508484614e0c565b15612aa057600080fd5b6016805460018082019092557fd833147d7dc355ba459fc788f669e58cfaf9dc25ddcd0702e87d69c7b5124289018054600160a060020a031916600160a060020a0385161790556017805491820180825560009190915282519091612b2e917fc624b66cc0138b8fabc209247f72d758e1cf3343756d543badbf24212bed8c159091019060208501906154a3565b505060408051338152600160a060020a038416602082015281517f2bb0f9ba138ffddb5a8f974e9885b65a7814d3002654f1cf3f2d3f619a4006c4929181900390910190a15050565b6002546000906060908290600160a060020a0316321480612ba25750600254600160a060020a031633145b1515612bad57600080fd5b6023856040518082805190602001908083835b60208310612bdf5780518252601f199092019160209182019101612bc0565b51815160209384036101000a60001901801990921691161790529201948552506040805194859003820185208054808402870184019092528186529350915060009084015b82821015612ccf5760008481526020908190208301805460408051601f6002600019610100600187161502019094169390930492830185900485028101850190915281815292830182828015612cbb5780601f10612c9057610100808354040283529160200191612cbb565b820191906000526020600020905b815481529060010190602001808311612c9e57829003601f168201915b505050505081526020019060010190612c24565b505050509150600090505b8151811015612e0b57836040518082805190602001908083835b60208310612d135780518252601f199092019160209182019101612cf4565b5181516020939093036101000a6000190180199091169216919091179052604051920182900390912085519093508592508491508110612d4f57fe5b906020019060200201516040518082805190602001908083835b60208310612d885780518252601f199092019160209182019101612d69565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020600019161415612e0357604080513381526001602082015281517fdf8127994c229011ce9c4764bdc0375bb71c06cf1544f034cd81a42f37233319929181900390910190a160009250612ed2565b600101612cda565b6023856040518082805190602001908083835b60208310612e3d5780518252601f199092019160209182019101612e1e565b51815160209384036101000a600019018019909216911617905292019485525060405193849003810190932080546001810180835560009283529185902089519295612e909550910192508801906154a3565b5050604080513381526000602082015281517fdf8127994c229011ce9c4764bdc0375bb71c06cf1544f034cd81a42f37233319929181900390910190a1600192505b505092915050565b60198054829081106126bd57fe5b601880548290811061273157fe5b600154600160a060020a03163214612f0d57600080fd5b600160a060020a0381161515612f2257600080fd5b60018054600160a060020a031916600160a060020a0392909216919091179055565b600254600160a060020a0316321490565b601c805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156113fb5780601f106113d0576101008083540402835291602001916113fb565b60006115b4326150dc565b600b805482908110612fc957fe5b600091825260209091200154905081565b600a8054829081106126bd57fe5b600254600160a060020a031632148061300b5750600254600160a060020a031633145b151561301657600080fd5b601f8054600160a060020a031916600160a060020a0392909216919091179055565b600254600160a060020a031632148061305b5750600254600160a060020a031633145b151561306657600080fd5b601e8054600160a060020a031916600160a060020a0392909216919091179055565b600254600160a060020a03163214806130ab5750600254600160a060020a031633145b15156130b657600080fd5b60218054600160a060020a031916600160a060020a0392909216919091179055565b60006023826040518082805190602001908083835b6020831061310c5780518252601f1990920191602091820191016130ed565b51815160209384036101000a6000190180199092169116179052920194855250604051938490030190922054949350505050565b600254600160a060020a031681565b602154600160a060020a031681565b600254600160a060020a03163214806131815750600254600160a060020a031633145b151561318c57600080fd5b805161319f90601c9060208401906154a3565b5050565b50600190565b6131b1612f44565b15156131bc57600080fd5b600d5460ff16156131cc57600080fd5b80516080116131da57600080fd5b80516131ed90600c9060208401906154a3565b50600d805460ff191660011790556003547fb3ac059d88af6016aca1aebb7b3e796f2e7420435c59c563687814e9b85daa7590600160a060020a0316613231611356565b60408051600160a060020a038085168252831660208201526060918101828152600c805460026000196101006001841615020190911604938301849052926080830190849080156132c35780601f10613298576101008083540402835291602001916132c3565b820191906000526020600020905b8154815290600101906020018083116132a657829003601f168201915b505094505050505060405180910390a150565b601080548290811061273157fe5b600080805b6011548110156133345783600160a060020a031660108281548110151561330c57fe5b600091825260209091200154600160a060020a0316141561332c57600191505b6001016132e9565b5092915050565b600254600160a060020a031632148061335e5750600254600160a060020a031633145b151561336957600080fd5b60208054600160a060020a031916600160a060020a0392909216919091179055565b326000908152601460205260408120548190600160a060020a031615156133bb576133b4612fb0565b90506133d6565b5032600090815260146020526040902054600160a060020a03165b60408051600160a060020a038316815290517f1c917c3c2698bd5b98acb9772728da62f2ce3670e4578910a6465b955f63e1579181900360200190a1919050565b600254600160a060020a031632148061343a5750600254600160a060020a031633145b151561344557600080fd5b806024836040518082805190602001908083835b602083106134785780518252601f199092019160209182019101613459565b51815160209384036101000a600019018019909216911617905292019485525060405193849003810190932084516134b995919491909101925090506154a3565b505050565b336000908152602260205260408120548190600160a060020a031615156134e457600080fd5b50336000908152602260205260408082208054600160a060020a0319811690915581517f41c0e1b50000000000000000000000000000000000000000000000000000000081529151600160a060020a039091169283926341c0e1b5926004808301939282900301818387803b15801561355c57600080fd5b505af1158015613570573d6000803e3d6000fd5b505060408051600160a060020a038516815290517fb98695ab4c6cedb3b4dfe62479a9d39a59aa2cb38b8bd92bbb6ce5856e42bdf49350908190036020019150a15090565b60606000806020845111151561366f57505081518083015160008181526004602090815260409182902080548351601f6002610100600185161502600019019093169290920491820184900484028101840190945280845293949390918301828280156136635780601f1061363857610100808354040283529160200191613663565b820191906000526020600020905b81548152906001019060200180831161364657829003601f168201915b50505050509250611c04565b6005846040518082805190602001908083835b602083106136a15780518252601f199092019160209182019101613682565b518151600019602094850361010090810a820192831692199390931691909117909252949092019687526040805197889003820188208054601f60026001831615909802909501169590950492830182900482028801820190528187529294509250508301828280156137555780601f1061372a57610100808354040283529160200191613755565b820191906000526020600020905b81548152906001019060200180831161373857829003601f168201915b505050505092505050919050565b600354600160a060020a031681565b601e54600160a060020a031681565b600254600090600160a060020a03163214806137a75750600254600160a060020a031633145b15156137b257600080fd5b5060005b60165481101561319f5781600160a060020a03166016828154811015156137d957fe5b600091825260209091200154600160a060020a03161415613845576138018160166017615286565b60408051338152600160a060020a038416602082015281517f41ec5b9efdbf61871df6a18b687e04bea93d5793af5f8c8b4626e155b23dc19d929181900390910190a15b6001016137b6565b600080601d60009054906101000a9004600160a060020a0316600160a060020a031663b8cfaf056040518163ffffffff1660e060020a028152600401602060405180830381600087803b1580156138a357600080fd5b505af11580156138b7573d6000803e3d6000fd5b505050506040513d60208110156138cd57600080fd5b505160408051600160a060020a038316815290519192507f9e69777f30c55126be256664fa7beff4b796ac32ebceab94df5071b0148017f8919081900360200190a1919050565b602154604080517fbf4e088f000000000000000000000000000000000000000000000000000000008152600160a060020a038581166004830152848116602483015291516000938493169163bf4e088f91604480830192602092919082900301818787803b15801561398557600080fd5b505af1158015613999573d6000803e3d6000fd5b505050506040513d60208110156139af57600080fd5b505160408051600160a060020a038316815290519192507fa0633ea0b3cb5796607e5f551ae79c7eeee0dc7ee0c3ff8996506261651368ce919081900360200190a19392505050565b600254600160a060020a0316331480613a145750613a146115a9565b1515613a1f57600080fd5b60408051602080825260088054600260001961010060018416150201909116049183018290527f403f30aa5f4f2f89331a7b50054f64a00ce206f4d0a37f566ff344bbe46f8b6593909291829182019084908015613abe5780601f10613a9357610100808354040283529160200191613abe565b820191906000526020600020905b815481529060010190602001808311613aa157829003601f168201915b50509250505060405180910390a1565b601d54600160a060020a031681565b601f54600160a060020a031681565b60115481565b6040805132815290516000917f53ce35a7383a3ea3f695bdf0f87d7e5485ba816b382673e849bfdd24e7f5e3ca919081900360200190a190565b600254600160a060020a0316321480613b4f5750600254600160a060020a031633145b1515613b5a57600080fd5b600f8054600160a060020a031916600160a060020a0392909216919091179055565b60006060613b898361281b565b90506023816040518082805190602001908083835b60208310613bbd5780518252601f199092019160209182019101613b9e565b51815160209384036101000a600019018019909216911617905292019485525060405193849003019092205495945050505050565b6002546000908190600160a060020a0316321480613c1a5750600254600160a060020a031633145b1515613c2557600080fd5b5060009050805b601854811015613e275782600160a060020a0316601882815481101515613c4f57fe5b600091825260209091200154600160a060020a03161415613e1f576016601882815481101515613c7b57fe5b6000918252602080832090910154835460018101855593835291209091018054600160a060020a031916600160a060020a03909216919091179055601980546017919083908110613cc857fe5b60009182526020808320845460018181018088559686529290942092018054613d0c949390930192909160026101009183161591909102600019019091160461551d565b50507fd644c8164f225d3b7fdbcc404f279bb1e823ef0d93f88dd4b24e85d0e7bc6a54601882815481101515613d3e57fe5b60009182526020909120015460198054600160a060020a039092169184908110613d6457fe5b600091825260209182902060408051600160a060020a0386168152938401818152919092018054600260001961010060018416150201909116049284018390529291606083019084908015613dfa5780601f10613dcf57610100808354040283529160200191613dfa565b820191906000526020600020905b815481529060010190602001808311613ddd57829003601f168201915b5050935050505060405180910390a1613e168160186019615286565b60019150613e27565b600101613c2c565b8115156134b957600080fd5b6008805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156113fb5780601f106113d0576101008083540402835291602001916113fb565b600080600080600080613e9f612f44565b1515613eaa57600080fd5b866040516020018082805190602001908083835b60208310613edd5780518252601f199092019160209182019101613ebe565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040526040518082805190602001908083835b60208310613f405780518252601f199092019160209182019101613f21565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020945060086040516020018082805460018160011615610100020316600290048015613fcf5780601f10613fad576101008083540402835291820191613fcf565b820191906000526020600020905b815481529060010190602001808311613fbb575b50509150506040516020818303038152906040526040518082805190602001908083835b602083106140125780518252601f199092019160209182019101613ff3565b5181516020939093036101000a6000190180199091169216919091179052604051920182900390912096505050508484141561413357604080516020810191829052600090819052614066916008916154a3565b506000600981905560035460408051600160a060020a03909216808352908201839052606060208084018281528c51928501929092528b517f238d74c13cda9ba51e904772d41a616a1b9b30d09802484df6279fe1c3c07f519593948d9493909290916080840191860190808383885b838110156140ee5781810151838201526020016140d6565b50505050905090810190601f16801561411b5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a16000955061442c565b6000199250600091505b600a5482101561434957600a80548390811061415557fe5b9060005260206000200160405160200180828054600181600116156101000203166002900480156141bd5780601f1061419b5761010080835404028352918201916141bd565b820191906000526020600020905b8154815290600101906020018083116141a9575b50509150506040516020818303038152906040526040518082805190602001908083835b602083106142005780518252601f1990920191602091820191016141e1565b5181516020939093036101000a6000190180199091169216919091179052604051920182900390912093505050508481141561433e57600a80548390811061424457fe5b90600052602060002001600061425a9190615592565b600b80548390811061426857fe5b6000918252602082200155600a5460001901821461430e57600a8054600019810190811061429257fe5b90600052602060002001600a838154811015156142ab57fe5b9060005260206000200190805460018160011615610100020316600290046142d492919061551d565b50600b805460001981019081106142e757fe5b9060005260206000200154600b8381548110151561430157fe5b6000918252602090912001555b600a8054906143219060001983016155d9565b50600b8054906143359060001983016155fd565b50819250614349565b60019091019061413d565b60001983141561435857600080fd5b7f238d74c13cda9ba51e904772d41a616a1b9b30d09802484df6279fe1c3c07f51600360009054906101000a9004600160a060020a031688856040518084600160a060020a0316600160a060020a0316815260200180602001838152602001828103825284818151815260200191508051906020019080838360005b838110156143ec5781810151838201526020016143d4565b50505050905090810190601f1680156144195780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a18295505b5050505050919050565b6002546000908190600160a060020a031632148061445e5750600254600160a060020a031633145b151561446957600080fd5b83516020106144a25750508151808301516000818152600460209081526040909120845192939261449c928601906154a3565b50614518565b826005856040518082805190602001908083835b602083106144d55780518252601f1990920191602091820191016144b6565b51815160209384036101000a6000190180199092169116179052920194855250604051938490038101909320845161451695919491909101925090506154a3565b505b50505050565b60025460009081908190600160a060020a03163314806145465750600061454433613b7c565b115b151561455157600080fd5b88518a511461455f57600080fd5b875189511461456d57600080fd5b865188511461457b57600080fd5b855187511461458957600080fd5b845186511461459757600080fd5b83518551146145a557600080fd5b600092505b89518310156147185786838151811015156145c157fe5b90602001906020020151915081600160a060020a031663508ad278338c868151811015156145eb57fe5b906020019060200201518c8781518110151561460357fe5b906020019060200201518c8881518110151561461b57fe5b906020019060200201518b8981518110151561463357fe5b906020019060200201518b8a81518110151561464b57fe5b906020019060200201518b8b81518110151561466357fe5b60209081029091018101516040805160e060020a63ffffffff8c16028152600160a060020a03998a16600482015260ff90981660248901526044880196909652606487019490945291909516608485015260a484019490945260c48301525160e480830193928290030181600087803b1580156146df57600080fd5b505af11580156146f3573d6000803e3d6000fd5b505050506040513d602081101561470957600080fd5b505190506001909201916145aa565b50505050505050505050565b6040516000907fed78a9defa7412748c9513ba9cf680f57703a46dd7e0fb0b1e94063423c73e88908290a150600190565b600254600160a060020a03163214806147785750600254600160a060020a031633145b151561478357600080fd5b600160a060020a038116151561479857600080fd5b60028054600160a060020a031916600160a060020a0392909216919091179055565b60195490565b602260205260009081526040902054600160a060020a031681565b60025460009081908190600160a060020a03163214806148055750600254600160a060020a031633145b151561481057600080fd5b50506011546000190160005b601154811015611bff5783600160a060020a031660108281548110151561483f57fe5b600091825260209091200154600160a060020a0316141561497657601080548290811061486857fe5b60009182526020909120018054600160a060020a031916905580821461490d57601080548390811061489657fe5b60009182526020909120015460108054600160a060020a0390921691839081106148bc57fe5b60009182526020909120018054600160a060020a031916600160a060020a039290921691909117905560108054839081106148f357fe5b60009182526020909120018054600160a060020a03191690555b6011829055600160a060020a0384166000818152601260209081526040918290208054600160a060020a0319169055815192835290517fd41375b9d347dfe722f90a780731abd23b7855f9cf14ea7063c4cab5f9ae58e29281900390910190a160019250611c04565b60010161481c565b6002546000906060908290600160a060020a03163214806149a95750600254600160a060020a031633145b15156149b457600080fd5b6023856040518082805190602001908083835b602083106149e65780518252601f1990920191602091820191016149c7565b51815160209384036101000a60001901801990921691161790529201948552506040805194859003820185208054808402870184019092528186529350915060009084015b82821015614ad65760008481526020908190208301805460408051601f6002600019610100600187161502019094169390930492830185900485028101850190915281815292830182828015614ac25780601f10614a9757610100808354040283529160200191614ac2565b820191906000526020600020905b815481529060010190602001808311614aa557829003601f168201915b505050505081526020019060010190614a2b565b505050509150600090505b8151811015614dc657836040518082805190602001908083835b60208310614b1a5780518252601f199092019160209182019101614afb565b5181516020939093036101000a6000190180199091169216919091179052604051920182900390912085519093508592508491508110614b5657fe5b906020019060200201516040518082805190602001908083835b60208310614b8f5780518252601f199092019160209182019101614b70565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020600019161415614dbe578151600019018114614c7a57815182906000198101908110614be457fe5b906020019060200201516023866040518082805190602001908083835b60208310614c205780518252601f199092019160209182019101614c01565b51815160209384036101000a6000190180199092169116179052920194855250604051938490030190922080549092508491508110614c5b57fe5b906000526020600020019080519060200190614c789291906154a3565b505b6023856040518082805190602001908083835b60208310614cac5780518252601f199092019160209182019101614c8d565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390206001835103815481101515614cf057fe5b906000526020600020016000614d069190615592565b60016023866040518082805190602001908083835b60208310614d3a5780518252601f199092019160209182019101614d1b565b51815160209384036101000a6000190180199092169116179052920194855250604051938490030190922080549390930392614d799250905082615621565b50604080513381526000602082015281517f5f463eb53cddf646852b82c0d9bdb1d1ec215c3802b780e8b7beea8b6e99f94c929181900390910190a160019250612ed2565b600101614ae1565b604080513381526001602082015281517f5f463eb53cddf646852b82c0d9bdb1d1ec215c3802b780e8b7beea8b6e99f94c929181900390910190a1506000949350505050565b60008084518651141515614e1f57600080fd5b5060005b8551811015614f4c57826040518082805190602001908083835b60208310614e5c5780518252601f199092019160209182019101614e3d565b5181516020939093036101000a6000190180199091169216919091179052604051920182900390912088519093508892508491508110614e9857fe5b906020019060200201516040518082805190602001908083835b60208310614ed15780518252601f199092019160209182019101614eb2565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020600019161480614f36575083600160a060020a03168682815181101515614f2157fe5b90602001906020020151600160a060020a0316145b15614f445760019150614f51565b600101614e23565b600091505b50949350505050565b6060600080825b8551821015614fa257614f8b8683815181101515614f7b57fe5b90602001906020020151866153dc565b15614f97576001909201915b600190910190614f61565b82604051908082528060200260200182016040528015614fd657816020015b6060815260200190600190039081614fc15790505b509050821515614fe857809350615056565b60009250600091505b85518210156150525761500b8683815181101515614f7b57fe5b1561504757858281518110151561501e57fe5b90602001906020020151818481518110151561503657fe5b602090810290910101526001909201915b600190910190614ff1565b8093505b50505092915050565b600b90565b604080517f6d616b654944537472696e6728696e742c6164647265737329000000000000008152905190819003601901812080825260e060020a8402600483018190526008830184905260609260ff90848160288160008681f18015156150ca57600080fd5b50606081016040529695505050505050565b600160a060020a03808216600090815260146020526040812054909182918291161561510757600080fd5b601f60009054906101000a9004600160a060020a0316600160a060020a0316637708bc416040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561515a57600080fd5b505af115801561516e573d6000803e3d6000fd5b505050506040513d602081101561518457600080fd5b50519150600160a060020a03841632146152165750604080517ff2fde38b000000000000000000000000000000000000000000000000000000008152600160a060020a0385811660048301529151839283169163f2fde38b91602480830192600092919082900301818387803b1580156151fd57600080fd5b505af1158015615211573d6000803e3d6000fd5b505050505b60408051600160a060020a038416815290517f56c4bf13bebaa9f2be39ac3f2f4619a0dd1b694bb8c5f43c6b244a6dba0f0cca9181900360200190a150600160a060020a0392831660009081526014602052604090208054600160a060020a031916938216939093179092555090565b8154831080156152965750805483105b15156152a157600080fd5b8154600019018314615368578054819060001981019081106152bf57fe5b9060005260206000200181848154811015156152d757fe5b90600052602060002001908054600181600116156101000203166002900461530092919061551d565b5081548290600019810190811061531357fe5b6000918252602090912001548254600160a060020a039091169083908590811061533957fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a031602179055505b80548190600019810190811061537a57fe5b9060005260206000200160006153909190615592565b80546153a0826000198301615621565b508154829060001981019081106153b357fe5b60009182526020909120018054600160a060020a031916905581546145188360001983016155fd565b60008060008351915084518211156153f357845191505b5060005b8181101561549857838181518110151561540d57fe5b90602001015160f860020a900460f860020a027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916858281518110151561545057fe5b60209101015160f860020a90819004027fff0000000000000000000000000000000000000000000000000000000000000016146154905760009250612ed2565b6001016153f7565b506001949350505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106154e457805160ff1916838001178555615511565b82800160010185558215615511579182015b828111156155115782518255916020019190600101906154f6565b50612817929150615645565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106155565780548555615511565b8280016001018555821561551157600052602060002091601f016020900482015b82811115615511578254825591600101919060010190615577565b50805460018160011615610100020316600290046000825580601f106155b857506155d6565b601f0160209004906000526020600020908101906155d69190615645565b50565b8154818355818111156134b9576000838152602090206134b991810190830161565f565b8154818355818111156134b9576000838152602090206134b9918101908301615645565b8154818355818111156134b9576000838152602090206134b9918101908301615682565b61136391905b80821115612817576000815560010161564b565b61136391905b808211156128175760006156798282615592565b50600101615665565b61136391905b8082111561281757600061569c8282615592565b506001016156885600a165627a7a723058204a366381720c71407b14b0e331b5f3335ca9f2d6a3bfab95fb235ff1582df1850029"
};
module.exports = contract;