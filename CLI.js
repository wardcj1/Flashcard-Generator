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

var questionArray = [];
var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
questionArray.push(firstPresident);
var q2 = new BasicCard("When is this", "Now");
questionArray.push(q2);
// var q3 = new BasicCard("", "");
questionArray.push(q2);
// var q4 =  new BasicCard("", "");
questionArray.push(q2);
// var q5 =  new BasicCard("", "");
questionArray.push(q2);

var currentQuestion = 0;

	function askQuestion() {
	inquirer.prompt([
		{
			type: 'input',
			message: questionArray[currentQuestion].front + '\nAnswer: ',
			name: 'userGuess'
		}
	]).then(function (answers) {
		console.log('\n');

		if (answers.userGuess === questionArray[currentQuestion].back) {
			console.log('Correct!');
			console.log(questionArray[currentQuestion].back); 
			currentQuestion++;
			askQuestion();
		} else {
			console.log('Wrong.');
			console.log(questionArray[currentQuestion].back); 
			currentQuestion++;
			askQuestion();
		}
	})
};	

askQuestion();