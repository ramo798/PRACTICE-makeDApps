if (typeof web3 !== 'undefined') {
    web3js = new Web3(web3.currentProvider);
} else {
    alert("MetaMaskをインストールして下さい．");
}

web3js.eth.getAccounts(function(err, accounts) {
    coinbase = accounts[0];
    console.log("coinbase is " + coinbase);
    if (typeof coinbase === 'undefined') {
        alert("MetaMaskを起動してください．")
    }
});
const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_index",
				"type": "uint256"
			},
			{
				"name": "_objectname",
				"type": "string"
			},
			{
				"name": "_ownername",
				"type": "string"
			}
		],
		"name": "setObject",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_objectname",
				"type": "string"
			},
			{
				"name": "_ownername",
				"type": "string"
			}
		],
		"name": "testsetObject",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "getObject",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "objects",
		"outputs": [
			{
				"name": "objectname",
				"type": "string"
			},
			{
				"name": "owenername",
				"type": "string"
			},
			{
				"name": "owneraddress",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "testgetdata",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "testgetObject",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
const address = "0xd7a9100f326336e682c521a059b842ddf2f182b1";



contract = new web3js.eth.Contract(abi, address);

function registerInfo() {
    // テキストボックスに入力されている情報を取得する
    var objectname = document.getElementById("objectname").value;
    var owenername = document.getElementById("owenername").value;
    var index = document.getElementById("index").value;

    // コントラクトの呼び出し
    return contract.methods.setObject(index, objectname,owenername)
    .send({ from: coinbase })
    .on("receipt", function(receipt){
        console.log("success");
    })
    .on("error", function(error){
            console.log("error"); 
    });
}

function showInfo() {
    var readindex = document.getElementById("readindex").value;
    // 表示されている情報を空にする
    sl = document.getElementById('AccountInfo');
    while(sl.lastChild) {
        sl.removeChild(sl.lastChild);
    }

    // 変数を取得する
    contract.methods.getObject(readindex).call().then(console.log)

    
}