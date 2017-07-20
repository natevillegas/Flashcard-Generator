var BasicCard = require ("./BasicCard");

var ClozeCard = function (text, cloze) {
	this.text = text;
	this.cloze = cloze;
	this.fullText = function() {
		console.log(this.text);
	};
	this.partial = function () {
		if (this.text.replace(this.cloze,"...") === this.text) {
			console.log(this.cloze + " does not appear in " + this.text);
		}
		else {
			var newText = this.text.replace(this.cloze, "...");
			console.log(newText);
		}
	};
};

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
firstPresidentCloze.partial(); 

// "George Washington was the first president of the United States.
firstPresidentCloze.fullText();

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");
brokenCloze.partial();

module.exports = ClozeCard;