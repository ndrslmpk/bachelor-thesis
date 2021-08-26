// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";

contract Letterofcredit is ERC721Full{
    
    //set initial time of first deployment of the contract = GLOBAL VARIABLE DEPLOYMENT
    uint256 public createTime;
    uint32 id;
    address public owner;
    address public exporter;
    address public importer;
    address public guarantor;
    uint public value; // Value of Goods that is secured 
    
    mapping (address=> Bidder) bidders;
    uint biddingPeriod;

    uint public interestRate;


//  ###############################
//  ###         MODIFIER        ###
//  ###############################
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    modifier onlyExporter() {
        require(msg.sender == exporter);
        _;
    }

    modifier onlyImporter() {
        require(msg.sender == importer);
        _;
    }

    modifier onlyGuarantor() {
        require(msg.sender == guarantor);
        _;
    }

    constructor(){
        createTime = block.timestamp;
    }

    enum Phase{
        Bidding,
        Processing,
        Expired
    }

    struct Bidder{
        string name;
        address addr;
    }



    function bid (uint _value) payable public{
        if(createTime+biddingPeriod < block.timestamp){
            value = _value;
        }

    }


    
}
