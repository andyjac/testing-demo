var _ = require("lodash");
var MasterChiefMaker = require('../lib/master_chief_maker');

var subject;
var mockAlien;

var specObj = {
  color: "green",
  gun: "laser blaster"
};

describe('MasterChiefMaker', function() {

  beforeEach(function() {
    subject = MasterChiefMaker(specObj);
  });

  it("Has the properties from the specObj", function() {
    subject.color.should.equal("green");
    subject.gun.should.equal("laser blaster");
  });

  context("when the gun is a laser blaster", function() {
    describe("shooting an alien", function() {
      beforeEach(function() {
        mockAlien = {
          takeDamage: sinon.stub()
        };

        subject.shoot(mockAlien);
      });

      it('should cause 10 points of damage on the alien', function() {
        mockAlien.takeDamage.should.have.been.calledWith(10);
      })
    });
  });

  context("when the gun is a rocket launcher", function() {
    beforeEach(function() {
      var specObjWithRocketLauncher = _.merge(specObj, {gun: "rocket launcher"});

      subject = MasterChiefMaker(specObjWithRocketLauncher);
    });

    describe("shooting an alien", function() {
      beforeEach(function() {
        mockAlien = {
          takeDamage: sinon.stub()
        };

        subject.shoot(mockAlien);
      });

      it('should cause 10 points of damage on the alien', function() {
        mockAlien.takeDamage.should.have.been.calledWith(100);
      })
    });
  });
});
