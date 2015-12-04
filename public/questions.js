function buildQuestionContainer(question, previousAnswer) {
	return '<div class="buttonsection clearfix previousanswer">' +
		'<button class="btn btn-primary btn2">' + previousAnswer + '</button>' +
		'</div>' +
		'<div class="section clearfix question">' +
		'<div class="profilephoto icon"><img src="images/joice-chat.png"></div>' +
		'<div class="text">' + question.text + '</div>' +
		'</div>';
}

function buildOptionsContainer(leftOption, rightOption) {
	return '<div id="left"><button class="btn btn-primary">' + leftOption.text + '</button></div>' +
		'<div id="right"><button class="btn btn-primary">' + rightOption.text + '</button></div>';
}
// TODO Add previous question button to the buildQuestionContainer function 
// Need to point to the answer.text 

function respond(question, previousAnswerText) {
	var $questionContainer = $(buildQuestionContainer(question, previousAnswerText));
	$("#divider").append($questionContainer);

	var leftOption = question.options[0];
	var rightOption = question.options[1];
	var $optionsContainer = $(buildOptionsContainer(leftOption, rightOption));
	$("#reply").html($optionsContainer);

	answerQuestion($("#left"), leftOption);
	answerQuestion($("#right"), rightOption);
}
function done(lastAnswer){
	console.log("its over");
	var $likeButton = $('<button type="button" id="like" class="btn btn-default button-center">Like</button>');
	var $solution = $('<div class="text"><p>This recipe looks delicious.  What do you think?</p></div>');
	var $zucchini = $('<img class="solution" src="images/zucchini.jpg">');
	$("#reply").append($solution);
		$("#reply").html($likeButton);
		$("#last-solution").html($zucchini);
}
function answerQuestion($answerButton, answer) {
	$answerButton.on("click", function() {
		if (answer.nextQuestion === null) {
			done(answer); 
		} else {
			$.get('/api/questions/' + answer.nextQuestion, function(question) {
				respond(question, answer.text);
			});
		}
	});
}

$(document).ready(function() {
	console.log("loading from questions.js");

	$("#begin").on("click", function(event) {
		console.log("begin button was clicked");
		var previousAnswerText = $(this).text();
		$.get('/api/questions?start=true', function(question) {
			respond(question, previousAnswerText);
		});
	});

});