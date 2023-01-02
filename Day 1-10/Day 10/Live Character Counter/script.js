var countTarget = document.querySelector("#wordCountInput");
var wordCount = document.querySelector("#wordCount");
var characterCount = document.querySelector("#characterCount");

var count = function() {
    var characters = countTarget.value;
    var characterLength = characters.length;
    var words = characters.split(/[\n\r\s]+/g).filter(function (word) {
        return word.length > 0;
    })
    wordCount.innerHTML = words.length;
    characterCount.innerHTML = characterLength;

}
count();
window.addEventListener("input", function(event){
    if(event.target.matches("#wordCountInput")) {
        count();
    }
})