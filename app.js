$(document).ready(function() {

});

function countTotalWords(text) {
    return text.length;
}

function countUniqueWords(text) {

}

function calculateAverageWordLength(text) {

}

function calculateAverageSentenceLength(text) {

}

function tokenizeText(text) {
    // split words into array and sort
    return text.toLowerCase().split(/[\s]+/).filter(Boolean).sort();
}

function stripExtras(text) {
    // strips out everything except whitespace, numbers or letters
    return text.replace(/[^\w\s]|_/g, "");
}
