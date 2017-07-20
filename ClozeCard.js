var BasicCard = require ("./BasicCard");

var CloseCard = function (text, cloze) {
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

var test = new CloseCard("Hello my friend","bird");

test.partial();

module.exports = CloseCard;