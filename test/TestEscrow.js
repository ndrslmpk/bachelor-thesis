/* 
  @dev: web3 instance is available in each test
*/

// Contracts that need to be interacted within the test
const TestEscrow = artifacts.require("../contracts/Escrow.sol");

contract("Testing Escrow SC", (accounts) => {
  const importer = accounts[0];
  const exporter = accounts[1];
  const carrier = accounts[2];

  it("ESCROW: Initial escrow contract test", async () => {
    const escrow = await TestEscrow.deployed();
    const escrowValue = await escrow.value();
    assert.equal(escrowValue, 10, "100 was not in the first account");
  });

  it("ESCROW: Constructor test", async () => {
    const escrow = await TestEscrow.deployed();
    console.log(escrow); //checking if contract was properly deployed

    // await escrow.new(carrier, exporter, 10, { from: accounts[0] });
    assert.equal(
      await escrow.owner(),
      importer,
      "The importer is not the contract owner, which is accounts[0]."
    );
    assert.equal(
      await escrow.exporter(),
      exporter,
      "The exporter is not accounts[1]."
    );
    assert.equal(
      await escrow.carrier(),
      carrier,
      "The carrier is not accounts[2]."
    );
    assert.equal(
      await escrow.value(),
      10,
      "THe value of the ESCROW account is not 10."
    );
  });
});
