//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

contract Escrow{
    
    
    /*  
        We assume the importer always needs to initialize and deposit the amount first
        Is the only person who really can use the ESCROW account
    */
    
    address payable importer; 
    address payable exporter;
    address carrier;
    uint value;
    
    bool isTransfered = false;
    
    mapping(address => uint256) public deposits;
    
    modifier onlyImporter(){
        require(importer == msg.sender, "You are not the Importer");
        _;
    }

    modifier onlyExporter(){
        require(exporter == msg.sender, "You are not the Exporter");
        _;
    }
    
    modifier onlyCarrier(){
      require(carrier == msg.sender, "You are not the Carrier");
      _;
    }

    
    constructor (address payable _carrier, address payable _exporter, uint256 _value) {
        require(_carrier != address(0), "Carrier missing");
        require(_exporter != address(0), "Exporter missing");
        importer = payable(msg.sender);
        carrier = _carrier;
        exporter = _exporter;
        value = _value;
    }
    
    function deposit(address _exporter) public onlyImporter payable {
        require(msg.value > 0);
        // @constraint: just the exact deposit is accepted
        require(msg.value == value);
        uint256 amount = msg.value;
        deposits[_exporter] = deposits[_exporter] + amount;
    }
    
    function withdrawToImporter() public onlyImporter {
        require(!isTransfered, "You cannot withdraw your money after the product has been shipped already");
        require(address(exporter) != address(0));
        uint payment = deposits[exporter];
        deposits[exporter];
        importer.transfer(payment);
    }
    
    function withdrawToExporter() public onlyExporter{
        require(isTransfered, "The product has not been handed over to the Carrier yet.");
        uint256 payment = deposits[exporter];
        deposits[exporter] = 0;
        exporter.transfer(payment);
        
    }
    
    function setIsTransfered() public onlyCarrier{
        require(!isTransfered, "The product already is being handed over.");
        isTransfered = true;
    }
}