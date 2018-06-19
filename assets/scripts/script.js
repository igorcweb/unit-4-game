// Crystals 1-12
// Number 19-120
(function() {
  $('span#number').text(Math.floor(Math.random() * 120) + 19);
  const gold = $('img.gold');
  const blue = $('img.blue');
  const purple = $('img.purple');
  const green = $('img.green');
  const crystal = $('div.crystal-bg');
  const img = $('img');
  $(crystal).on('click', img, function() {
    console.log(this);
  });
})();
