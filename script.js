/*
var user = {
	name: "John",
	age: 34,
	hobby: "soccer",
	isMarried: false,
	spells: ["abrakadabra", "shazam", "boom"],
	shout: function() {
		console.log("ahh");
	}
};

var list = [
	{
		username: "andy",
		password: "secre",
	},
	{
		username: "jess",
		password: "123",
	}
];
*/

/*
var props = {
	username: "John",
	password: "hello123",
};

var database = [ 
	{
		username: "malak"
		password: "lol123"
	},
];

var newsfeed = [
	{
		username: "sally"
		timeline: "im an immigrant"
	},
	{
		username: "sara"
		timeline: "what should i wear"
	},
	{
		username: "alaa"
		timeline: "dummy dummy dummy"
	},
];
*/

var database = [
	{
		username: "adrei",
		password: "secret",
	},
	{
		username: "sally",
		password: "123",
	},
	{
		username: "ingrid",
		password: "777",
	},

];

var newsFeed = [
{
	username: "Bobby",
	timeline: "so tired from all that learning",
},
{
	username: "sally",
	timeline: "js is so cool",
}
];

//create a function to check a users username and password
var userNamePrompt = prompt("whats your username");
var passwordPrompt = prompt("whats your password?");

function isUserValid(username, password)
{
	{
	for(var i=0; i<database.length; i++)
	{
		if(database[i].username === username && 
			database[i].password === password)
			return true;
	}
	return false
}

function signIn(username, passwork)

	//if(user === database[0].username && pass === database[0].password)
	//{
	//	console.log(newsFeed);
	//}
	//else {
	//	alert("Sorry, wrong username and password");
	//}

}

signIn(userNamePrompt, passwordPrompt);
//usernamePrompt contains whatever was written in the first pop up box
//passwordPropmt contains whatever is written in the second pop up box



/*
var todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study js",
	"eat healthy",
];

var counterTwo = 10;

todos.forEach(function(i)
{
	console.log(i);
});

//forEach takes an array and asks for an argument to know what to do with it 
//The function recieves the argument of i 
*/