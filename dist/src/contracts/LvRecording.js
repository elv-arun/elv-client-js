"use strict";

var contract = {
  "abi": [{
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
    "inputs": [{
      "name": "",
      "type": "uint8"
    }, {
      "name": "",
      "type": "bytes32[]"
    }, {
      "name": "",
      "type": "address[]"
    }],
    "name": "runAccessInfo",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }, {
      "name": "",
      "type": "uint8"
    }, {
      "name": "",
      "type": "uint8"
    }, {
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "requestID",
      "type": "uint256"
    }, {
      "name": "level",
      "type": "uint8"
    }, {
      "name": "custom_values",
      "type": "bytes32[]"
    }, {
      "name": "stakeholders",
      "type": "address[]"
    }],
    "name": "runAccess",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "contentAddress",
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
      "name": "programId",
      "type": "string"
    }, {
      "name": "programStart",
      "type": "uint256"
    }, {
      "name": "programEnd",
      "type": "uint256"
    }, {
      "name": "programTitle",
      "type": "string"
    }, {
      "name": "signature",
      "type": "bytes1[]"
    }],
    "name": "logProgramId",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "requestID",
      "type": "uint256"
    }, {
      "name": "score_pct",
      "type": "uint256"
    }],
    "name": "runFinalize",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_startTime",
      "type": "uint256"
    }, {
      "name": "_endTime",
      "type": "uint256"
    }],
    "name": "setTimes",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "endTime",
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
      "name": "proposed_status_code",
      "type": "int256"
    }],
    "name": "runStatusChange",
    "outputs": [{
      "name": "",
      "type": "int256"
    }],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_startTime",
      "type": "uint256"
    }],
    "name": "setStartTime",
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
      "name": "",
      "type": "int256"
    }],
    "name": "runDescribeStatus",
    "outputs": [{
      "name": "",
      "type": "bytes32"
    }],
    "payable": false,
    "stateMutability": "pure",
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
    "name": "recordingStreamContract",
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
    "name": "DEFAULT_ACCESS",
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
    "name": "startTime",
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
    "name": "runCreate",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": true,
    "stateMutability": "payable",
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
    "name": "recordingStatus",
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
    "name": "runKill",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_recordingStatus",
      "type": "uint8"
    }],
    "name": "updateRecordingStatus",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_contentAddress",
      "type": "address"
    }],
    "name": "setContentAddress",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
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
    "name": "DEFAULT_SEE",
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
    "name": "runEdit",
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
      "name": "_endTime",
      "type": "uint256"
    }],
    "name": "setEndTime",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "",
      "type": "uint256"
    }, {
      "name": "",
      "type": "bool"
    }],
    "name": "runGrant",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "requestID",
      "type": "uint256"
    }, {
      "name": "score_pct",
      "type": "uint256"
    }, {
      "name": "originator",
      "type": "address"
    }],
    "name": "runFinalizeExt",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "DEFAULT_CHARGE",
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
      "name": "newOwner",
      "type": "address"
    }],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "constructor"
  }, {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "timestamp",
      "type": "uint256"
    }, {
      "indexed": false,
      "name": "startTime",
      "type": "uint256"
    }, {
      "indexed": false,
      "name": "endTime",
      "type": "uint256"
    }],
    "name": "SetTimes",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "timestamp",
      "type": "uint256"
    }, {
      "indexed": false,
      "name": "status",
      "type": "uint8"
    }],
    "name": "UpdateRecordingStatus",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "timestamp",
      "type": "uint256"
    }, {
      "indexed": false,
      "name": "programId",
      "type": "string"
    }],
    "name": "RecordProgramId",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "label",
      "type": "string"
    }],
    "name": "Log",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "label",
      "type": "string"
    }, {
      "indexed": false,
      "name": "b",
      "type": "bool"
    }],
    "name": "LogBool",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "label",
      "type": "string"
    }, {
      "indexed": false,
      "name": "a",
      "type": "address"
    }],
    "name": "LogAddress",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "label",
      "type": "string"
    }, {
      "indexed": false,
      "name": "u",
      "type": "uint256"
    }],
    "name": "LogUint256",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "label",
      "type": "string"
    }, {
      "indexed": false,
      "name": "u",
      "type": "int256"
    }],
    "name": "LogInt256",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "label",
      "type": "string"
    }, {
      "indexed": false,
      "name": "b",
      "type": "bytes32"
    }],
    "name": "LogBytes32",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "label",
      "type": "string"
    }, {
      "indexed": false,
      "name": "payee",
      "type": "address"
    }, {
      "indexed": false,
      "name": "amount",
      "type": "uint256"
    }],
    "name": "LogPayment",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "result",
      "type": "uint256"
    }],
    "name": "RunCreate",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "result",
      "type": "uint256"
    }],
    "name": "RunKill",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "proposedStatusCode",
      "type": "int256"
    }, {
      "indexed": false,
      "name": "returnStatusCode",
      "type": "int256"
    }],
    "name": "RunStatusChange",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "level",
      "type": "uint8"
    }, {
      "indexed": false,
      "name": "calculateAccessCharge",
      "type": "int256"
    }],
    "name": "RunAccessCharge",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "requestID",
      "type": "uint256"
    }, {
      "indexed": false,
      "name": "result",
      "type": "uint256"
    }],
    "name": "RunAccess",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "requestID",
      "type": "uint256"
    }, {
      "indexed": false,
      "name": "result",
      "type": "uint256"
    }],
    "name": "RunFinalize",
    "type": "event"
  }],
  "bytecode": "60806040527f4f776e61626c6532303139303532383139333830304d4c00000000000000000060009081557f436f6e74656e7432303139313033313136323030304d4c0000000000000000006004557f4c765265636f7264696e6732303139313033313230343130304d4c00000000006005556001805432600160a060020a03199182168117909255600280549091169091179055600681905560078190556008805461010060a860020a03191661010033021760ff19169055600a819055600c8190556113599081906100d390396000f3006080604052600436106101715763ffffffff60e060020a60003504166302d05d3f81146101735780630f82c16f146101a4578063123e0e8014610269578063129b977514610308578063172cc9211461031d57806317685953146103fa57806322434836146104085780633197cbb6146104235780633513a805146104385780633e0a322d1461044357806341c0e1b51461045b578063450804421461047057806354fd4d50146104885780635ebfe0711461049d5780636af27417146104b25780636d2e4b1b146104dd57806378e97925146104fe5780637b1cdb3e146105135780638da5cb5b1461051b578063922386c5146105305780639e99bbea14610545578063a3b2d3d51461054d578063a4a22c5914610568578063af570c0414610589578063b535b03e1461059e578063c9f3d94c146105b3578063ccb98ffc146105c8578063e870ed91146105e0578063eb81eff0146105f0578063f185db0c1461060a578063f2fde38b1461061f575b005b34801561017f57600080fd5b50610188610640565b60408051600160a060020a039092168252519081900360200190f35b3480156101b057600080fd5b5060408051602060046024803582810135848102808701860190975280865261023a96843560ff1696369660449591949091019291829185019084908082843750506040805187358901803560208181028481018201909552818452989b9a99890198929750908201955093508392508501908490808284375094975061064f9650505050505050565b6040805160ff958616815293851660208501529190931682820152606082019290925290519081900360800190f35b60408051602060046044358181013583810280860185019096528085526102f6958335956024803560ff1696369695606495939492019291829185019084908082843750506040805187358901803560208181028481018201909552818452989b9a99890198929750908201955093508392508501908490808284375094975061065e9650505050505050565b60408051918252519081900360200190f35b34801561031457600080fd5b50610188610860565b34801561032957600080fd5b506040805160206004803580820135601f810184900484028501840190955284845261017194369492936024939284019190819084018382808284375050604080516020888301358a018035601f8101839004830284018301909452838352979a89359a8a8301359a91999098506060909101965091945090810192508190840183828082843750506040805187358901803560208181028481018201909552818452989b9a99890198929750908201955093508392508501908490808284375094975061086f9650505050505050565b6102f6600435602435610a9b565b34801561041457600080fd5b50610171600435602435610b3f565b34801561042f57600080fd5b506102f6610c00565b6102f6600435610c06565b34801561044f57600080fd5b50610171600435610c09565b34801561046757600080fd5b50610171610d09565b34801561047c57600080fd5b506102f6600435610d45565b34801561049457600080fd5b506102f6610d4b565b3480156104a957600080fd5b50610188610d51565b3480156104be57600080fd5b506104c7610d65565b6040805160ff9092168252519081900360200190f35b3480156104e957600080fd5b50610171600160a060020a0360043516610d6a565b34801561050a57600080fd5b506102f6610dc5565b6102f6610dcb565b34801561052757600080fd5b50610188610dd0565b34801561053c57600080fd5b506104c7610ddf565b6102f6610de8565b34801561055957600080fd5b5061017160ff60043516610e62565b34801561057457600080fd5b50610171600160a060020a0360043516610f6a565b34801561059557600080fd5b50610188610fc7565b3480156105aa57600080fd5b506104c7610fd6565b3480156105bf57600080fd5b506102f6610fdb565b3480156105d457600080fd5b50610171600435611077565b6102f66004356024351515611127565b6102f6600435602435600160a060020a036044351661112f565b34801561061657600080fd5b506104c76112b6565b34801561062b57600080fd5b50610171600160a060020a03600435166112bb565b600154600160a060020a031681565b60076000808093509350935093565b60008060008560ff16111561085457600860019054906101000a9004600160a060020a0316905082600081518110151561069457fe5b90602001906020020151600160a060020a03166000141561073957604080517f04fbef35000000000000000000000000000000000000000000000000000000008152600481018890523260248201524260448201529051600160a060020a038316916304fbef3591606480830192600092919082900301818387803b15801561071c57600080fd5b505af1158015610730573d6000803e3d6000fd5b50505050610854565b600a80546001019055600b54600c54101561077357600a54600b600c5481548110151561076257fe5b6000918252602090912001556107aa565b600a54600b80546001810182556000919091527f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db901555b600c54600101600c8190555080600160a060020a03166304fbef35600a548560008151811015156107d757fe5b90602001906020020151896040518463ffffffff1660e060020a0281526004018084815260200183600160a060020a0316600160a060020a031681526020018281526020019350505050600060405180830381600087803b15801561083b57600080fd5b505af115801561084f573d6000803e3d6000fd5b505050505b50600095945050505050565b600954600160a060020a031681565b600254600090600160a060020a03163214806108955750600254600160a060020a031633145b15156108a057600080fd5b600860019054906101000a9004600160a060020a0316905080600160a060020a031663782f1a6f878787876040518563ffffffff1660e060020a028152600401808060200185815260200184815260200180602001838103835287818151815260200191508051906020019080838360005b8381101561092a578181015183820152602001610912565b50505050905090810190601f1680156109575780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b8381101561098a578181015183820152602001610972565b50505050905090810190601f1680156109b75780820380516001836020036101000a031916815260200191505b509650505050505050600060405180830381600087803b1580156109da57600080fd5b505af11580156109ee573d6000803e3d6000fd5b505050507f453384b91e17e6c44d171f27d5d32a864cf9cc9740578ffd6552d323aa97337242876040518083815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610a58578181015183820152602001610a40565b50505050905090810190601f168015610a855780820380516001836020036101000a031916815260200191505b50935050505060405180910390a1505050505050565b600854604080517f01a392bf0000000000000000000000000000000000000000000000000000000081526004810185905260ff8416602482015232604482015242606482015290516000926101009004600160a060020a03169182916301a392bf91608480820192879290919082900301818387803b158015610b1d57600080fd5b505af1158015610b31573d6000803e3d6000fd5b506000979650505050505050565b60068290556007819055604080514281526020810184905280820183905290516000917f3e5026851758e1ab6e995b071b048e26e92f459b047600ff68914479d5074c54919081900360600190a1600860019054906101000a9004600160a060020a0316905080600160a060020a031663c2ccedad6040518163ffffffff1660e060020a028152600401600060405180830381600087803b158015610be357600080fd5b505af1158015610bf7573d6000803e3d6000fd5b50505050505050565b60075481565b90565b600254600090600160a060020a0316321480610c2f5750600254600160a060020a031633145b1515610c3a57600080fd5b811515610c4a5742600655610c50565b60068290555b60065460075460408051428152602081019390935282810191909152517f3e5026851758e1ab6e995b071b048e26e92f459b047600ff68914479d5074c549181900360600190a1600860019054906101000a9004600160a060020a0316905080600160a060020a031663c2ccedad6040518163ffffffff1660e060020a028152600401600060405180830381600087803b158015610ced57600080fd5b505af1158015610d01573d6000803e3d6000fd5b505050505050565b600254600160a060020a0316321480610d2c5750600254600160a060020a031633145b1515610d3757600080fd5b600254600160a060020a0316ff5b50600090565b60055481565b6008546101009004600160a060020a031681565b600281565b600154600160a060020a03163214610d8157600080fd5b600160a060020a0381161515610d9657600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60065481565b600090565b600254600160a060020a031681565b60085460ff1681565b600080600860019054906101000a9004600160a060020a0316905080600160a060020a031663c96444f06040518163ffffffff1660e060020a028152600401600060405180830381600087803b158015610e4157600080fd5b505af1158015610e55573d6000803e3d6000fd5b50505050606491505b5090565b600254600090600160a060020a0316321480610e885750600254600160a060020a031633145b1515610e9357600080fd5b6008805460ff191660ff84811691909117918290556040805142815292909116602083015280517f6fff8c8938f3906f27a679f8d6b6652c28d82df5e27e55ef5cdc5f96b06dee099281900390910190a1600860019054906101000a9004600160a060020a0316905080600160a060020a0316632b45298e6040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015610f3a57600080fd5b505af1158015610f4e573d6000803e3d6000fd5b505050506040513d6020811015610f6457600080fd5b50505050565b600254600160a060020a0316321480610f8d5750600254600160a060020a031633145b1515610f9857600080fd5b6009805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600354600160a060020a031681565b600181565b600080600860019054906101000a9004600160a060020a0316905080600160a060020a031663d52e66796040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561103457600080fd5b505af1158015611048573d6000803e3d6000fd5b505050506040513d602081101561105e57600080fd5b50511561106e5760009150610e5e565b600a9150610e5e565b60008115156110895742600755610c50565b6007829055600654604080514281526020810192909252818101849052517f3e5026851758e1ab6e995b071b048e26e92f459b047600ff68914479d5074c549181900360600190a1600860019054906101000a9004600160a060020a0316905080600160a060020a031663c2ccedad6040518163ffffffff1660e060020a028152600401600060405180830381600087803b158015610ced57600080fd5b600092915050565b600854600c546000916101009004600160a060020a0316908210156112195780600160a060020a03166301a392bf600b6001600c540381548110151561117157fe5b60009182526020822001546040805160e060020a63ffffffff8616028152600481019290925260ff89166024830152600160a060020a0388166044830152606482018a9052516084808301939282900301818387803b1580156111d357600080fd5b505af11580156111e7573d6000803e3d6000fd5b50505050600b6001600c54038154811015156111ff57fe5b6000918252602082200155600c80546000190190556112ab565b604080517f01a392bf00000000000000000000000000000000000000000000000000000000815260006004820181905260ff87166024830152600160a060020a038681166044840152606483018990529251928416926301a392bf92608480820193929182900301818387803b15801561129257600080fd5b505af11580156112a6573d6000803e3d6000fd5b505050505b506000949350505050565b600481565b600254600160a060020a03163214806112de5750600254600160a060020a031633145b15156112e957600080fd5b600160a060020a03811615156112fe57600080fd5b6002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a72305820faa8bab9e1808db1f09630ee4be84208f7b621042e1ad8fb62ca12ede7f75c390029"
};
module.exports = contract;