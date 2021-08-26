let Lc = artifacts.require("./Lcfactory.sol");

let lcInstance;

contract('Letter of Credit', function(accounts){
    //accounts[0] is the default account
    
    /*
              TEST CASE 1
    */
    it("Contract deployment", function(){
        return Lc.deployed().then(function (instance) {
            lcInstance = instance;
            assert(lcInstance !== undefined, 'Letter of Credit Contract should be defined');
        });
    });




})