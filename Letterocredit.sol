// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Letterofcredit{
    
    //set initial time of first deployment of the contract = GLOBAL VARIABLE DEPLOYMENT
    uint256 public createTime;
    uint32 id;
    address owner;
    address exporter;
    address importer;
    address guarantor;
    uint value; // Value of Goods that is secured 
    uint biddingPeriod;


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




    function bid (uint _value) payable public{
        if(createTime+biddingPeriod < block.timestamp){
            value = _value;
        }

    }
    
}
