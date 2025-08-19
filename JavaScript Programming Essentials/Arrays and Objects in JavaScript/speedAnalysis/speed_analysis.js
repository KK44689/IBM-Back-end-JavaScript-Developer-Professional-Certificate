let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
    document.getElementById("inputText").value = testText;

    let userInput = document.getElementById("userInput");

    userInput.value = "";
    userInput.readonly = false;
    userInput.focus();

    document.getElementById("output").innerHTML = "";

    startTime = new Date().getTime();
}

function endTest() {
    endTime = new Date().getTime();

    // Disable user input
    document.getElementById("userInput").readonly = true;

    // Calculcate time elapsed and words per minute (WPM)
    var timeElapsed = (endTime - startTime) / 1000; // in seconds
    var userTypedText = document.getElementById("userInput").value;

    // Split the text using regx to count words correctly
    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;

    var wpm = 0;

    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    // Display results
    var outputDiv = document.getElementById("output");

    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
        `<p>Total Length:${userTypedText.length}</p>` +
        "<p>Words Typed: " + typedWords + "</p>" +
        "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
        "<p>Words Per Minute (WPM): " + wpm + "</p>";
}