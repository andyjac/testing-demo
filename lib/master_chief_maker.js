var _ = require("lodash");
var helmetMaker = require("./tools/helmet");
var requiredRequest = require("request");

module.exports = function(specObj, helmetArg, requestArg) {
  var newInstance = {};

  newInstance.helmet = helmetArg ? helmetArg : helmetMaker;
  newInstance.request = requestArg ? requestArg : requiredRequest;

  _.merge(newInstance, specObj);
  newInstance.shoot = shoot;

  return newInstance;
};

function makeLastFMRequest(url, callback) {
  this.request(url, callback);
}

function shoot(shootableThing) {
  switch (this.gun) {
  case "laser blaster":
    shootableThing.takeDamage(10);
  case "rocket launcher":
    shootableThing.takeDamage(100);
  };
};
