const Ownown = artifacts.require("./Ownown.sol");
 
module.exports = function(deployer) {
  deployer.deploy(Ownown,{gas:2000000});
};