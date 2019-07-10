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
      "name": "level",
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
    "constant": true,
    "inputs": [],
    "name": "validateAvailability",
    "outputs": [],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "",
      "type": "uint256"
    }, {
      "name": "level",
      "type": "uint8"
    }, {
      "name": "",
      "type": "bytes32[]"
    }, {
      "name": "",
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
    "constant": false,
    "inputs": [{
      "name": "",
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
      "name": "preset_access_charge",
      "type": "uint256"
    }],
    "name": "setPresetAccessCharge",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "mandatoryPresetAccessCharge",
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
      "name": "campaign_manager",
      "type": "address"
    }],
    "name": "setCampaignManager",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "mandatory_preset_access_charge",
      "type": "bool"
    }],
    "name": "setMandatoryPresetAccessCharge",
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
    "name": "commercialOfferingManagerAddress",
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
    "name": "region",
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
    "inputs": [{
      "name": "commercial_offering_manager_address",
      "type": "address"
    }],
    "name": "setCommercialOfferingManagerAddress",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "r",
      "type": "address"
    }],
    "name": "setRegion",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "mandatory_sponsoring",
      "type": "bool"
    }],
    "name": "setMandatorySponsoring",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
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
    "inputs": [{
      "name": "content",
      "type": "address"
    }, {
      "name": "accessor",
      "type": "address"
    }],
    "name": "isAvailable",
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
      "name": "content",
      "type": "address"
    }, {
      "name": "sd",
      "type": "bool"
    }, {
      "name": "hd",
      "type": "bool"
    }, {
      "name": "start",
      "type": "uint256"
    }, {
      "name": "end",
      "type": "uint256"
    }, {
      "name": "r",
      "type": "address"
    }],
    "name": "setAvailability",
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
    "name": "availability",
    "outputs": [{
      "name": "clearedSD",
      "type": "bool"
    }, {
      "name": "clearedHD",
      "type": "bool"
    }, {
      "name": "startDate",
      "type": "uint256"
    }, {
      "name": "endDate",
      "type": "uint256"
    }, {
      "name": "region",
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
    "constant": true,
    "inputs": [],
    "name": "presetAccessCharge",
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
    "name": "mandatorySponsoring",
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
    "constant": true,
    "inputs": [],
    "name": "campaignManager",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
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
  "bytecode": "60806040527f4f776e61626c6532303139303532383139333830304d4c0000000000000000006000557f436f6e74656e7432303139303531303135313630304d4c0000000000000000006004557f41646d6772436f6d6d4f666665726e6732303139303531303135323330304d4c60055560018054600160a060020a031990811632908117909255600280549091169091179055610e0a806100a26000396000f3006080604052600436106101ab5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166302d05d3f81146101ad5780630f82c16f146101de578063112d0d32146102a3578063123e0e80146102b85780631768595314610357578063198e76711461036557806329ed61371461037d5780633513a805146103a657806335b979ca146103b1578063409fa286146103d257806341c0e1b5146103ec57806345080442146104015780634c937386146104195780635062d68d1461042e57806354fd4d5014610443578063564fb18d146104585780635661d186146104795780636a9719b11461049a5780636af27417146104b45780636d2e4b1b146104df5780637b1cdb3e146105005780638da5cb5b1461050857806391357d4b1461051d5780639e99bbea14610500578063a7b4a4df14610544578063ab3a74251461057f578063af570c04146105d6578063af75d38f146105eb578063b2041a1514610600578063b535b03e14610615578063e870ed911461062a578063f185db0c1461063a578063f2fde38b1461064f578063fb5e76e614610670575b005b3480156101b957600080fd5b506101c2610685565b60408051600160a060020a039092168252519081900360200190f35b3480156101ea57600080fd5b5060408051602060046024803582810135848102808701860190975280865261027496843560ff1696369660449591949091019291829185019084908082843750506040805187358901803560208181028481018201909552818452989b9a9989019892975090820195509350839250850190849080828437509497506106949650505050505050565b6040805160ff958616815293851660208501529190931682820152606082019290925290519081900360800190f35b3480156102af57600080fd5b506101ab61071d565b6040805160206004604435818101358381028086018501909652808552610345958335956024803560ff1696369695606495939492019291829185019084908082843750506040805187358901803560208181028481018201909552818452989b9a9989019892975090820195509350839250850190849080828437509497506107369650505050505050565b60408051918252519081900360200190f35b610345600435602435610754565b34801561037157600080fd5b506101ab600435610770565b34801561038957600080fd5b506103926107a3565b604080519115158252519081900360200190f35b6103456004356107ac565b3480156103bd57600080fd5b506101ab600160a060020a03600435166107af565b3480156103de57600080fd5b506101ab600435151561080c565b3480156103f857600080fd5b506101ab61084d565b34801561040d57600080fd5b50610345600435610889565b34801561042557600080fd5b506101c261088f565b34801561043a57600080fd5b506101c261089e565b34801561044f57600080fd5b506103456108b2565b34801561046457600080fd5b506101ab600160a060020a03600435166108b8565b34801561048557600080fd5b506101ab600160a060020a03600435166108fe565b3480156104a657600080fd5b506101ab6004351515610961565b3480156104c057600080fd5b506104c96109cf565b6040805160ff9092168252519081900360200190f35b3480156104eb57600080fd5b506101ab600160a060020a03600435166109d4565b610345610a2f565b34801561051457600080fd5b506101c2610a34565b34801561052957600080fd5b506104c9600160a060020a0360043581169060243516610a43565b34801561055057600080fd5b506101ab600160a060020a03600435811690602435151590604435151590606435906084359060a43516610b6a565b34801561058b57600080fd5b506105a0600160a060020a0360043516610cda565b6040805195151586529315156020860152848401929092526060840152600160a060020a03166080830152519081900360a00190f35b3480156105e257600080fd5b506101c2610d15565b3480156105f757600080fd5b50610345610d24565b34801561060c57600080fd5b50610392610d2a565b34801561062157600080fd5b506104c9610d4b565b6103456004356024351515610d50565b34801561064657600080fd5b506104c9610d58565b34801561065b57600080fd5b506101ab600160a060020a0360043516610d5d565b34801561067c57600080fd5b506101c2610dcf565b600154600160a060020a031681565b60008080808060ff881615156106b65760009450849350839250829150610713565b6106c03332610a43565b905060ff8116156106de576002945092506000915081905082610713565b60095460ff16151560011415610704576008546002955090935060009250905082610713565b60079450600093508392508291505b5093509350935093565b6107273332610a43565b60ff161561073457600080fd5b565b600060ff8416156107495761074961071d565b506000949350505050565b6000605f82106107665750600061076a565b5060015b92915050565b600254600160a060020a03163214806107935750600254600160a060020a031633145b151561079e57600080fd5b600855565b60095460ff1681565b90565b600254600160a060020a03163214806107d25750600254600160a060020a031633145b15156107dd57600080fd5b6007805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600254600160a060020a031632148061082f5750600254600160a060020a031633145b151561083a57600080fd5b6009805460ff1916911515919091179055565b600254600160a060020a03163214806108705750600254600160a060020a031633145b151561087b57600080fd5b600254600160a060020a0316ff5b50600090565b600654600160a060020a031681565b6009546101009004600160a060020a031681565b60055481565b600154600160a060020a031632146108cf57600080fd5b6006805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600254600160a060020a03163214806109215750600254600160a060020a031633145b151561092c57600080fd5b60098054600160a060020a039092166101000274ffffffffffffffffffffffffffffffffffffffff0019909216919091179055565b600254600160a060020a03163214806109845750600254600160a060020a031633145b151561098f57600080fd5b60078054911515740100000000000000000000000000000000000000000274ff000000000000000000000000000000000000000019909216919091179055565b600281565b600154600160a060020a031632146109eb57600080fd5b600160a060020a0381161515610a0057600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600090565b600254600160a060020a031681565b600160a060020a038083166000908152600a602052604081206009549192839261010090041682811515610a82576003830154600160a060020a031691505b600160a060020a03821615610b2e5750604080517f95a078e8000000000000000000000000000000000000000000000000000000008152600160a060020a038781166004830152915183928316916395a078e89160248083019260209291908290030181600087803b158015610af757600080fd5b505af1158015610b0b573d6000803e3d6000fd5b505050506040513d6020811015610b2157600080fd5b50511515610b2e57600a93505b4283600101541115610b3f57601493505b600283015415801590610b555750428360020154105b15610b5f57601e93505b509195945050505050565b600080600088925082600160a060020a0316638da5cb5b6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b158015610bc957600080fd5b505af1158015610bdd573d6000803e3d6000fd5b505050506040513d6020811015610bf357600080fd5b5051600160a060020a03163214610c0957600080fd5b859150811515610c17574291505b506009546101009004600160a060020a0316801515610c335750825b6040805160a08101825298151589529615156020808a0191825289890193845260608a01968752600160a060020a0392831660808b019081529a83166000908152600a9091529790972097518854975160ff199098169015151761ff0019166101009715159790970296909617875551600187015550505160028401555091516003909101805473ffffffffffffffffffffffffffffffffffffffff191691909216179055565b600a60205260009081526040902080546001820154600283015460039093015460ff80841694610100909404169290600160a060020a031685565b600354600160a060020a031681565b60085481565b60075474010000000000000000000000000000000000000000900460ff1681565b600181565b600092915050565b600481565b600254600160a060020a0316321480610d805750600254600160a060020a031633145b1515610d8b57600080fd5b600160a060020a0381161515610da057600080fd5b6002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600754600160a060020a0316815600a165627a7a72305820d6e0b5200301a3c3a48799f4f2965f2413fe8630e0ad45729f160516ca63f79c0029"
};
module.exports = contract;