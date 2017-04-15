// Instructions:
// The bulk of this assignment is implementing ClozeCard. 
// only need to determine an efficient way to store cloze-deleted cards—you don't have to solve the problem of displaying them. You are free to decide how you'd like to implement this. clozeDelArray[]

// Create a ClozeCard constructor. It should accept text and cloze arguments.
// should throw or log an error when the cloze deletion does not appear in the input text.
// have a property or method that contains or returns only the cloze-deleted portion of the text.
// have a property or method that contains or returns only the partial text.
// have a property or method that contains or returns only the full text.

// dependency for inquirer npm package
var inquirer = require("inquirer");

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze("This doesn't work", "oops");

var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
// "George Washington"
console.log(firstPresidentCloze.cloze); 
// " ... was the first president of the United States."
console.log(firstPresidentCloze.partial);
// "George Washington was the first president of the United States."
console.log(firstPresidentCloze.fullText);

// stores the cloze-deleted cards
var clozeDelArray = [];
var currentQuestion = 0;
var answerCorrect = 0;
var answerWrong = 0;

for (i=0; i < clozeDelArray -1; i++) {
	// constructor function used to create ClozeCard
function ClozeCard(fullText, cloze) {
 	this.fullText = fullText;
	this.cloze = cloze;
	this.partial = fullText.replace(cloze, '...');
	}
}

function askQuestion() {
	inquirer.prompt([
		{
			type: 'input',
			message: clozeDelArray[currentQuestion].partial + '\nAnswer: ',
			name: 'userGuess'
		}
	]).then(function (answers) {
		console.log('\n');

		if (answers.userGuess === clozeDelArray[currentQuestion].cloze) {
			console.log('Correct!');
			answerCorrect++;
		} else {
			console.log('Wrong.');
			answerWrong++;
		}
		console.log(clozeDelArray[currentQuestion].fullText);

		if (currentQuestion < clozeDelArray.length - 1) {
			currentQuestion++;
			askQuestion();
		} else {
			console.log('Correct Answers: ' + answerCorrect);
			console.log('Wrong Answers: ' + answerWrong);
			}
		}
	};

askQuestion();