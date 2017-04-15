// Instructions:
// Use prototypes to attach these methods, wherever possible.
// Create a BasicCard constructor. It should accept front and back arguments.

// dependency for inquirer npm package
var inquirer = require("inquirer");

// constructor function used to create BasicCard
function BasicCard(front, back) {
  this.front = front;
  this.back = back;
}

var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
// var q2 = new BasicCard();
// var q3 = new BasicCard();
// var q4 = new BasicCard();
// var q5 = new BasicCard();

	function askQuestion() {
	inquirer.prompt([
		{
			type: 'input',
			message: firstPresident.front + '\nAnswer: ',
			name: 'userGuess'
		}
	]).then(function (answers) {
		console.log('\n');

		if (answers.userGuess === firstPresident.back) {
			console.log('Correct!');
			console.log(firstPresident.back); 
		} else {
			console.log('Wrong.');
			console.log(firstPresident.back); 
		}
	})
};	

askQuestion();