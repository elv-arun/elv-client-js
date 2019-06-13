const contract={"abi":[{"constant":false,"inputs":[],"name":"parentAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_candidate","type":"address"}],"name":"canContribute","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"content_type","type":"address"},{"name":"content_contract","type":"address"}],"name":"addContentType","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"canConfirm","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"contentTypeContracts","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"typeHash","type":"bytes32"}],"name":"findTypeByHash","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"candidate","type":"address"}],"name":"canNodePublish","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"canReview","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"content_type","type":"address"}],"name":"validType","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"contentObj","type":"address"}],"name":"publish","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"addressKMS","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"countVersionHashes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"requiresReview","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"confirmCommit","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newCreator","type":"address"}],"name":"transferCreatorship","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"canCommit","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"versionHashes","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"hasAccess","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_objectHash","type":"string"}],"name":"commit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"contentTypes","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_candidate","type":"address"}],"name":"canPublish","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"content_type","type":"address"}],"name":"whitelistedType","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"contentSpace","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"updateRequest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"contentTypesLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"address_KMS","type":"address"}],"name":"setAddressKMS","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"objectHash","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"content_type","type":"address"}],"name":"removeContentType","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"contentType","type":"address"},{"indexed":false,"name":"contentContract","type":"address"}],"name":"ContentTypeAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"contentType","type":"address"}],"name":"ContentTypeRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"spaceAddress","type":"address"},{"indexed":false,"name":"parentAddress","type":"address"},{"indexed":false,"name":"objectHash","type":"string"}],"name":"CommitPending","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"objectHash","type":"string"}],"name":"UpdateRequest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"objectHash","type":"string"}],"name":"VersionConfirm","type":"event"}],"bytecode":"60806040527f4f776e61626c6532303139303532383139333830304d4c00000000000000000060009081557f4564697461626c653230313930363037313035363030504f00000000000000006004557f436f6e7461696e657232303139303532393039313830304d4c00000000000000600855600b5560018054600160a060020a031990811632908117909255600280549091169091179055611551806100a76000396000f3006080604052600436106101865763ffffffff60e060020a600035041662821de3811461018857806302d05d3f146101b95780630eaec2c5146101ce5780630f58a7861461020357806314cfabb31461022a5780631cdbee5a1461023f5780631f2caaec1461026057806326683e141461027857806329d002191461029957806329dedde5146102ba5780632cf99422146102db57806332eaf21b146102fc578063331b86c0146103115780633dd71d991461022a57806341c0e1b514610338578063446e88261461034d57806354fd4d50146103555780636d2e4b1b1461036a5780636e3754271461038b5780637ca8f618146103a05780638da5cb5b1461042d57806395a078e8146104425780639867db7414610463578063991a3a7c146104bc5780639b55f901146101ce5780639cb121ba146104d4578063af570c04146104f5578063c287e0ed1461050a578063c65bcbe21461051f578063c9e8e72d14610534578063e02dd9c214610555578063f2fde38b1461056a578063fd0891961461058b575b005b34801561019457600080fd5b5061019d6105ac565b60408051600160a060020a039092168252519081900360200190f35b3480156101c557600080fd5b5061019d6105bc565b3480156101da57600080fd5b506101ef600160a060020a03600435166105cb565b604080519115158252519081900360200190f35b34801561020f57600080fd5b50610186600160a060020a03600435811690602435166105fc565b34801561023657600080fd5b506101ef610771565b34801561024b57600080fd5b5061019d600160a060020a0360043516610776565b34801561026c57600080fd5b5061019d600435610791565b34801561028457600080fd5b506101ef600160a060020a0360043516610a15565b3480156102a557600080fd5b506101ef600160a060020a0360043516610ab4565b3480156102c657600080fd5b506101ef600160a060020a0360043516610aba565b3480156102e757600080fd5b506101ef600160a060020a0360043516610ad8565b34801561030857600080fd5b5061019d610bf8565b34801561031d57600080fd5b50610326610c07565b60408051918252519081900360200190f35b34801561034457600080fd5b50610186610c0d565b6101ef610c49565b34801561036157600080fd5b50610326610dca565b34801561037657600080fd5b50610186600160a060020a0360043516610dd0565b34801561039757600080fd5b506101ef610e1e565b3480156103ac57600080fd5b506103b8600435610e2f565b6040805160208082528351818301528351919283929083019185019080838360005b838110156103f25781810151838201526020016103da565b50505050905090810190601f16801561041f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561043957600080fd5b5061019d610ed6565b34801561044e57600080fd5b506101ef600160a060020a0360043516610ee5565b34801561046f57600080fd5b506040805160206004803580820135601f8101849004840285018401909552848452610186943694929360249392840191908190840183828082843750949750610eeb9650505050505050565b3480156104c857600080fd5b5061019d600435610ffb565b3480156104e057600080fd5b506101ef600160a060020a0360043516611023565b34801561050157600080fd5b5061019d61107a565b34801561051657600080fd5b50610186611089565b34801561052b57600080fd5b5061032661115f565b34801561054057600080fd5b50610186600160a060020a0360043516611165565b34801561056157600080fd5b506103b86111b5565b34801561057657600080fd5b50610186600160a060020a0360043516611210565b34801561059757600080fd5b506101ef600160a060020a0360043516611275565b600354600160a060020a03165b90565b600154600160a060020a031681565b600254600090600160a060020a03838116911614806105f45750600254600160a060020a031633145b90505b919050565b600254600160a060020a031632148061061f5750600254600160a060020a031633145b151561062a57600080fd5b600160a060020a038083166000908152600c602052604090205416158015610658575061065682611023565b155b1561070457600a54600b5410156106ae5781600a600b5481548110151561067b57fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a031602179055506106fa565b600a80546001810182556000919091527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a8018054600160a060020a031916600160a060020a0384161790555b600b805460010190555b600160a060020a038281166000818152600c60209081526040918290208054600160a060020a0319169486169485179055815192835282019290925281517f280016f7418306a55542432120fd1a239ef9fcc1a92694d8d44ca76be0249ea7929181900390910190a15050565b600090565b600c60205260009081526040902054600160a060020a031681565b600080805b600a54821015610a0957600a8054839081106107ae57fe5b6000918252602091829020015460408051808401889052815180820385018152908201918290528051600160a060020a03909316945092909182918401908083835b6020831061080f5780518252601f1990920191602091820191016107f0565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206000191681600160a060020a031663e02dd9c26040518163ffffffff1660e060020a028152600401600060405180830381600087803b15801561087e57600080fd5b505af1158015610892573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405260208110156108bb57600080fd5b8101908080516401000000008111156108d357600080fd5b820160208101848111156108e657600080fd5b815164010000000081118282018710171561090057600080fd5b50509291905050506040516020018082805190602001908083835b6020831061093a5780518252601f19909201916020918201910161091b565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040526040518082805190602001908083835b6020831061099d5780518252601f19909201916020918201910161097e565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206000191614156109fe57600a8054839081106109e257fe5b600091825260209091200154600160a060020a03169250610a0e565b600190910190610796565b600092505b5050919050565b600354604080517f26683e14000000000000000000000000000000000000000000000000000000008152600160a060020a0384811660048301529151600093929092169182916326683e1491602480830192602092919082900301818887803b158015610a8157600080fd5b505af1158015610a95573d6000803e3d6000fd5b505050506040513d6020811015610aab57600080fd5b50519392505050565b50600090565b6000600b5460001415610acf575060016105f7565b6105f482611023565b60008033600160a060020a03841614610af057600080fd5b82905080600160a060020a0316638280dd8f60006040518263ffffffff1660e060020a02815260040180828152602001915050602060405180830381600087803b158015610b3d57600080fd5b505af1158015610b51573d6000803e3d6000fd5b505050506040513d6020811015610b6757600080fd5b5050604080517f27c1c21d0000000000000000000000000000000000000000000000000000000081529051600160a060020a038316916327c1c21d9160048083019260209291908290030181600087803b158015610bc457600080fd5b505af1158015610bd8573d6000803e3d6000fd5b505050506040513d6020811015610bee57600080fd5b5051159392505050565b600954600160a060020a031681565b60065490565b600254600160a060020a0316321480610c305750600254600160a060020a031633145b1515610c3b57600080fd5b600254600160a060020a0316ff5b6000610c53610771565b1515610c5e57600080fd5b600060058054600181600116156101000203166002900490501115610cd75760068054600181810180845560009390935260058054610cd4937ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f0192600261010091831615919091026000190190911604611418565b50505b60078054610cfa9160059160026000196101006001841615020190911604611418565b50604080516020810191829052600090819052610d199160079161149d565b5060408051602080825260058054600260001961010060018416150201909116049183018290527f5ae4ddb3009a8ccdedc04b2011fc66a472807bcdcff04af16286ddb27819ebe193909291829182019084908015610db95780601f10610d8e57610100808354040283529160200191610db9565b820191906000526020600020905b815481529060010190602001808311610d9c57829003601f168201915b50509250505060405180910390a190565b60085481565b600154600160a060020a03163214610de757600080fd5b600160a060020a0381161515610dfc57600080fd5b60018054600160a060020a031916600160a060020a0392909216919091179055565b600254600160a060020a0316321490565b6006805482908110610e3d57fe5b600091825260209182902001805460408051601f6002600019610100600187161502019094169390930492830185900485028101850190915281815293509091830182828015610ece5780601f10610ea357610100808354040283529160200191610ece565b820191906000526020600020905b815481529060010190602001808311610eb157829003601f168201915b505050505081565b600254600160a060020a031681565b50600190565b610ef3610e1e565b1515610efe57600080fd5b8051608011610f0c57600080fd5b8051610f1f90600790602084019061149d565b506003547fb3ac059d88af6016aca1aebb7b3e796f2e7420435c59c563687814e9b85daa7590600160a060020a0316610f566105ac565b60408051600160a060020a038085168252831660208201526060918101828152600780546002600019610100600184161502019091160493830184905292608083019084908015610fe85780601f10610fbd57610100808354040283529160200191610fe8565b820191906000526020600020905b815481529060010190602001808311610fcb57829003601f168201915b505094505050505060405180910390a150565b600a80548290811061100957fe5b600091825260209091200154600160a060020a0316905081565b600080805b600b548110156110735783600160a060020a0316600a8281548110151561104b57fe5b600091825260209091200154600160a060020a0316141561106b57600191505b600101611028565b5092915050565b600354600160a060020a031681565b600254600160a060020a03163314806110a557506110a5610771565b15156110b057600080fd5b60408051602080825260058054600260001961010060018416150201909116049183018290527f403f30aa5f4f2f89331a7b50054f64a00ce206f4d0a37f566ff344bbe46f8b659390929182918201908490801561114f5780601f106111245761010080835404028352916020019161114f565b820191906000526020600020905b81548152906001019060200180831161113257829003601f168201915b50509250505060405180910390a1565b600b5481565b600254600160a060020a03163214806111885750600254600160a060020a031633145b151561119357600080fd5b60098054600160a060020a031916600160a060020a0392909216919091179055565b6005805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610ece5780601f10610ea357610100808354040283529160200191610ece565b600254600160a060020a03163214806112335750600254600160a060020a031633145b151561123e57600080fd5b600160a060020a038116151561125357600080fd5b60028054600160a060020a031916600160a060020a0392909216919091179055565b60025460009081908190600160a060020a031632148061129f5750600254600160a060020a031633145b15156112aa57600080fd5b5050600b546000190160005b600b54811015610a095783600160a060020a0316600a828154811015156112d957fe5b600091825260209091200154600160a060020a0316141561141057600a80548290811061130257fe5b60009182526020909120018054600160a060020a03191690558082146113a757600a80548390811061133057fe5b600091825260209091200154600a8054600160a060020a03909216918390811061135657fe5b60009182526020909120018054600160a060020a031916600160a060020a0392909216919091179055600a80548390811061138d57fe5b60009182526020909120018054600160a060020a03191690555b600b829055600160a060020a0384166000818152600c60209081526040918290208054600160a060020a0319169055815192835290517fd41375b9d347dfe722f90a780731abd23b7855f9cf14ea7063c4cab5f9ae58e29281900390910190a160019250610a0e565b6001016112b6565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611451578054855561148d565b8280016001018555821561148d57600052602060002091601f016020900482015b8281111561148d578254825591600101919060010190611472565b5061149992915061150b565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106114de57805160ff191683800117855561148d565b8280016001018555821561148d579182015b8281111561148d5782518255916020019190600101906114f0565b6105b991905b8082111561149957600081556001016115115600a165627a7a72305820d0f135c974224ed331ddd8d916214b4bb5f8933f6ca2a2b7abaf3e62983bc3f20029"}; module.exports=contract;