//(function(window) {
    //var TTSPlugin = function() {

    //}

    //TTSPlugin.prototype = {

/*
        speak: function(message, success, failure) {
            cordova.exec(success, failure,
                "TTSPlugin",
                "speakStuff",
                [message]);
        }
    };*/

    //cordova.addConstructor(function() {
      //  window.TTSPlugin = new TTSPlugin();
    //});

//})(window);

var TTSPlugin = {
    speak: function(message, success, failure){
        alert("inside Method");
        cordova.exec(success, failure, "TTSPlugin", "speakStuff", [message]);
        alert("after method has been called");
    }
};