/* 
  @dev: web3 instance is available in each test
*/

// Contracts that need to be interacted within the test
const TestEscrow = artifacts.require("../contracts/Escrow.sol");

contract("Testing Escrow SC", (accounts) => {
  const importer = accounts[0];
  const exporter = accounts[1];
  const carrier = accounts[2];

  describe("Initialization Testing", async () => {
    it("Contract value is according", async () => {
      const escrow = await TestEscrow.deployed();
      const escrowValue = await escrow.value();
      assert.equal(escrowValue, 10, "100 was not in the first account");
    });

    it("Accounts are initialized properly", async () => {
      const escrow = await TestEscrow.deployed();

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
    it("State is initialized properly", async () => {
      const escrow = await TestEscrow.deployed();
      assert.equal(
        await escrow.state(),
        TestEscrow.State.waitingForDeposit,
        "Initital State of Escrow should be waitingForDeposit"
      );
    });
  });
});