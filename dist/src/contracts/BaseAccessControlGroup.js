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
    "constant": false,
    "inputs": [],
    "name": "cleanUpContentObjects",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "content_space",
      "type": "address"
    }],
    "name": "setContentSpace",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "obj",
      "type": "address"
    }],
    "name": "getContractRights",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "CATEGORY_CONTENT_OBJECT",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "candidate",
      "type": "address"
    }],
    "name": "grantAccess",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "getAccessGroupsLength",
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
    "name": "CATEGORY_GROUP",
    "outputs": [{
      "name": "",
      "type": "uint8"
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
    "name": "membersList",
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
    "name": "canConfirm",
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
      "name": "group",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }],
    "name": "checkAccessGroupRights",
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
    "name": "CATEGORY_LIBRARY",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "ACCESS_CONFIRMED",
    "outputs": [{
      "name": "",
      "type": "uint8"
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
    "name": "managersList",
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
      "name": "obj",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }, {
      "name": "access",
      "type": "uint8"
    }],
    "name": "setContractRights",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "position",
      "type": "uint256"
    }],
    "name": "getAccessGroup",
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
    "name": "cleanUpAll",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }, {
      "name": "",
      "type": "uint256"
    }, {
      "name": "",
      "type": "uint256"
    }, {
      "name": "",
      "type": "uint256"
    }, {
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "group",
      "type": "address"
    }],
    "name": "getAccessGroupRights",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "accessGroups",
    "outputs": [{
      "name": "category",
      "type": "uint8"
    }, {
      "name": "length",
      "type": "uint256"
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
    "constant": false,
    "inputs": [{
      "name": "obj",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }, {
      "name": "access",
      "type": "uint8"
    }],
    "name": "setContentObjectRights",
    "outputs": [],
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
    "inputs": [{
      "name": "candidate",
      "type": "address"
    }],
    "name": "hasManagerAccess",
    "outputs": [{
      "name": "",
      "type": "bool"
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
    "inputs": [],
    "name": "ACCESS_TENTATIVE",
    "outputs": [{
      "name": "",
      "type": "uint8"
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
    "constant": true,
    "inputs": [],
    "name": "membersNum",
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
    "name": "getContentTypesLength",
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
    "name": "TYPE_EDIT",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
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
    "inputs": [{
      "name": "obj",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }],
    "name": "checkContentObjectRights",
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
    "inputs": [],
    "name": "CATEGORY_CONTRACT",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "managersNum",
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
      "name": "lib",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }],
    "name": "checkLibraryRights",
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
    "name": "CATEGORY_CONTENT_TYPE",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "obj",
      "type": "address"
    }],
    "name": "getContentObjectRights",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "contracts",
    "outputs": [{
      "name": "category",
      "type": "uint8"
    }, {
      "name": "length",
      "type": "uint256"
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
    "inputs": [{
      "name": "position",
      "type": "uint256"
    }],
    "name": "getContract",
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
      "name": "manager",
      "type": "address"
    }],
    "name": "grantManagerAccess",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "addr",
      "type": "address"
    }],
    "name": "contractExists",
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
      "name": "lib",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }, {
      "name": "access",
      "type": "uint8"
    }],
    "name": "setLibraryRights",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "index_type",
      "type": "uint8"
    }, {
      "name": "obj",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }],
    "name": "checkRights",
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
    "name": "ACCESS_NONE",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "cleanUpContentTypes",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "candidate",
      "type": "address"
    }],
    "name": "revokeAccess",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "obj",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }, {
      "name": "access",
      "type": "uint8"
    }],
    "name": "setContentTypeRights",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
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
    "constant": false,
    "inputs": [],
    "name": "cleanUpLibraries",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "candidate",
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
    "constant": true,
    "inputs": [],
    "name": "TYPE_SEE",
    "outputs": [{
      "name": "",
      "type": "uint8"
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
    "inputs": [],
    "name": "contentTypes",
    "outputs": [{
      "name": "category",
      "type": "uint8"
    }, {
      "name": "length",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "index_type",
      "type": "uint8"
    }, {
      "name": "obj",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }],
    "name": "checkDirectRights",
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
      "name": "obj",
      "type": "address"
    }],
    "name": "getContentTypeRights",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "obj",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }],
    "name": "checkContractRights",
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
    "name": "contentObjects",
    "outputs": [{
      "name": "category",
      "type": "uint8"
    }, {
      "name": "length",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "position",
      "type": "uint256"
    }],
    "name": "getContentType",
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
    "name": "contentSpace",
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
    "name": "setAccessRights",
    "outputs": [],
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
    "name": "libraries",
    "outputs": [{
      "name": "category",
      "type": "uint8"
    }, {
      "name": "length",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "getLibrariesLength",
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
      "name": "manager",
      "type": "address"
    }],
    "name": "revokeManagerAccess",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "position",
      "type": "uint256"
    }],
    "name": "getContentObject",
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
      "name": "position",
      "type": "uint256"
    }],
    "name": "getLibrary",
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
    "name": "TYPE_ACCESS",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "cleanUpAccessGroups",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "candidate",
      "type": "address"
    }, {
      "name": "mgr",
      "type": "bool"
    }],
    "name": "hasAccessRight",
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
    "constant": true,
    "inputs": [],
    "name": "getContentObjectsLength",
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
      "name": "group",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }, {
      "name": "access",
      "type": "uint8"
    }],
    "name": "setAccessGroupRights",
    "outputs": [],
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
    "inputs": [{
      "name": "lib",
      "type": "address"
    }],
    "name": "getLibraryRights",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "getContractsLength",
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
      "name": "obj",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }],
    "name": "checkContentTypeRights",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "name": "content_space",
      "type": "address"
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
      "name": "candidate",
      "type": "address"
    }],
    "name": "MemberAdded",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "candidate",
      "type": "address"
    }],
    "name": "ManagerAccessGranted",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "candidate",
      "type": "address"
    }],
    "name": "MemberRevoked",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "candidate",
      "type": "address"
    }],
    "name": "ManagerAccessRevoked",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "operationCode",
      "type": "uint256"
    }, {
      "indexed": false,
      "name": "candidate",
      "type": "address"
    }],
    "name": "UnauthorizedOperation",
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
    "inputs": [{
      "indexed": false,
      "name": "principal",
      "type": "address"
    }, {
      "indexed": false,
      "name": "entity",
      "type": "address"
    }, {
      "indexed": false,
      "name": "aggregate",
      "type": "uint8"
    }],
    "name": "RightsChanged",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "label",
      "type": "string"
    }, {
      "indexed": false,
      "name": "index",
      "type": "uint256"
    }, {
      "indexed": false,
      "name": "a",
      "type": "address"
    }],
    "name": "dbgAddress",
    "type": "event"
  }],
  "bytecode": "7f4f776e61626c6532303139303532383139333830304d4c0000000000000000006000557f416363657373496e6465786f7232303139313131333230323430304d4c00000060045560058054600160ff19909116811761ff0019166102001762ff00001916620300001763ff000000191663040000001764ff0000000019166405000000001790915560e06040526080908152600a60a052606460c052620000ac906006906003620001fd565b507f4564697461626c6532303139303830313133353530304d4c0000000000000000601b557f42734163636573734374726c47727032303139303732333136353930304d4c006022553480156200010257600080fd5b5060405160208062003dba833981016040525160018054600160a060020a0319908116329081178084556002805484169092179091556005546007805460ff1990811660ff620100008504811691909117909255600f8054821661010085048416179055600b805482168385161790556013805482166301000000850484161790556017805490911664010000000090930490911691909117905560038054600160a060020a039586169084161790556000602481905560258054808601825591527f401968ff42a154441da5f6c4c935ac46b8671f0e062baaa62a7545ba53bb6e4c018054909216931692909217909155602655620002bb565b600183019183908215620002855791602002820160005b838211156200025457835183826101000a81548160ff021916908360ff160217905550926020019260010160208160000104928301926001030262000214565b8015620002835782816101000a81549060ff021916905560010160208160000104928301926001030262000254565b505b506200029392915062000297565b5090565b620002b891905b808211156200029357805460ff191681556001016200029e565b90565b613aef80620002cb6000396000f3006080604052600436106103ac5763ffffffff60e060020a600035041662821de381146103ae57806302d05d3f146103df578063048bd529146103f4578063055af48f1461041b57806308d865d71461043c578063091600e6146104735780630ae5e739146104885780630dc10d3f146104a957806312915a30146104be57806313b8ad31146104d357806314cfabb3146104eb57806315c0bac11461051457806316aed2321461053b57806318689733146105505780631fcd779414610565578063224dcba01461057d5780632d474cbd146105aa5780632fa5c842146105c2578063304f4a7b1461060257806330e6694914610623578063331b86c014610655578063375a6e7c1461066a5780633def51401461067f57806341c0e1b5146106ac57806342e7ba7b146106c1578063446e8826146106e2578063479a0c51146106ea57806354fd4d50146106ff57806355277a5b146107145780635c1d3059146107295780635d97b6c2146105505780635f6a13011461073e5780635faecb7614610753578063628449fd1461077a5780636373a41114610804578063638d0290146108195780636813b6d11461082e57806368a0469a1461085557806369881c0c1461086a5780636c0f79b61461088b5780636d2e4b1b146108a05780636e375427146108c15780636ebc8c86146108d657806375861a95146108ee5780637709bc781461090f5780637886f747146109305780637ca8f618146109485780637cbb7bf2146109605780637fb52f1a1461098d5780638232f3f1146109bb57806385e0a200146109d057806385e68531146109e55780638635adb514610a065780638da5cb5b14610a3357806392297d7b14610a4857806395a078e814610a5d57806396eba03d146109bb5780639867db7414610a7e5780639f46133e14610ad7578063a00b38c414610aec578063a4081d6214610b1a578063a864dfa514610b3b578063a980892d14610b62578063aa3f695214610b77578063af570c0414610b8f578063b8ff1dba14610ba4578063c287e0ed14610bb9578063c4b1978d14610bce578063cb86806d14610be3578063cdb849b714610bf8578063cf8a750314610c19578063d15d62a714610c31578063d1aeb651146106ea578063d30f8cd014610c49578063d8961c8d14610c5e578063e02dd9c214610c84578063e1a7071714610c99578063ebe9314e14610cf2578063f17bda9114610d07578063f2fde38b14610d34578063fb52222c14610d55578063fccc134f14610d76578063fe538c5a14610d8b575b005b3480156103ba57600080fd5b506103c3610db2565b60408051600160a060020a039092168252519081900360200190f35b3480156103eb57600080fd5b506103c3610dc2565b34801561040057600080fd5b50610409610dd1565b60408051918252519081900360200190f35b34801561042757600080fd5b506103ac600160a060020a0360043516610de2565b34801561044857600080fd5b5061045d600160a060020a0360043516610e32565b6040805160ff9092168252519081900360200190f35b34801561047f57600080fd5b5061045d610e50565b34801561049457600080fd5b506103ac600160a060020a0360043516610e59565b3480156104b557600080fd5b506104096111d1565b3480156104ca57600080fd5b5061045d6111d7565b3480156104df57600080fd5b506103c36004356111e5565b3480156104f757600080fd5b5061050061120d565b604080519115158252519081900360200190f35b34801561052057600080fd5b50610500600160a060020a036004351660ff602435166112a8565b34801561054757600080fd5b5061045d6112c8565b34801561055c57600080fd5b5061045d6112d7565b34801561057157600080fd5b506103c36004356112dc565b34801561058957600080fd5b506103ac600160a060020a036004351660ff602435811690604435166112ea565b3480156105b657600080fd5b506103c36004356112fc565b3480156105ce57600080fd5b506105d7611329565b6040805195865260208601949094528484019290925260608401526080830152519081900360a00190f35b34801561060e57600080fd5b5061045d600160a060020a0360043516611374565b34801561062f57600080fd5b50610638611392565b6040805160ff909316835260208301919091528051918290030190f35b34801561066157600080fd5b506104096113a1565b34801561067657600080fd5b506105006113a7565b34801561068b57600080fd5b506103ac600160a060020a036004351660ff602435811690604435166113b0565b3480156106b857600080fd5b506103ac6113bd565b3480156106cd57600080fd5b50610500600160a060020a03600435166113f9565b61050061140c565b3480156106f657600080fd5b5061045d6115fc565b34801561070b57600080fd5b50610409611601565b34801561072057600080fd5b50610409611607565b34801561073557600080fd5b5061040961160d565b34801561074a57600080fd5b506103ac611613565b34801561075f57600080fd5b50610500600160a060020a036004351660ff60243516611651565b34801561078657600080fd5b5061078f611665565b6040805160208082528351818301528351919283929083019185019080838360005b838110156107c95781810151838201526020016107b1565b50505050905090810190601f1680156107f65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561081057600080fd5b5061045d6116f3565b34801561082557600080fd5b50610409611704565b34801561083a57600080fd5b50610500600160a060020a036004351660ff6024351661170a565b34801561086157600080fd5b5061045d611724565b34801561087657600080fd5b5061045d600160a060020a0360043516611734565b34801561089757600080fd5b50610638611752565b3480156108ac57600080fd5b506103ac600160a060020a0360043516611761565b3480156108cd57600080fd5b506105006117af565b3480156108e257600080fd5b506103c36004356117c0565b3480156108fa57600080fd5b506103ac600160a060020a03600435166117d2565b34801561091b57600080fd5b50610500600160a060020a0360043516611a3c565b34801561093c57600080fd5b50610409600435611a44565b34801561095457600080fd5b5061078f600435611a63565b34801561096c57600080fd5b506103ac600160a060020a036004351660ff60243581169060443516611ad7565b34801561099957600080fd5b5061050060ff600435811690600160a060020a03602435169060443516611ae4565b3480156109c757600080fd5b5061045d611ceb565b3480156109dc57600080fd5b50610409611cf0565b3480156109f157600080fd5b506103ac600160a060020a0360043516611cfc565b348015610a1257600080fd5b506103ac600160a060020a036004351660ff602435811690604435166120a4565b348015610a3f57600080fd5b506103c36120b1565b348015610a5457600080fd5b506104096120c0565b348015610a6957600080fd5b50610500600160a060020a03600435166120cc565b348015610a8a57600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526103ac9436949293602493928401919081908401838280828437509497506120d99650505050505050565b348015610ae357600080fd5b50610638612208565b348015610af857600080fd5b5061050060ff600435811690600160a060020a03602435169060443516612217565b348015610b2657600080fd5b5061045d600160a060020a03600435166122d1565b348015610b4757600080fd5b50610500600160a060020a036004351660ff602435166122ef565b348015610b6e57600080fd5b5061063861230b565b348015610b8357600080fd5b506103c360043561231a565b348015610b9b57600080fd5b506103c361232c565b348015610bb057600080fd5b506103ac61233b565b348015610bc557600080fd5b506103ac612425565b348015610bda57600080fd5b506106386124fb565b348015610bef57600080fd5b5061040961250a565b348015610c0457600080fd5b506103ac600160a060020a0360043516612510565b348015610c2557600080fd5b506103c3600435612794565b348015610c3d57600080fd5b506103c36004356127a6565b348015610c5557600080fd5b506104096127b8565b348015610c6a57600080fd5b50610500600160a060020a036004351660243515156127c4565b348015610c9057600080fd5b5061078f6129ad565b348015610ca557600080fd5b506040805160206004803580820135601f8101849004840285018401909552848452610409943694929360249392840191908190840183828082843750949750612a089650505050505050565b348015610cfe57600080fd5b50610409612fb0565b348015610d1357600080fd5b506103ac600160a060020a036004351660ff60243581169060443516612fb6565b348015610d4057600080fd5b506103ac600160a060020a0360043516612fc3565b348015610d6157600080fd5b5061045d600160a060020a0360043516613028565b348015610d8257600080fd5b50610409613046565b348015610d9757600080fd5b50610500600160a060020a036004351660ff6024351661304c565b600354600160a060020a03165b90565b600154600160a060020a031681565b6000610ddd600b613067565b905090565b600254600160a060020a0316321480610e055750600254600160a060020a031633145b1515610e1057600080fd5b60038054600160a060020a031916600160a060020a0392909216919091179055565b600160a060020a031660009081526018602052604090205460ff1690565b60055460ff1681565b6000806000806000610e6a336113f9565b1515600114610e7857600080fd5b60009450600093505b602454841015610ed35785600160a060020a0316602385815481101515610ea457fe5b600091825260209091200154600160a060020a03161415610ec85760019450610ed3565b600190930192610e81565b841515610f81576024546023541415610f3657602380546001810182556000919091527fd57b2b5166478fd4318d2acc6cc2c704584312bdd8781b32d5d06abda57f4230018054600160a060020a031916600160a060020a038816179055610f77565b856023602454815481101515610f4857fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a031602179055505b6024805460010190555b60408051600160a060020a038816815290517fb251eb052afc73ffd02ffe85ad79990a8b3fed60d76dbc2fa2fdd7123dffd9149181900360200190a16003546040805160e060020a6363e6ffdd028152600160a060020a038981166004830152915191909216945084916363e6ffdd9160248083019260209291908290030181600087803b15801561101257600080fd5b505af1158015611026573d6000803e3d6000fd5b505050506040513d602081101561103c57600080fd5b5051604080517fd1aeb6510000000000000000000000000000000000000000000000000000000081529051919350839250600160a060020a0383169163f17bda91913091849163d1aeb6519160048083019260209291908290030181600087803b1580156110a957600080fd5b505af11580156110bd573d6000803e3d6000fd5b505050506040513d60208110156110d357600080fd5b5051604080517f479a0c510000000000000000000000000000000000000000000000000000000081529051600160a060020a0387169163479a0c519160048083019260209291908290030181600087803b15801561113057600080fd5b505af1158015611144573d6000803e3d6000fd5b505050506040513d602081101561115a57600080fd5b50516040805160e060020a63ffffffff8716028152600160a060020a03909416600485015260ff92831660248501529116604483015251606480830192600092919082900301818387803b1580156111b157600080fd5b505af11580156111c5573d6000803e3d6000fd5b50505050505050505050565b60125490565b600554610100900460ff1681565b60238054829081106111f357fe5b600091825260209091200154600160a060020a0316905081565b600354604080517f26683e140000000000000000000000000000000000000000000000000000000081523360048201529051600092600160a060020a03169182916326683e149160248082019260209290919082900301818887803b15801561127557600080fd5b505af1158015611289573d6000803e3d6000fd5b505050506040513d602081101561129f57600080fd5b505191505b5090565b6005546000906112c190610100900460ff168484611ae4565b9392505050565b60055462010000900460ff1681565b600281565b60258054829081106111f357fe5b6112f760178484846132d4565b505050565b60118054600091908390811061130e57fe5b600091825260209091200154600160a060020a031692915050565b600080600080600061133b6007613067565b611345600f613067565b61134f600b613067565b6113596013613067565b6113636017613067565b945094509450945094509091929394565b600160a060020a031660009081526010602052604090205460ff1690565b600f5460125460ff9091169082565b601e5490565b60215460ff1681565b6112f7600b8484846132d4565b600254600160a060020a03163214806113e05750600254600160a060020a031633145b15156113eb57600080fd5b600254600160a060020a0316ff5b60006114068260016127c4565b92915050565b600061141661120d565b151561142157600080fd5b60215460ff16151561143257600080fd5b6000601c80546001816001161561010002031660029004905011156114e157601e80546001818101808455600093909352601c80546114a8937f50bb669a95c7b50b7e8a6f09454034b2b14cf2b85c730dca9a539ca82cb6e35001926002610100918316159190910260001901909116046138ed565b5050601d54601f80546001810182556000919091527fa03837a25210ee280c2113ff4b77ca23440b19d4866cca721c801278fd08d80701555b6020805461150491601c91600260001961010060018416150201909116046138ed565b5042601d556040805160208181019283905260009182905261152792909161396e565b506021805460ff1916905560035460408051600160a060020a0390921680835260208301828152601c8054600260001960018316156101000201909116049385018490527f482875da75e6d9f93f74a5c1a61f14cf08822057c01232f44cb92ae998e30d8e949293909291906060830190849080156115e75780601f106115bc576101008083540402835291602001916115e7565b820191906000526020600020905b8154815290600101906020018083116115ca57829003601f168201915b5050935050505060405180910390a150600190565b600181565b60225481565b60245481565b60165490565b61161b6117af565b151561162657600080fd5b6040805160208181019283905260009182905261164492909161396e565b506021805460ff19169055565b6005546000906112c19060ff168484611ae4565b6020805460408051601f600260001961010060018716150201909416939093049283018490048402810184019091528181529190828201828280156116eb5780601f106116c0576101008083540402835291602001916116eb565b820191906000526020600020905b8154815290600101906020018083116116ce57829003601f168201915b505050505081565b600554640100000000900460ff1681565b60265481565b6005546000906112c19062010000900460ff168484611ae4565b6005546301000000900460ff1681565b600160a060020a03166000908152600c602052604090205460ff1690565b601754601a5460ff9091169082565b600154600160a060020a0316321461177857600080fd5b600160a060020a038116151561178d57600080fd5b60018054600160a060020a031916600160a060020a0392909216919091179055565b600254600160a060020a0316321490565b60198054600091908390811061130e57fe5b6002546000908190819081908190600160a060020a03163214806118005750600254600160a060020a031633145b151561180b57600080fd5b60009450600093505b6026548410156118665785600160a060020a031660258581548110151561183757fe5b600091825260209091200154600160a060020a0316141561185b5760019450611866565b600190930192611814565b8415156119145760265460255414156118c957602580546001810182556000919091527f401968ff42a154441da5f6c4c935ac46b8671f0e062baaa62a7545ba53bb6e4c018054600160a060020a031916600160a060020a03881617905561190a565b8560256026548154811015156118db57fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a031602179055505b6026805460010190555b60408051600160a060020a038816815290517f93bcaab179551bde429187645251f8e1fb8ac85801fcb1cf91eb2c9043d611179181900360200190a16003546040805160e060020a6363e6ffdd028152600160a060020a038981166004830152915191909216945084916363e6ffdd9160248083019260209291908290030181600087803b1580156119a557600080fd5b505af11580156119b9573d6000803e3d6000fd5b505050506040513d60208110156119cf57600080fd5b5051604080517f5d97b6c20000000000000000000000000000000000000000000000000000000081529051919350839250600160a060020a0383169163f17bda919130918491635d97b6c29160048083019260209291908290030181600087803b1580156110a957600080fd5b6000903b1190565b601f805482908110611a5257fe5b600091825260209091200154905081565b601e805482908110611a7157fe5b600091825260209182902001805460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152935090918301828280156116eb5780601f106116c0576101008083540402835291602001916116eb565b6112f760078484846132d4565b600080600080600080879450600260009054906101000a9004600160a060020a0316600160a060020a031685600160a060020a0316638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015611b4d57600080fd5b505af1158015611b61573d6000803e3d6000fd5b505050506040513d6020811015611b7757600080fd5b5051600160a060020a03161415611b915760019550611cdf565b611b9c898989612217565b935060018415151415611bb25760019550611cdf565b5060005b601254811015611cda576011805482908110611bce57fe5b600091825260209091200154600160a060020a031691508115801590611c125750600160a060020a038216600090815260106020526040902054600a60ff90911610155b15611cd257604080517fa00b38c400000000000000000000000000000000000000000000000000000000815260ff808c166004830152600160a060020a038b81166024840152908a166044830152915193945084939184169163a00b38c4916064808201926020929091908290030181600087803b158015611c9357600080fd5b505af1158015611ca7573d6000803e3d6000fd5b505050506040513d6020811015611cbd57600080fd5b5051151560011415611cd25760019550611cdf565b600101611bb6565b600095505b50505050509392505050565b600081565b6000610ddd6013613067565b600080600080611d0b336113f9565b151560011480611d23575033600160a060020a038616145b1515611d2e57600080fd5b600093505b602454841015611e555784600160a060020a0316602385815481101515611d5657fe5b600091825260209091200154600160a060020a03161415611e4a576023805485908110611d7f57fe5b60009182526020909120018054600160a060020a0319169055602454600019018414611e3b576023600160245403815481101515611db957fe5b60009182526020909120015460238054600160a060020a039092169186908110611ddf57fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a031602179055506023600160245403815481101515611e2157fe5b60009182526020909120018054600160a060020a03191690555b60248054600019019055611e55565b600190930192611d33565b60408051600160a060020a038716815290517f745cd29407db644ed93e3ceb61cbcab96d1dfb496989ac5d5bf514fc5a9fab9c9181900360200190a16003546040805160e060020a6363e6ffdd028152600160a060020a038881166004830152915191909216945084916363e6ffdd9160248083019260209291908290030181600087803b158015611ee657600080fd5b505af1158015611efa573d6000803e3d6000fd5b505050506040513d6020811015611f1057600080fd5b5051604080517fd1aeb6510000000000000000000000000000000000000000000000000000000081529051919350839250600160a060020a0383169163f17bda91913091849163d1aeb6519160048083019260209291908290030181600087803b158015611f7d57600080fd5b505af1158015611f91573d6000803e3d6000fd5b505050506040513d6020811015611fa757600080fd5b5051604080517f8232f3f10000000000000000000000000000000000000000000000000000000081529051600160a060020a03871691638232f3f19160048083019260209291908290030181600087803b15801561200457600080fd5b505af1158015612018573d6000803e3d6000fd5b505050506040513d602081101561202e57600080fd5b50516040805160e060020a63ffffffff8716028152600160a060020a03909416600485015260ff92831660248501529116604483015251606480830192600092919082900301818387803b15801561208557600080fd5b505af1158015612099573d6000803e3d6000fd5b505050505050505050565b6112f760138484846132d4565b600254600160a060020a031681565b6000610ddd6007613067565b60006114068260006127c4565b6120e16117af565b15156120ec57600080fd5b60215460ff16156120fc57600080fd5b805160801161210a57600080fd5b805161211c906020908184019061396e565b506021805460ff191660011790556003547fb3ac059d88af6016aca1aebb7b3e796f2e7420435c59c563687814e9b85daa7590600160a060020a0316612160610db2565b60408051600160a060020a0380851682528316602082810191909152606092820183815281546002600019610100600184161502019091160493830184905290926080830190849080156121f55780601f106121ca576101008083540402835291602001916121f5565b820191906000526020600020905b8154815290600101906020018083116121d857829003601f168201915b505094505050505060405180910390a150565b60135460165460ff9091169082565b60055460009060ff8581169116141561223d57612236600b84846136c7565b90506112c1565b60055460ff85811661010090920416141561225e57612236600f84846136c7565b60055460ff8581166201000090920416141561228057612236600784846136c7565b60055460ff8581166401000000009092041614156122a457612236601784846136c7565b60055460ff85811663010000009092041614156122c757612236601384846136c7565b5060009392505050565b600160a060020a031660009081526014602052604090205460ff1690565b6005546000906112c190640100000000900460ff168484611ae4565b600b54600e5460ff9091169082565b60158054600091908390811061130e57fe5b600354600160a060020a031681565b6000806123466139dc565b336000818152600c602081815260408084208054600a60ff8083169182068116808b5260648306819003821683038190038216958b018690526006546101009004821660020282168b8801819052988a9052969095529590940190910191821660ff1990931683179055929550909350158015906123c5575060ff8316155b156123d5576123d5600b8561371b565b60408051308152600160a060020a038616602082015260ff83168183015290517f23dcae6acc296731e3679d01e7cd963988e5a372850a0a1db2b9b01539e19ff49181900360600190a150505050565b600254600160a060020a0316331480612441575061244161120d565b151561244c57600080fd5b604080516020808252601c8054600260001961010060018416150201909116049183018290527f403f30aa5f4f2f89331a7b50054f64a00ce206f4d0a37f566ff344bbe46f8b65939092918291820190849080156124eb5780601f106124c0576101008083540402835291602001916124eb565b820191906000526020600020905b8154815290600101906020018083116124ce57829003601f168201915b50509250505060405180910390a1565b600754600a5460ff9091169082565b600a5490565b600254600090819081908190600160a060020a031633148061253a575033600160a060020a038616145b151561254557600080fd5b600093505b60265484101561266c5784600160a060020a031660258581548110151561256d57fe5b600091825260209091200154600160a060020a0316141561266157602580548590811061259657fe5b60009182526020909120018054600160a060020a03191690556026546000190184146126525760256001602654038154811015156125d057fe5b60009182526020909120015460258054600160a060020a0390921691869081106125f657fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a03160217905550602560016026540381548110151561263857fe5b60009182526020909120018054600160a060020a03191690555b6026805460001901905561266c565b60019093019261254a565b60408051600160a060020a038716815290517f2d6aa1a9629d125e23a0cf692cda7cd6795dff1652eedd4673b38ec31e387b959181900360200190a16003546040805160e060020a6363e6ffdd028152600160a060020a038881166004830152915191909216945084916363e6ffdd9160248083019260209291908290030181600087803b1580156126fd57600080fd5b505af1158015612711573d6000803e3d6000fd5b505050506040513d602081101561272757600080fd5b5051604080517f5d97b6c20000000000000000000000000000000000000000000000000000000081529051919350839250600160a060020a0383169163f17bda919130918491635d97b6c29160048083019260209291908290030181600087803b158015611f7d57600080fd5b600d8054600091908390811061130e57fe5b60098054600091908390811061130e57fe5b6000610ddd600f613067565b6003546040805160e060020a6363e6ffdd028152600160a060020a038581166004830152915160009392909216918391829184916363e6ffdd91602480830192602092919082900301818787803b15801561281e57600080fd5b505af1158015612832573d6000803e3d6000fd5b505050506040513d602081101561284857600080fd5b50519150819050600185151514156129565780600160a060020a03166315c0bac13083600160a060020a0316635d97b6c26040518163ffffffff1660e060020a028152600401602060405180830381600087803b1580156128a857600080fd5b505af11580156128bc573d6000803e3d6000fd5b505050506040513d60208110156128d257600080fd5b50516040805160e060020a63ffffffff8616028152600160a060020a03909316600484015260ff90911660248301525160448083019260209291908290030181600087803b15801561292357600080fd5b505af1158015612937573d6000803e3d6000fd5b505050506040513d602081101561294d57600080fd5b505193506129a4565b80600160a060020a03166315c0bac13083600160a060020a031663d1aeb6516040518163ffffffff1660e060020a028152600401602060405180830381600087803b1580156128a857600080fd5b50505092915050565b601c805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156116eb5780601f106116c0576101008083540402835291602001916116eb565b600080600080600080612a196117af565b1515612a2457600080fd5b866040516020018082805190602001908083835b60208310612a575780518252601f199092019160209182019101612a38565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040526040518082805190602001908083835b60208310612aba5780518252601f199092019160209182019101612a9b565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390209450601c6040516020018082805460018160011615610100020316600290048015612b495780601f10612b27576101008083540402835291820191612b49565b820191906000526020600020905b815481529060010190602001808311612b35575b50509150506040516020818303038152906040526040518082805190602001908083835b60208310612b8c5780518252601f199092019160209182019101612b6d565b5181516020939093036101000a60001901801990911692169190911790526040519201829003909120965050505084841415612cad57604080516020810191829052600090819052612be091601c9161396e565b506000601d81905560035460408051600160a060020a03909216808352908201839052606060208084018281528c51928501929092528b517f238d74c13cda9ba51e904772d41a616a1b9b30d09802484df6279fe1c3c07f519593948d9493909290916080840191860190808383885b83811015612c68578181015183820152602001612c50565b50505050905090810190601f168015612c955780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a160009550612fa6565b6000199250600091505b601e54821015612ec357601e805483908110612ccf57fe5b906000526020600020016040516020018082805460018160011615610100020316600290048015612d375780601f10612d15576101008083540402835291820191612d37565b820191906000526020600020905b815481529060010190602001808311612d23575b50509150506040516020818303038152906040526040518082805190602001908083835b60208310612d7a5780518252601f199092019160209182019101612d5b565b5181516020939093036101000a60001901801990911692169190911790526040519201829003909120935050505084811415612eb857601e805483908110612dbe57fe5b906000526020600020016000612dd491906139fb565b601f805483908110612de257fe5b6000918252602082200155601e54600019018214612e8857601e80546000198101908110612e0c57fe5b90600052602060002001601e83815481101515612e2557fe5b906000526020600020019080546001816001161561010002031660029004612e4e9291906138ed565b50601f80546000198101908110612e6157fe5b9060005260206000200154601f83815481101515612e7b57fe5b6000918252602090912001555b601e805490612e9b906000198301613a42565b50601f805490612eaf906000198301613a66565b50819250612ec3565b600190910190612cb7565b600019831415612ed257600080fd5b7f238d74c13cda9ba51e904772d41a616a1b9b30d09802484df6279fe1c3c07f51600360009054906101000a9004600160a060020a031688856040518084600160a060020a0316600160a060020a0316815260200180602001838152602001828103825284818151815260200191508051906020019080838360005b83811015612f66578181015183820152602001612f4e565b50505050905090810190601f168015612f935780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a18295505b5050505050919050565b600e5490565b6112f7600f8484846132d4565b600254600160a060020a0316321480612fe65750600254600160a060020a031633145b1515612ff157600080fd5b600160a060020a038116151561300657600080fd5b60028054600160a060020a031916600160a060020a0392909216919091179055565b600160a060020a031660009081526008602052604090205460ff1690565b601a5490565b6005546000906112c1906301000000900460ff168484611ae4565b600080805b83600301548110156132cd576130a6846002018281548110151561308c57fe5b600091825260209091200154600160a060020a0316611a3c565b1515613230577fa33a9370a938260eee2537d9480ca0caa9789521da8e57afb3a0699d3ff9b2608185600201838154811015156130df57fe5b600091825260209182902001546040805192830193909352600160a060020a03168183015260608082526004908201527f6465616400000000000000000000000000000000000000000000000000000000608082015290519081900360a00190a16002840180548290811061315057fe5b60009182526020909120018054600160a060020a031916905560038401546001929092019160001901811461321f5783600201600185600301540381548110151561319757fe5b600091825260209091200154600285018054600160a060020a0390921691839081106131bf57fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a0316021790555083600201600185600301540381548110151561320557fe5b60009182526020909120018054600160a060020a03191690555b6003840180546000190190556132c8565b7fa33a9370a938260eee2537d9480ca0caa9789521da8e57afb3a0699d3ff9b26081856002018381548110151561326357fe5b600091825260209182902001546040805192830193909352600160a060020a03168183015260608082526005908201527f616c697665000000000000000000000000000000000000000000000000000000608082015290519081900360a00190a16001015b61306c565b5092915050565b6000806000806000806132e56139dc565b60008060006132f3326113f9565b6003546040805160e060020a6363e6ffdd0281523260048201529051929c5060009b50600160a060020a03909116995089916363e6ffdd9160248082019260209290919082900301818f87803b15801561334c57600080fd5b505af1158015613360573d6000803e3d6000fd5b505050506040513d602081101561337657600080fd5b8101908080519060200190929190505050965086955085600160a060020a0316637fb52f1a8f60000160009054906101000a900460ff168f60026040518463ffffffff1660e060020a028152600401808460ff1660ff16815260200183600160a060020a0316600160a060020a031681526020018260ff1660ff1681526020019350505050602060405180830381600087803b15801561341557600080fd5b505af1158015613429573d6000803e3d6000fd5b505050506040513d602081101561343f57600080fd5b810190808051906020019092919050505098508d60010160008e600160a060020a0316600160a060020a0316815260200190815260200160002060009054906101000a900460ff169450600a8560ff1681151561349857fe5b0660ff90811680865260648783160681900382166020870181905287030381166040860152600093508b925082161580156134d7575089806134d75750885b156134e157600192505b60ff8b16158015906134f05750895b8015613512575060018460ff8e166003811061350857fe5b602002015160ff16145b156135205760019250600291505b60ff8b161580159061352f5750885b8015613552575060028460ff8e166003811061354757fe5b602002015160ff1614155b156135605760019250600191505b60ff8b161580159061356f5750895b80156135785750885b156135865760019250600291505b82151561359257600080fd5b600660ff8d16600381106135a257fe5b602081049091015460ff601f9092166101000a9004811683029085908e16600381106135ca57fe5b60ff909216602092909202015283600260200201518460016020020151856000602002015101019050808e60010160008f600160a060020a0316600160a060020a0316815260200190815260200160002060006101000a81548160ff021916908360ff1602179055508060ff16600014158015613648575060ff8516155b15613657576136578e8e61371b565b60ff8116151561366d5761366b8e8e6137b2565b505b60408051308152600160a060020a038f16602082015260ff83168183015290517f23dcae6acc296731e3679d01e7cd963988e5a372850a0a1db2b9b01539e19ff49181900360600190a15050505050505050505050505050565b600160a060020a038216600090815260018401602052604081205460ff908116906006908416600381106136f757fe5b60208104919091015460ff601f9092166101000a9004811691161015949350505050565b600282015460038301541015613774578082600201836003015481548110151561374157fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a031602179055506137a5565b60028201805460018101825560009182526020909120018054600160a060020a031916600160a060020a0383161790555b5060030180546001019055565b6000805b83600301548110156122c75782600160a060020a031684600201828154811015156137dd57fe5b600091825260209091200154600160a060020a031614156138e5576002840180548290811061380857fe5b60009182526020909120018054600160a060020a031916905560038401546000190181146138d05783600201600185600301540381548110151561384857fe5b600091825260209091200154600285018054600160a060020a03909216918390811061387057fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a031602179055508360020160018560030154038154811015156138b657fe5b60009182526020909120018054600160a060020a03191690555b600384018054600019019055600191506132cd565b6001016137b6565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106139265780548555613962565b8280016001018555821561396257600052602060002091601f016020900482015b82811115613962578254825591600101919060010190613947565b506112a4929150613a86565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106139af57805160ff1916838001178555613962565b82800160010185558215613962579182015b828111156139625782518255916020019190600101906139c1565b6060604051908101604052806003906020820280388339509192915050565b50805460018160011615610100020316600290046000825580601f10613a215750613a3f565b601f016020900490600052602060002090810190613a3f9190613a86565b50565b8154818355818111156112f7576000838152602090206112f7918101908301613aa0565b8154818355818111156112f7576000838152602090206112f79181019083015b610dbf91905b808211156112a45760008155600101613a8c565b610dbf91905b808211156112a4576000613aba82826139fb565b50600101613aa65600a165627a7a723058206dfce76b9cdf929cc9213d864de03693dda866b9d6b8323fdf69d7a813cfe7be0029"
};
module.exports = contract;