/* 
@dev: web3 instance is available in each test
@dev: Keep in mind that subsequent test cases and their function calls and state alterations for a contract are persisisting in the test environment. Meaning that if a Smart Contract has a balance of 0 in the initial test and the test cases increases the balance to 99. In the next test case a balance of 99 will be available.
*/

// Contracts that need to be interacted within the test
const TestEscrow = artifacts.require("../contracts/Escrow.sol");

contract("Testing Escrow SC", (accounts) => {
  const importer = accounts[0];
  const exporter = accounts[1];
  const carrier = accounts[2];

  describe("Initialization Testing", async () => {
    it("Contract value is according", async () => {
      const _escrow = await TestEscrow.deployed();
      const escrowVal = await _escrow.value();
      assert.equal(escrowVal, 10, "100 was not in the first account");
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
        await escrow.status(),
        TestEscrow.Status.waitingForDeposit,
        "Initital State of Escrow should be waitingForDeposit"
      );
    });
  });
  describe("Function (positive) testing", async () => {
    it("Importer deposits", async () => {
      var _deposit = 10;
      const escrow = await TestEscrow.deployed();
      await escrow.deposit(exporter, { from: accounts[0], value: _deposit });
      assert.equal(
        await escrow.deposits(accounts[1]),
        _deposit,
        `${_deposit} was not deposited for the account[1] (exporter)`
      );
    });
    it("Importer withdraws", async () => {
      const escrow = await TestEscrow.deployed();
      const _escrowBalanceBefore = await web3.eth.getBalance(escrow.address);
      var _deposit = 10;

      await escrow.withdrawByImporter(exporter, { from: importer });

      const _escrowBalanceAfter = await web3.eth.getBalance(escrow.address);
      assert.equal(
        await web3.eth.getBalance(escrow.address),
        0,
        `withdrawByImporter() is not withdrawing EscrowContracts ether-balance to zero`
      );
      assert.notEqual(
        _escrowBalanceAfter,
        _escrowBalanceBefore,
        `withdrawByImporter() does not change the TestEscrow.balance`
      );
    });
    it("Carrier confirmsHandover", async () => {
      var _deposit = 10;
      const escrow = await TestEscrow.deployed();
      await escrow.deposit(exporter, { from: accounts[0], value: _deposit });
      await escrow.confirmHandover({ from: carrier });
      assert.equal(
        await escrow.status(),
        TestEscrow.Status.completed,
        "confirmHandover() does not change TestEscrow Status"
      );
    });
    it("Exporter withdraws", async () => {
      const escrow = await TestEscrow.deployed();
      const _escrowBalanceBefore = await web3.eth.getBalance(escrow.address);
      var _deposit = 10;

      await escrow.withdrawByExporter({ from: exporter });

      const _escrowBalanceAfter = await web3.eth.getBalance(escrow.address);
      assert.equal(
        await web3.eth.getBalance(escrow.address),
        0,
        `withdrawByExporter() is not withdrawing EscrowContracts ether-balance to zero`
      );
      assert.notEqual(
        _escrowBalanceAfter,
        _escrowBalanceBefore,
        `withdrawByExporter() does not change the TestEscrow.balance`
      );
    });
  });
  describe("Function (false) testing", async () => {
    it("Importer cannot withdraw after handover", async () => {});
    it("Export cannot withdraw while waitingForDeposit", async () => {});
    it("Export cannot withdraw while waiting", async () => {});
    it("Carrier cannot withdraw before deposit", async () => {});
    it("Carrier cannot withdraw after deposit", async () => {});
    it("Carrier cannot withdraw after handover", async () => {});
  });
});
