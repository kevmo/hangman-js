var words = ['slick', 'tick', 'trick', 'round', 'women', 'children', 'i'];

var random_word = words[Math.floor(Math.random() * words.length)];

// CREATE THE INPUT BOXES
function createInputBoxes(random_word) {

   var letters = random_word.split(''),
       letter_container = document.getElementById('letter_container');

   for (var i= 0; i < letters.length; i++){
       var div = document.createElement('div');
       div.className = 'letter ' + letters[i];
       letter_container.appendChild(div)
   }

   console.log(letters);
}

createInputBoxes(random_word);

// LISTEN FOR GUESSES

var guess = document.forms['guess_letter']

guess.addEventListener('submit', function(e){
    e.preventDefault();

    var guess = guess.single_letter_value;

    var
})

