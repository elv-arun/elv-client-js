const contract={"abi":[{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newCreator","type":"address"}],"name":"transferCreatorship","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"contentSpace","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"updateRequest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"objectHash","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"object_hash","type":"bytes32"}],"name":"commit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"accessRequest","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":true,"stateMutability":"payable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"objectHash","type":"bytes32"}],"name":"Commit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"objectHash","type":"bytes32"}],"name":"UpdateRequest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"requestValidity","type":"uint256"}],"name":"AccessRequest","type":"event"}],"bytecode":"606060405260008054600160a060020a03328116600160a060020a031992831681178455600180548416909117905560038054339092169190921617905561042c90819061004d90396000f3006060604052600436106100a35763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166302d05d3f81146100a557806341c0e1b5146100d45780636d2e4b1b146100e75780638da5cb5b14610106578063af570c0414610119578063c287e0ed1461012c578063e02dd9c21461013f578063f14fcbc814610164578063f15518871461017a578063f2fde38b146101a1575b005b34156100b057600080fd5b6100b86101c0565b604051600160a060020a03909116815260200160405180910390f35b34156100df57600080fd5b6100a36101cf565b34156100f257600080fd5b6100a3600160a060020a03600435166101f8565b341561011157600080fd5b6100b8610299565b341561012457600080fd5b6100b86102a8565b341561013757600080fd5b6100a36102b7565b341561014a57600080fd5b610152610309565b60405190815260200160405180910390f35b341561016f57600080fd5b6100a360043561030f565b341561018557600080fd5b61018d610365565b604051901515815260200160405180910390f35b34156101ac57600080fd5b6100a3600160a060020a03600435166103a1565b600054600160a060020a031681565b60015432600160a060020a039081169116146101ea57600080fd5b600154600160a060020a0316ff5b60005432600160a060020a0390811691161461021357600080fd5b600160a060020a038116151561022857600080fd5b600054600154600160a060020a039081169116141561026a576001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600154600160a060020a031681565b600354600160a060020a031681565b60015432600160a060020a039081169116146102d257600080fd5b7f1b6452b35fd3ee7f1fad8558a9d3e79233f94d15fe657df3871f8efc2f97ef1960025460405190815260200160405180910390a1565b60025481565b60015432600160a060020a0390811691161461032a57600080fd5b60028190557f9e8a51bb6b34b9d5d18c14fd753ee3bf44e2256512665a4577281ffcc91943ff8160405190815260200160405180910390a150565b60007fca8116fd70ecea0cf35f7c08eb31491cce5ebd6bafef5bd6426862df29840463600060405190815260200160405180910390a150600190565b60015432600160a060020a039081169116146103bc57600080fd5b600160a060020a03811615156103d157600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a723058207f3d26b4f52135f14387a6bfd93e5d175ad66289ba951104a73b20599b3546f60029"}; module.exports=contract;