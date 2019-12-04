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
    "inputs": [{
      "name": "stakeholder",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }, {
      "name": "access",
      "type": "uint8"
    }],
    "name": "setRights",
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
      "name": "group",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }, {
      "name": "access",
      "type": "uint8"
    }],
    "name": "setGroupRights",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
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
    "inputs": [],
    "name": "kill",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
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
    "name": "updateRequest",
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
    "inputs": [{
      "name": "content_space",
      "type": "address"
    }],
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
  "bytecode": "608060408190527f41636365737369626c6532303139303232323133353930304d4c0000000000006000557f4f776e61626c6532303139303532383139333830304d4c0000000000000000006001557f4564697461626c6532303139303830313133353530304d4c00000000000000006005557f42617365436f6e74656e745479706532303139303831333130353030304d4c00600c5560208061180b83398101604052516002805432600160a060020a0319918216811790925560038054821690921790915560048054909116600160a060020a0390921691909117905561171e806100ed6000396000f3006080604052600436106101235763ffffffff60e060020a600035041662821de3811461012557806302d05d3f146101565780630fe1b5a21461016b57806314cfabb31461019857806322e564eb146101c1578063331b86c0146101ee578063375a6e7c1461021557806341c0e1b51461022a578063446e88261461023f57806354fd4d50146102475780635f6a13011461025c578063628449fd146102715780636d2e4b1b146102fb5780636e3754271461031c5780637886f747146103315780637ca8f618146103495780638da5cb5b146103615780639867db7414610376578063af570c04146103cf578063c287e0ed146103e4578063e02dd9c2146103f9578063e1a707171461040e578063f155188714610467578063f2fde38b1461047c575b005b34801561013157600080fd5b5061013a61049d565b60408051600160a060020a039092168252519081900360200190f35b34801561016257600080fd5b5061013a6104ad565b34801561017757600080fd5b50610123600160a060020a036004351660ff602435811690604435166104bc565b3480156101a457600080fd5b506101ad61058c565b604080519115158252519081900360200190f35b3480156101cd57600080fd5b50610123600160a060020a036004351660ff6024358116906044351661062b565b3480156101fa57600080fd5b506102036106bd565b60408051918252519081900360200190f35b34801561022157600080fd5b506101ad6106c3565b34801561023657600080fd5b506101236106cc565b6101ad610708565b34801561025357600080fd5b506102036108f8565b34801561026857600080fd5b506101236108fe565b34801561027d57600080fd5b5061028661093c565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102c05781810151838201526020016102a8565b50505050905090810190601f1680156102ed5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561030757600080fd5b50610123600160a060020a03600435166109ca565b34801561032857600080fd5b506101ad610a25565b34801561033d57600080fd5b50610203600435610bdc565b34801561035557600080fd5b50610286600435610bfb565b34801561036d57600080fd5b5061013a610c6f565b34801561038257600080fd5b506040805160206004803580820135601f8101849004840285018401909552848452610123943694929360249392840191908190840183828082843750949750610c7e9650505050505050565b3480156103db57600080fd5b5061013a610dab565b3480156103f057600080fd5b50610123610dba565b34801561040557600080fd5b50610286610e90565b34801561041a57600080fd5b506040805160206004803580820135601f8101849004840285018401909552848452610203943694929360249392840191908190840183828082843750949750610eeb9650505050505050565b34801561047357600080fd5b506101ad611493565b34801561048857600080fd5b50610123600160a060020a03600435166114c4565b600454600160a060020a03165b90565b600254600160a060020a031681565b60048054604080517f63e6ffdd000000000000000000000000000000000000000000000000000000008152600160a060020a03878116948201949094529051929091169160009183916363e6ffdd9160248082019260209290919082900301818787803b15801561052c57600080fd5b505af1158015610540573d6000803e3d6000fd5b505050506040513d602081101561055657600080fd5b50519050600160a060020a038116151561057a5761057585858561062b565b610585565b61058581858561062b565b5050505050565b60048054604080517f26683e14000000000000000000000000000000000000000000000000000000008152339381019390935251600092600160a060020a039092169182916326683e149160248082019260209290919082900301818887803b1580156105f857600080fd5b505af115801561060c573d6000803e3d6000fd5b505050506040513d602081101561062257600080fd5b505191505b5090565b604080517f8635adb500000000000000000000000000000000000000000000000000000000815230600482015260ff80851660248301528316604482015290518491600160a060020a03831691638635adb59160648082019260009290919082900301818387803b15801561069f57600080fd5b505af11580156106b3573d6000803e3d6000fd5b5050505050505050565b60085490565b600b5460ff1681565b600354600160a060020a03163214806106ef5750600354600160a060020a031633145b15156106fa57600080fd5b600354600160a060020a0316ff5b600061071261058c565b151561071d57600080fd5b600b5460ff16151561072e57600080fd5b6000600680546001816001161561010002031660029004905011156107dd57600880546001818101808455600093909352600680546107a4937ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30192600261010091831615919091026000190190911604611536565b5050600754600980546001810182556000919091527f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af01555b600a80546108009160069160026000196101006001841615020190911604611536565b504260075560408051602081019182905260009081905261082391600a916115b7565b50600b805460ff1916905560045460408051600160a060020a039092168083526020830182815260068054600260001960018316156101000201909116049385018490527f482875da75e6d9f93f74a5c1a61f14cf08822057c01232f44cb92ae998e30d8e949293909291906060830190849080156108e35780601f106108b8576101008083540402835291602001916108e3565b820191906000526020600020905b8154815290600101906020018083116108c657829003601f168201915b5050935050505060405180910390a150600190565b600c5481565b610906610a25565b151561091157600080fd5b60408051602081019182905260009081905261092f91600a916115b7565b50600b805460ff19169055565b600a805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156109c25780601f10610997576101008083540402835291602001916109c2565b820191906000526020600020905b8154815290600101906020018083116109a557829003601f168201915b505050505081565b600254600160a060020a031632146109e157600080fd5b600160a060020a03811615156109f657600080fd5b6002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60048054604080517f63e6ffdd000000000000000000000000000000000000000000000000000000008152329381019390935251600092600160a060020a03909216918391829184916363e6ffdd9160248082019260209290919082900301818787803b158015610a9557600080fd5b505af1158015610aa9573d6000803e3d6000fd5b505050506040513d6020811015610abf57600080fd5b50519150600160a060020a03821615610bd15781905080600160a060020a031663fe538c5a3083600160a060020a0316635d97b6c26040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015610b2357600080fd5b505af1158015610b37573d6000803e3d6000fd5b505050506040513d6020811015610b4d57600080fd5b50516040805160e060020a63ffffffff8616028152600160a060020a03909316600484015260ff90911660248301525160448083019260209291908290030181600087803b158015610b9e57600080fd5b505af1158015610bb2573d6000803e3d6000fd5b505050506040513d6020811015610bc857600080fd5b50519350610bd6565b600093505b50505090565b6009805482908110610bea57fe5b600091825260209091200154905081565b6008805482908110610c0957fe5b600091825260209182902001805460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152935090918301828280156109c25780601f10610997576101008083540402835291602001916109c2565b600354600160a060020a031681565b610c86610a25565b1515610c9157600080fd5b600b5460ff1615610ca157600080fd5b8051608011610caf57600080fd5b8051610cc290600a9060208401906115b7565b50600b805460ff191660011790556004547fb3ac059d88af6016aca1aebb7b3e796f2e7420435c59c563687814e9b85daa7590600160a060020a0316610d0661049d565b60408051600160a060020a038085168252831660208201526060918101828152600a80546002600019610100600184161502019091160493830184905292608083019084908015610d985780601f10610d6d57610100808354040283529160200191610d98565b820191906000526020600020905b815481529060010190602001808311610d7b57829003601f168201915b505094505050505060405180910390a150565b600454600160a060020a031681565b600354600160a060020a0316331480610dd65750610dd661058c565b1515610de157600080fd5b60408051602080825260068054600260001961010060018416150201909116049183018290527f403f30aa5f4f2f89331a7b50054f64a00ce206f4d0a37f566ff344bbe46f8b6593909291829182019084908015610e805780601f10610e5557610100808354040283529160200191610e80565b820191906000526020600020905b815481529060010190602001808311610e6357829003601f168201915b50509250505060405180910390a1565b6006805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156109c25780601f10610997576101008083540402835291602001916109c2565b600080600080600080610efc610a25565b1515610f0757600080fd5b866040516020018082805190602001908083835b60208310610f3a5780518252601f199092019160209182019101610f1b565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040526040518082805190602001908083835b60208310610f9d5780518252601f199092019160209182019101610f7e565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902094506006604051602001808280546001816001161561010002031660029004801561102c5780601f1061100a57610100808354040283529182019161102c565b820191906000526020600020905b815481529060010190602001808311611018575b50509150506040516020818303038152906040526040518082805190602001908083835b6020831061106f5780518252601f199092019160209182019101611050565b5181516020939093036101000a60001901801990911692169190911790526040519201829003909120965050505084841415611190576040805160208101918290526000908190526110c3916006916115b7565b506000600781905560045460408051600160a060020a03909216808352908201839052606060208084018281528c51928501929092528b517f238d74c13cda9ba51e904772d41a616a1b9b30d09802484df6279fe1c3c07f519593948d9493909290916080840191860190808383885b8381101561114b578181015183820152602001611133565b50505050905090810190601f1680156111785780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a160009550611489565b6000199250600091505b6008548210156113a65760088054839081106111b257fe5b90600052602060002001604051602001808280546001816001161561010002031660029004801561121a5780601f106111f857610100808354040283529182019161121a565b820191906000526020600020905b815481529060010190602001808311611206575b50509150506040516020818303038152906040526040518082805190602001908083835b6020831061125d5780518252601f19909201916020918201910161123e565b5181516020939093036101000a6000190180199091169216919091179052604051920182900390912093505050508481141561139b5760088054839081106112a157fe5b9060005260206000200160006112b79190611625565b60098054839081106112c557fe5b600091825260208220015560085460001901821461136b576008805460001981019081106112ef57fe5b9060005260206000200160088381548110151561130857fe5b906000526020600020019080546001816001161561010002031660029004611331929190611536565b5060098054600019810190811061134457fe5b906000526020600020015460098381548110151561135e57fe5b6000918252602090912001555b600880549061137e90600019830161166c565b506009805490611392906000198301611695565b508192506113a6565b60019091019061119a565b6000198314156113b557600080fd5b7f238d74c13cda9ba51e904772d41a616a1b9b30d09802484df6279fe1c3c07f51600460009054906101000a9004600160a060020a031688856040518084600160a060020a0316600160a060020a0316815260200180602001838152602001828103825284818151815260200191508051906020019080838360005b83811015611449578181015183820152602001611431565b50505050905090810190601f1680156114765780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a18295505b5050505050919050565b6040516000907fed78a9defa7412748c9513ba9cf680f57703a46dd7e0fb0b1e94063423c73e88908290a150600190565b600354600160a060020a03163214806114e75750600354600160a060020a031633145b15156114f257600080fd5b600160a060020a038116151561150757600080fd5b6003805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061156f57805485556115ab565b828001600101855582156115ab57600052602060002091601f016020900482015b828111156115ab578254825591600101919060010190611590565b506106279291506116b5565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106115f857805160ff19168380011785556115ab565b828001600101855582156115ab579182015b828111156115ab57825182559160200191906001019061160a565b50805460018160011615610100020316600290046000825580601f1061164b5750611669565b601f01602090049060005260206000209081019061166991906116b5565b50565b815481835581811115611690576000838152602090206116909181019083016116cf565b505050565b815481835581811115611690576000838152602090206116909181019083015b6104aa91905b8082111561062757600081556001016116bb565b6104aa91905b808211156106275760006116e98282611625565b506001016116d55600a165627a7a72305820e3007bb6e9a55f25f56becb8fbe6c381abb08979f192071d3797cfcf1f59d22a0029"
};
module.exports = contract;