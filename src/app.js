const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const PlanetSelect = require('./views/planet_select.js');
const PlanetDetail = require('./views/planet_detail.js');

document.addEventListener('DOMContentLoaded', () => {


  const planetsDataModel = new SolarSystem(planetsData);
  planetsDataModel.bindEvent();

  const planetSelect = new PlanetSelect();
  planetSelect.bindEvent();

  const container = document.querySelector('section.planet-details')
  const planetDetail = new PlanetDetail(container);
  planetDetail.bindEvent();


});
