var _ = require("lodash");

module.exports = function(specObj) {
  var newInstance = {};

  _.merge(newInstance, specObj);
  newInstance.shoot = shoot;

  return newInstance;
};

function shoot(shootableThing) {
  switch (this.gun) {
  case "laser blaster":
    shootableThing.takeDamage(10);
  case "rocket launcher":
    shootableThing.takeDamage(100);
  };
};
