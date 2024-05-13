function makeBigger() {
    document.getElementById("inputText").style.fontSize = "24pt";
}

function applyStyle() {
    var inputText = document.getElementById("inputText");
    var fancyRadio = document.getElementById("fancyRadio");

    if (fancyRadio.checked) {
        inputText.style.fontWeight = "bold";
        inputText.style.color = "blue";
        inputText.style.textDecoration = "underline";
    } else {
        inputText.style.fontWeight = "normal";
        inputText.style.color = "inherit";
        inputText.style.textDecoration = "none";
    }
}

function mooify() {
    var inputText = document.getElementById("inputText");
    var text = inputText.value;
    var sentences = text.split(".");
    
    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].trim().split(" ");
        if (words.length > 0) {
            words[words.length - 1] = words[words.length - 1].toUpperCase() + "-Moo";
            sentences[i] = words.join(" ");
        }
    }
    
    inputText.value = sentences.join(".");
}
