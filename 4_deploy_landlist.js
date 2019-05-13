const Landlist = artifacts.require("./Landlist.sol");
 
module.exports = function(deployer) {
  deployer.deploy(Landlist);
};