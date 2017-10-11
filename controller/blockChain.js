const firebase = require("firebase");

var config = {
	apiKey: "AIzaSyCn-5NvqbMkMo5shfqCEQI4GsN9TVPJO1s",
	authDomain: "slack-house-cup.firebaseapp.com",
	databaseURL: "https://slack-house-cup.firebaseio.com",
	projectId: "slack-house-cup",
	storageBucket: "slack-house-cup.appspot.com",
	messagingSenderId: "841241313529"
};
firebase.initializeApp(config);

module.exports = {
	createBlock: (block, house) => { 
		firebase.database().ref(`/houses/${house}/points/${block.hash}`).set(block) 
	},
	getBlock: (house, hash) => firebase.database().ref(`/houses/${house}/points/${hash}`).once('value'),
	getLastBlock: house => firebase.database().ref(`/houses/${house}/points`).limitToLast(1).once('value'),
	getComicsPage: page => firebase.database().ref(`/comic/pages/${page}`).once('value'),
};
