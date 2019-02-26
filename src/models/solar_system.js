
const PubSub = require('../helpers/pub_sub.js');
const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvent = function () {
  PubSub.subscribe('PlanetSelect:click',(event)=>{
    const selection = event.detail;
    this.exportPlanet(selection);
  })
};

SolarSystem.prototype.exportPlanet = function (selection) {
  const found_planet = this.planets.filter(el => el['name'] === selection)[0];
  PubSub.publish('SolarSystem:planet-ready',found_planet);
};
module.exports = SolarSystem;
