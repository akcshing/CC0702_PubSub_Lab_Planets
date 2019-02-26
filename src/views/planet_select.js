
const PubSub = require('../helpers/pub_sub.js');
const PlanetSelect = function(){


};

PlanetSelect.prototype.bindEvent = function () {

  planets_ary = document.querySelectorAll('.planet-menu-item')

  for (planet of planets_ary){
    planet.addEventListener('click',(evt) =>{
      let selection = evt['target']['id'];
      PubSub.publish('PlanetSelect:click',selection)
    });
  };

};

module.exports = PlanetSelect;
