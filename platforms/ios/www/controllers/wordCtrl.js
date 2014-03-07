function wordCtrl($scope, $location, wordFactory, stateService) {

    $scope.wordFactory = wordFactory;
    $scope.stateService = stateService;
    $scope.words = $scope.wordFactory.words;

    var jsonObject = JSON.parse(JSON.stringify(eval($scope.words)));    //parse the 'list' of words to JSON
    $scope.wordID = stateService.functions.getCurrentWordID();  //get the current ID of the word that's going to be presented
    $scope.numberOfWords = jsonObject.length;
    $scope.currentWord = jsonObject[$scope.wordID].actualWord;          //based on the wordID, get the actual word to be presented
    $scope.wordImage = jsonObject[$scope.wordID].imageURL;

    //no prev button is displayed if the first word is displayed -> is only run once when first showing the words.html view
    if ($scope.wordID == 0) {
        $("#prevBtn").hide();
    }
    if ($scope.wordID == ($scope.numberOfWords-1)) {
        $("$nextBtn").hide();
    }




    $scope.redirect = function(path) {
        $location.path(path);
    };

    $scope.nextWord = function() {
        if ($scope.wordID < ($scope.numberOfWords-1)) {
            var nextWordID = $scope.wordID + 1;
            stateService.functions.setCurrentWordID(nextWordID);
            $scope.wordID = nextWordID;
            $scope.currentWord = jsonObject[nextWordID].actualWord;
            $scope.wordImage = jsonObject[nextWordID].imageURL;
            if (nextWordID > 0) {
                $("#prevBtn").show();
            }
            if (nextWordID == ($scope.numberOfWords-1)) {
                $("#nextBtn").hide();
            }
        }
    }

    $scope.prevWord = function() {
        if ($scope.wordID > 0) {
            var prevWordID = $scope.wordID - 1;
            stateService.functions.setCurrentWordID(prevWordID);
            $scope.wordID = prevWordID;
            $scope.currentWord = jsonObject[prevWordID].actualWord;
            $scope.wordImage = jsonObject[prevWordID].imageURL;
            if (prevWordID < ($scope.numberOfWords-1)) {
                $("#nextBtn").show();
            }
            if (prevWordID == 0) {
                $("#prevBtn").hide();
            }
        }
    }

    $scope.voice = function() {
        window.TTSPlugin.speak(speakPluginResultHandler,nativePluginErrorHandler,"heisann");
    }


}