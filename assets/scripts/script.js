(function() {
  let number;
  let score = 0;
  const scoreDisplay = $('h3#score');
  const game = {
    init: function() {
      const numberDisplay = $('span#number');
      const crystals = [
        $('img.gold'),
        $('img.blue'),
        $('img.purple'),
        $('img.green')
      ];
      score = 0;
      scoreDisplay.text(score);
      number = Math.floor(Math.random() * 120) + 19;
      numberDisplay.text(number);
      $.each(crystals, function(index, crystal) {
        crystal.attr('data-value', Math.floor(Math.random() * 12) + 1);
      });
    },
    play: function() {
      let wins = 0;
      let losses = 0;
      const crystalsDiv = $('div.crystals');
      const message = $('h3#message');
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
