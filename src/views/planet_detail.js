
const PubSub = require('../helpers/pub_sub.js');

const PlanetDetail = function(container){
  this.container = container;

};

PlanetDetail.prototype.bindEvent = function () {
  PubSub.subscribe('SolarSystem:planet-ready',(event)=>{
    const planet_obj = event.detail;
    this.render(planet_obj);
  })
};

PlanetDetail.prototype.render = function (planet_obj) {
  const planet_container = document.createElement('ul')
    const planet_name = document.createElement('h3');
    planet_name.textContent = planet_obj[`name`];
    planet_container.appendChild(planet_name);
    const planet_day = document.createElement('li');
    planet_day.textContent = `Day: ${planet_obj[`day`]} Earth Days`;
    planet_container.appendChild(planet_day);
    const planet_orbit = document.createElement('li');
    planet_orbit.textContent = `Orbit: ${planet_obj[`orbit`]} Earth Days`;
    planet_container.appendChild(planet_orbit);
    const planet_area = document.createElement('li');
    planet_area.textContent = `Surface Area: ${planet_obj[`surfaceArea`]} Earths`;
    planet_container.appendChild(planet_area);
    const planet_volume = document.createElement('li');
    planet_volume.textContent = `Volume: ${planet_obj[`volume`]} Earths`;
    planet_container.appendChild(planet_volume);
    const planet_gravity= document.createElement('li');
    planet_gravity.textContent = `Gravity: ${planet_obj[`gravity`]} g`;
    planet_container.appendChild(planet_gravity);
    const planet_moon= document.createElement('li');
    planet_moon.textContent = `Moons: ${planet_obj[`moons`]}`;
    planet_container.appendChild(planet_moon);
    const planet_pic= document.createElement('img');
    planet_pic.src = planet_obj[`image`];
    planet_container.appendChild(planet_pic);


  this.container.innerHTML ='';
  this.container.appendChild(planet_container)
};
module.exports = PlanetDetail;


// we were going to do a mental case loop vvvvv
// for (key in planet_obj){
//   const planet_detail = document.createElement('li');
//   let switch_key = [key]
//
//   planet_detail.textContent = `${[key]}:${planet_obj[`${key}`]}`;
//   planet_container.appendChild(planet_detail);


    // planet_name.textContent = `${[key]}:${planet_obj[`${key}`]}`;
