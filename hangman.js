var words = ['slick', 'tick', 'trick', 'round', 'women', 'children', 'i'];

var random_word = words[Math.floor(Math.random() * words.length)];

var wrong_guesses = 0;

// CREATE THE INPUT BOXES
function createInputBoxes(random_word) {

   word_letters = random_word.split('');
   var letter_container = document.getElementById('letter_container');

   for (var i= 0; i < word_letters.length; i++){
       var div = document.createElement('div');
       div.className = 'letter ' + word_letters[i];
       letter_container.appendChild(div)
   }
}

createInputBoxes(random_word);

// LISTEN FOR GUESSES

var guess = document.forms['guess_letter']

guess.addEventListener('submit', function(e){
    e.preventDefault();

    var letter_guessed = guess.single_letter.value;

    var wrong = true;

    word_letters.forEach(function(letter){
        if (letter === letter_guessed){
            wrong = false;
        }
    })

    if (wrong){
        //increment
        wrong_guesses++;
    }


    var letters = document.querySelectorAll('.letter');

    console.log(letters);

    for (var key in letters){
        if (letters[key].classList[1] === letter_guessed){
            letters[key].innerHTML = letter_guessed;
        }
    }
})

function draw_hangman(){
    var hangman = d3.select('#hangman');

    hangman.append("svg")
        .attr("width", 200)
        .attr("height", 200)

}

