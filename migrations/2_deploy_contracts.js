var Escrow = artifacts.require("../contracts/Escrow.sol");
var Lc = artifacts.require("../contracts/Lc.sol");

module.exports = function (deployer) {
  deployer.deploy(Lc);
  deployer.deploy(Escrow);
};
