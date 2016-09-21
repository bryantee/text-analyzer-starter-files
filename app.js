$(document).ready(function() {

});

function countTotalWords(text) {
    return text.length;
}

function countUniqueWords(text) {
    var uniqueWords = [];
    // Itterate over 'text' array and if word not in uniqueWords then push
    for (var i=0; i < text.length; i++) {
        if (uniqueWords.indexOf(text[i]) < 0 ) {
          uniqueWords.push(text[i]);
        }
    }
    return uniqueWords.length;
}

function calculateAverageWordLength(text, originalText) {
    var totalWords = countTotalWords(text);
    var totalChars = calculateTotalChars(originalText);
    return totalChars / totalWords;
}

function calculateAverageSentenceLength(originalText) {
    var totalChars = calculateTotalChars(originalText);
    var totalSentences = removeReturns(originalText).split(/[!.?]+/).filter(Boolean).length;
    return totalChars / totalSentences;
}

function tokenizeText(text) {
    // split words into array and sort
    // Shamelessly borrowed from thinkful solution
    return text.toLowerCase().split(/[\s]+/).filter(Boolean).sort();
}

function stripExtras(text) {
    // strips out everything except whitespace, numbers or letters
    return text.replace(/[^\w\s]|_/g, "");
}

function removeReturns(stringText) {
    // helper function for calculateAverageSentenceLength
    // keep sentence puntuation to determine.
    return stringText.replace(/\r?\n|\r/g, "");
}

function calculateTotalChars(stringText) {
    return stripExtras(stringText).length;
}
