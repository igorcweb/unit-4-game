(function() {
  let number;
  const numberDisplay = $('span#number');
  let wins = 0;
  let losses = 0;
  const gold = $('img.gold');
  const blue = $('img.blue');
  const purple = $('img.purple');
  const green = $('img.green');
  const crystals = [gold, blue, purple, green];
  let score = 0;
  const scoreDisplay = $('span#score');
  const message = $('h3.message');

  const game = {
    reset: function reset() {
      score = 0;
      scoreDisplay.text(score);
      number = Math.floor(Math.random() * 120) + 19;
      numberDisplay.text(number);
      $.each(crystals, function(index, crystal) {
        crystal.value = Math.floor(Math.random() * 12) + 1;
      });
    },
    play: function() {
      $.each(crystals, function(index, crystal) {
        crystal.on('click', function() {
          const value = $(crystal.value)[0];
          score += value;
          console.log(value);
          scoreDisplay.text(score);
          if (score === number) {
            message.text('You Win!');
            wins++;
            $('#wins').text(wins);
            game.reset();
          } else if (score > number) {
            message.text('You Lose!');
            losses++;
            $('#losses').text(losses);
            game.reset();
          } else {
            message.text('');
          }
        });
      });
    }
  };

  game.reset();
  game.play();
})();
