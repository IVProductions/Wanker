Ping.factory("stateService", function() {
    var currentWordID = 0;

    var functions = {};

    functions.getCurrentWordID = function() {
        return currentWordID;
    }
    functions.setCurrentWordID = function(wordID) {
        currentWordID = wordID;
    }
    return {
        functions: functions
    }
})