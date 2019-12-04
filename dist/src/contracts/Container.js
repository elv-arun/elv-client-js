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
      "name": "newOwner",
      "type": "address"
    }],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
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
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
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
  }],
  "bytecode": "60806040527f4f776e61626c6532303139303532383139333830304d4c00000000000000000060009081557f4564697461626c6532303139303830313133353530304d4c00000000000000006004557f436f6e7461696e657232303139303532393039313830304d4c00000000000000600b55600e5560018054600160a060020a031990811632908117909255600280549091169091179055611de0806100a76000396000f3006080604052600436106101bd5763ffffffff60e060020a600035041662821de381146101bf57806302d05d3f146101f05780630eaec2c5146102055780630f58a7861461023a57806314cfabb3146102615780631cdbee5a146102765780631f2caaec1461029757806326683e14146102af57806329d00219146102d057806329dedde5146102f15780632cf994221461031257806332eaf21b14610333578063331b86c014610348578063375a6e7c1461036f5780633dd71d991461026157806341c0e1b514610384578063446e88261461039957806354fd4d50146103a15780635f6a1301146103b6578063628449fd146103cb5780636d2e4b1b146104555780636e375427146104765780637886f7471461048b5780637ca8f618146104a35780638da5cb5b146104bb57806395a078e8146104d05780639867db74146104f1578063991a3a7c1461054a5780639b55f901146102055780639cb121ba14610562578063af570c0414610583578063c287e0ed14610598578063c65bcbe2146105ad578063c9e8e72d146105c2578063e02dd9c2146105e3578063e1a70717146105f8578063f2fde38b14610651578063fd08919614610672575b005b3480156101cb57600080fd5b506101d4610693565b60408051600160a060020a039092168252519081900360200190f35b3480156101fc57600080fd5b506101d46106a3565b34801561021157600080fd5b50610226600160a060020a03600435166106b2565b604080519115158252519081900360200190f35b34801561024657600080fd5b506101bd600160a060020a03600435811690602435166106e3565b34801561026d57600080fd5b50610226610858565b34801561028257600080fd5b506101d4600160a060020a036004351661085d565b3480156102a357600080fd5b506101d4600435610878565b3480156102bb57600080fd5b50610226600160a060020a0360043516610afc565b3480156102dc57600080fd5b50610226600160a060020a0360043516610b9b565b3480156102fd57600080fd5b50610226600160a060020a0360043516610ba1565b34801561031e57600080fd5b50610226600160a060020a0360043516610bbf565b34801561033f57600080fd5b506101d4610cdf565b34801561035457600080fd5b5061035d610cee565b60408051918252519081900360200190f35b34801561037b57600080fd5b50610226610cf4565b34801561039057600080fd5b506101bd610cfd565b610226610d39565b3480156103ad57600080fd5b5061035d610f29565b3480156103c257600080fd5b506101bd610f2f565b3480156103d757600080fd5b506103e0610f6d565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561041a578181015183820152602001610402565b50505050905090810190601f1680156104475780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561046157600080fd5b506101bd600160a060020a0360043516610ffb565b34801561048257600080fd5b50610226611049565b34801561049757600080fd5b5061035d60043561105a565b3480156104af57600080fd5b506103e0600435611079565b3480156104c757600080fd5b506101d46110ed565b3480156104dc57600080fd5b50610226600160a060020a03600435166110fc565b3480156104fd57600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526101bd9436949293602493928401919081908401838280828437509497506111029650505050505050565b34801561055657600080fd5b506101d460043561122f565b34801561056e57600080fd5b50610226600160a060020a0360043516611257565b34801561058f57600080fd5b506101d46112ae565b3480156105a457600080fd5b506101bd6112bd565b3480156105b957600080fd5b5061035d611393565b3480156105ce57600080fd5b506101bd600160a060020a0360043516611399565b3480156105ef57600080fd5b506103e06113e9565b34801561060457600080fd5b506040805160206004803580820135601f810184900484028501840190955284845261035d9436949293602493928401919081908401838280828437509497506114449650505050505050565b34801561065d57600080fd5b506101bd600160a060020a03600435166119ec565b34801561067e57600080fd5b50610226600160a060020a0360043516611a51565b600354600160a060020a03165b90565b600154600160a060020a031681565b600254600090600160a060020a03838116911614806106db5750600254600160a060020a031633145b90505b919050565b600254600160a060020a03163214806107065750600254600160a060020a031633145b151561071157600080fd5b600160a060020a038083166000908152600f60205260409020541615801561073f575061073d82611257565b155b156107eb57600d54600e5410156107955781600d600e5481548110151561076257fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a031602179055506107e1565b600d80546001810182556000919091527fd7b6990105719101dabeb77144f2a3385c8033acd3af97e9423a695e81ad1eb5018054600160a060020a031916600160a060020a0384161790555b600e805460010190555b600160a060020a038281166000818152600f60209081526040918290208054600160a060020a0319169486169485179055815192835282019290925281517f280016f7418306a55542432120fd1a239ef9fcc1a92694d8d44ca76be0249ea7929181900390910190a15050565b600090565b600f60205260009081526040902054600160a060020a031681565b600080805b600d54821015610af057600d80548390811061089557fe5b6000918252602091829020015460408051808401889052815180820385018152908201918290528051600160a060020a03909316945092909182918401908083835b602083106108f65780518252601f1990920191602091820191016108d7565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206000191681600160a060020a031663e02dd9c26040518163ffffffff1660e060020a028152600401600060405180830381600087803b15801561096557600080fd5b505af1158015610979573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405260208110156109a257600080fd5b8101908080516401000000008111156109ba57600080fd5b820160208101848111156109cd57600080fd5b81516401000000008111828201871017156109e757600080fd5b50509291905050506040516020018082805190602001908083835b60208310610a215780518252601f199092019160209182019101610a02565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040526040518082805190602001908083835b60208310610a845780518252601f199092019160209182019101610a65565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020600019161415610ae557600d805483908110610ac957fe5b600091825260209091200154600160a060020a03169250610af5565b60019091019061087d565b600092505b5050919050565b600354604080517f26683e14000000000000000000000000000000000000000000000000000000008152600160a060020a0384811660048301529151600093929092169182916326683e1491602480830192602092919082900301818887803b158015610b6857600080fd5b505af1158015610b7c573d6000803e3d6000fd5b505050506040513d6020811015610b9257600080fd5b50519392505050565b50600090565b6000600e5460001415610bb6575060016106de565b6106db82611257565b60008033600160a060020a03841614610bd757600080fd5b82905080600160a060020a0316638280dd8f60006040518263ffffffff1660e060020a02815260040180828152602001915050602060405180830381600087803b158015610c2457600080fd5b505af1158015610c38573d6000803e3d6000fd5b505050506040513d6020811015610c4e57600080fd5b5050604080517f27c1c21d0000000000000000000000000000000000000000000000000000000081529051600160a060020a038316916327c1c21d9160048083019260209291908290030181600087803b158015610cab57600080fd5b505af1158015610cbf573d6000803e3d6000fd5b505050506040513d6020811015610cd557600080fd5b5051159392505050565b600c54600160a060020a031681565b60075490565b600a5460ff1681565b600254600160a060020a0316321480610d205750600254600160a060020a031633145b1515610d2b57600080fd5b600254600160a060020a0316ff5b6000610d43610858565b1515610d4e57600080fd5b600a5460ff161515610d5f57600080fd5b600060058054600181600116156101000203166002900490501115610e0e5760078054600181810180845560009390935260058054610dd5937fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c6880192600261010091831615919091026000190190911604611bf4565b5050600654600880546001810182556000919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee301555b60098054610e319160059160026000196101006001841615020190911604611bf4565b5042600655604080516020810191829052600090819052610e5491600991611c79565b50600a805460ff1916905560035460408051600160a060020a039092168083526020830182815260058054600260001960018316156101000201909116049385018490527f482875da75e6d9f93f74a5c1a61f14cf08822057c01232f44cb92ae998e30d8e94929390929190606083019084908015610f145780601f10610ee957610100808354040283529160200191610f14565b820191906000526020600020905b815481529060010190602001808311610ef757829003601f168201915b5050935050505060405180910390a150600190565b600b5481565b610f37611049565b1515610f4257600080fd5b604080516020810191829052600090819052610f6091600991611c79565b50600a805460ff19169055565b6009805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610ff35780601f10610fc857610100808354040283529160200191610ff3565b820191906000526020600020905b815481529060010190602001808311610fd657829003601f168201915b505050505081565b600154600160a060020a0316321461101257600080fd5b600160a060020a038116151561102757600080fd5b60018054600160a060020a031916600160a060020a0392909216919091179055565b600254600160a060020a0316321490565b600880548290811061106857fe5b600091825260209091200154905081565b600780548290811061108757fe5b600091825260209182902001805460408051601f6002600019610100600187161502019094169390930492830185900485028101850190915281815293509091830182828015610ff35780601f10610fc857610100808354040283529160200191610ff3565b600254600160a060020a031681565b50600190565b61110a611049565b151561111557600080fd5b600a5460ff161561112557600080fd5b805160801161113357600080fd5b8051611146906009906020840190611c79565b50600a805460ff191660011790556003547fb3ac059d88af6016aca1aebb7b3e796f2e7420435c59c563687814e9b85daa7590600160a060020a031661118a610693565b60408051600160a060020a03808516825283166020820152606091810182815260098054600260001961010060018416150201909116049383018490529260808301908490801561121c5780601f106111f15761010080835404028352916020019161121c565b820191906000526020600020905b8154815290600101906020018083116111ff57829003601f168201915b505094505050505060405180910390a150565b600d80548290811061123d57fe5b600091825260209091200154600160a060020a0316905081565b600080805b600e548110156112a75783600160a060020a0316600d8281548110151561127f57fe5b600091825260209091200154600160a060020a0316141561129f57600191505b60010161125c565b5092915050565b600354600160a060020a031681565b600254600160a060020a03163314806112d957506112d9610858565b15156112e457600080fd5b60408051602080825260058054600260001961010060018416150201909116049183018290527f403f30aa5f4f2f89331a7b50054f64a00ce206f4d0a37f566ff344bbe46f8b65939092918291820190849080156113835780601f1061135857610100808354040283529160200191611383565b820191906000526020600020905b81548152906001019060200180831161136657829003601f168201915b50509250505060405180910390a1565b600e5481565b600254600160a060020a03163214806113bc5750600254600160a060020a031633145b15156113c757600080fd5b600c8054600160a060020a031916600160a060020a0392909216919091179055565b6005805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610ff35780601f10610fc857610100808354040283529160200191610ff3565b600080600080600080611455611049565b151561146057600080fd5b866040516020018082805190602001908083835b602083106114935780518252601f199092019160209182019101611474565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040526040518082805190602001908083835b602083106114f65780518252601f1990920191602091820191016114d7565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390209450600560405160200180828054600181600116156101000203166002900480156115855780601f10611563576101008083540402835291820191611585565b820191906000526020600020905b815481529060010190602001808311611571575b50509150506040516020818303038152906040526040518082805190602001908083835b602083106115c85780518252601f1990920191602091820191016115a9565b5181516020939093036101000a600019018019909116921691909117905260405192018290039091209650505050848414156116e95760408051602081019182905260009081905261161c91600591611c79565b506000600681905560035460408051600160a060020a03909216808352908201839052606060208084018281528c51928501929092528b517f238d74c13cda9ba51e904772d41a616a1b9b30d09802484df6279fe1c3c07f519593948d9493909290916080840191860190808383885b838110156116a457818101518382015260200161168c565b50505050905090810190601f1680156116d15780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a1600095506119e2565b6000199250600091505b6007548210156118ff57600780548390811061170b57fe5b9060005260206000200160405160200180828054600181600116156101000203166002900480156117735780601f10611751576101008083540402835291820191611773565b820191906000526020600020905b81548152906001019060200180831161175f575b50509150506040516020818303038152906040526040518082805190602001908083835b602083106117b65780518252601f199092019160209182019101611797565b5181516020939093036101000a600019018019909116921691909117905260405192018290039091209350505050848114156118f45760078054839081106117fa57fe5b9060005260206000200160006118109190611ce7565b600880548390811061181e57fe5b60009182526020822001556007546000190182146118c45760078054600019810190811061184857fe5b9060005260206000200160078381548110151561186157fe5b90600052602060002001908054600181600116156101000203166002900461188a929190611bf4565b5060088054600019810190811061189d57fe5b90600052602060002001546008838154811015156118b757fe5b6000918252602090912001555b60078054906118d7906000198301611d2e565b5060088054906118eb906000198301611d57565b508192506118ff565b6001909101906116f3565b60001983141561190e57600080fd5b7f238d74c13cda9ba51e904772d41a616a1b9b30d09802484df6279fe1c3c07f51600360009054906101000a9004600160a060020a031688856040518084600160a060020a0316600160a060020a0316815260200180602001838152602001828103825284818151815260200191508051906020019080838360005b838110156119a257818101518382015260200161198a565b50505050905090810190601f1680156119cf5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a18295505b5050505050919050565b600254600160a060020a0316321480611a0f5750600254600160a060020a031633145b1515611a1a57600080fd5b600160a060020a0381161515611a2f57600080fd5b60028054600160a060020a031916600160a060020a0392909216919091179055565b60025460009081908190600160a060020a0316321480611a7b5750600254600160a060020a031633145b1515611a8657600080fd5b5050600e546000190160005b600e54811015610af05783600160a060020a0316600d82815481101515611ab557fe5b600091825260209091200154600160a060020a03161415611bec57600d805482908110611ade57fe5b60009182526020909120018054600160a060020a0319169055808214611b8357600d805483908110611b0c57fe5b600091825260209091200154600d8054600160a060020a039092169183908110611b3257fe5b60009182526020909120018054600160a060020a031916600160a060020a0392909216919091179055600d805483908110611b6957fe5b60009182526020909120018054600160a060020a03191690555b600e829055600160a060020a0384166000818152600f60209081526040918290208054600160a060020a0319169055815192835290517fd41375b9d347dfe722f90a780731abd23b7855f9cf14ea7063c4cab5f9ae58e29281900390910190a160019250610af5565b600101611a92565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611c2d5780548555611c69565b82800160010185558215611c6957600052602060002091601f016020900482015b82811115611c69578254825591600101919060010190611c4e565b50611c75929150611d77565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611cba57805160ff1916838001178555611c69565b82800160010185558215611c69579182015b82811115611c69578251825591602001919060010190611ccc565b50805460018160011615610100020316600290046000825580601f10611d0d5750611d2b565b601f016020900490600052602060002090810190611d2b9190611d77565b50565b815481835581811115611d5257600083815260209020611d52918101908301611d91565b505050565b815481835581811115611d5257600083815260209020611d529181019083015b6106a091905b80821115611c755760008155600101611d7d565b6106a091905b80821115611c75576000611dab8282611ce7565b50600101611d975600a165627a7a72305820f19efcabe673bec2e3133a3751e96c7bd2aa2ca5e22cdbff8de4429161b98c900029"
};
module.exports = contract;