# HW - Flashcard-Generator

## Overview

## The backend for a basic flashcard application.

* Essentially constitutes an API that allows users to create two types of flashcards.
Basic flashcards, which have a front ("Who was the first president of the United States?"), and a back ("George Washington").

* Cloze-Deleted flashcards, which present partial text ("... was the first president of the United States."), and the full text when the user requests it ("George Washington was the first president of the United States.")

* A cloze deletion is simply a sentence that has had some of its text removed. For example, given the sentence:
"George Washington was the first president of the United States."
...We can create a "cloze deletion" by removing the words "George Washington":
"... was the first president of the United States."

*This is useful for building flash card applications that forces users to remember the important part of a sentence, and is a common device in educational applications.*

## A flash card built this way has three parts:
1. The full text. This is the entire sentence users need to remember: "George Washington was the first president of the United States."
2. The cloze deletion. This is the text we've chosen to remove: "George Washington".
3. The partial text. This is what we get if we remove the cloze deletion from the full text: "... was the first president of the United States.

## Examples:

#### Constructors work as follows.
```javascript
var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial); "

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText); "

// Should throw or log an error because "oops" doesn't appear in "This doesnt work"
var brokenCloze("This doesnt work", "oops");
```