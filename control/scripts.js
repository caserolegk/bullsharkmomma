
  $(document).ready(function() {
    // defining the words to rotate through
    var newWords = ["begun", "finished", "loved", "found", "broken","fixed", "ran from","torn","cherished"];
    // Set an initial index for the newWords array
    var newIndex = 0;
     
    $(".button") .click(function() {
      var currentText = $("#mydear").text();
      var words = currentText.split(" ");
      var randomIndex = Math.floor(Math.random() * words.length);
      words[randomIndex] = newWords[newIndex];
      newIndex = (newIndex + 1) % newWords.length; // Increment the index, looping back to 0 when it reaches the end of the array -need to research more to understand the math - why does it continue compiling?
      var newText = words.join(" ");
  
      $("#mydear").text(newText);
    });

    $(".fade").click(function(){
        $(".poem").fadeOut(2000);
        $(".fade").fadeOut(3500);
      }); 
  });