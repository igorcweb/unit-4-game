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
  const scoreDisplay = $('h3#score');
  const message = $('h3.message');
  const crystalsDiv = $('div.crystals');
  const game = {
    init: function() {
      score = 0;
      scoreDisplay.text(score);
      number = Math.floor(Math.random() * 120) + 19;
      numberDisplay.text(number);
      $.each(crystals, function(index, crystal) {
        crystal.attr('data-value', Math.floor(Math.random() * 12) + 1);
      });
    },
    play: function() {
      crystalsDiv.on('click', '.crystal', function() {
        const value = parseInt(this.dataset.value);
        score += value;
        scoreDisplay.text(score);
        if (score === number) {
          message.text('You Win!');
          wins++;
          $('#wins').text(wins);
          game.init();
        } else if (score > number) {
          message.text('You Lose!');
          losses++;
          $('#losses').text(losses);
          game.init();
        } else {
          message.text('');
        }
      });
    }
  };

  game.init();
  game.play();
})();
