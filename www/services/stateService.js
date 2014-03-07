Ping.factory("stateService", function() {
    var currentWordID;

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