function Person(name) {
	this.name = name;
};

Person.prototype.sayName = function () {
	console.log(`Hello, I'm ${this.name}!`)
};

function Player(name, marker) {
	if (!new.target) {
		throw Error("You must use the 'new' operator to call the constructor");
	};
	this.name = name;
	this.marker = marker;

}

Player.prototype.getMarker = function () {
	console.log(`My marker is '${this.marker}'`);
};

Object.getPrototypeOf(Player.prototype); // returns Object.prototype

// Now make `Player` objects inherit from `Person`
Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype); // returns Person.prototype

const player1 = new Player('Steve', 'X');
const player2 = new Player('Alex', 'O');

player1.sayName();
player1.getMarker();

player2.sayName();
player2.getMarker();

Player.prototype.sayHello = function () {
	console.log("Hello, I'm a player!");
};
