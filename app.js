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
    var totalChars = stripExtras(originalText).length;
    return totalChars / totalWords;
}

function calculateAverageSentenceLength(text) {

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
