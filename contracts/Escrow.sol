//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

contract Escrow{
    
    
    /*  
        We assume the importer always needs to initialize and deposit the amount first
        Is the only person who really can use the ESCROW account
    */
    
    address payable public owner;
    address payable public importer; 
    address payable public exporter;
    address public carrier;
    uint public value;
    State public state;
    
    bool isTransfered = false;

    /// @dev State is used to change between 
    enum State {
      waitingForDeposit, waitingForHandover, completed
    }
    
    mapping(address => uint256) public deposits; // questionable if a mapping is needed
    mapping(address => State) public states; // Unused so far. potentially needs to include more differentiated logic, if multiple payments shall be managed by this escrow.

    /// @notice Events help to search for certain happenings 
    /// @dev [ ] add details
    event EscrowCreated(address indexed _importer, address indexed _exporter, address indexed _carrier, uint _value);
    event Deposited(address indexed importer, uint256 weiAmount);
    event Handover(address indexed _from, address indexed _to);
    event Withdrawn(address indexed withdrawer, uint256 weiAmount);

    modifier requireState(State _state){
      require(_state == state);
      _;
    }

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

    function depositsOf(address _payee) public view returns (uint256) {
      return deposits[_payee];
    }

    /// @notice Creates Escrow Contract
    /// @dev constructor shall be called from the LC contract to pass in the previously defined parameters
    /// @param _carrier is the company address being used to identify the transport service provider
    /// @param _exporter is the company address of the exporter
    /// @param _value is value needed to enable the LC transaction
    /// @notice Assumption: importer is owner of the Escrow account, 
    /// @dev Assumption might be changed in later version into LcFactory 
    constructor (address payable _carrier, address payable _exporter, uint256 _value) {
        require(_carrier != address(0), "Carrier missing");
        require(_exporter != address(0), "Exporter missing");
        owner = payable(msg.sender); //we assume the impoert is the person calling
        importer = payable(msg.sender);
        carrier = _carrier;
        exporter = _exporter;
        value = _value;
        state = State.waitingForDeposit;
        emit EscrowCreated(msg.sender, _exporter, _carrier, _value);
    }
    
    /// @notice Explain to an end user what this does
    /// @dev Explain to a developer any extra details
    /// @param _exporter a parameter just like in doxygen (must be followed by parameter name)
    function deposit(address _exporter) public onlyImporter requireState(State.waitingForDeposit) payable {
        require(msg.value > 0);
        require(msg.value == value);
        uint256 amount = msg.value;
        deposits[_exporter] = deposits[_exporter] + amount;
        state = State.waitingForHandover;
        emit Deposited(msg.sender, msg.value);
    }
    
    function withdrawByImporter(address _exporter) public onlyImporter requireState(State.waitingForHandover){
        require(state == State.waitingForDeposit, "You cannot withdraw your money after the product has been shipped already");
        uint _payment = deposits[_exporter];
        importer.transfer(_payment);
        deposits[_exporter] = 0;
        state = State.waitingForDeposit;
        emit Withdrawn(msg.sender, _payment);
    }
    
    /// @notice Carrier confirms the reception of the underlying asset and its direct forwarding to the importr
    /// @dev The automated transfer of money might be included here, but is left out as costs for the carrier shall be minimal
    function confirmHandover() public onlyCarrier requireState(State.waitingForHandover){
        state = State.completed;
        emit Handover(exporter, importer);
    }


    /// @notice After the handover the exporter fulfilled its duty so that it is able to withdraw his funds
    /// @dev After transaction is performed, this Escrow Contract might be 
    /// @notice !!! Additional feature: What happens if we manage multiple escrow positions within the contract? That might lead to multiple positions of an exporter. How to solve that issue?
    /// @dev After transaction is performed, this Escrow Contract might be 
    function withdrawByExporter() public onlyExporter requireState(State.completed){
        require(state == State.completed, "The product has not been handed over to the Carrier yet.");
        uint256 _payment = deposits[exporter]; 
        deposits[exporter] = 0;
        exporter.transfer(_payment);
        emit Withdrawn(msg.sender, _payment);
        //destroySmartContract(owner); // Here might be a function to selfdestruct this contract. Just used if we want to use this contract just for one transaction
    }


    /// @notice Destroys the Escrow Account
    /// @dev is for optional usage; depends on withdrawByExporter; might be outsourced into Helpers.sol
    /// @param _to defines the receiver of residual funds
    function destroySmartContract(address payable _to) private {
      // might need to inherit from Ownable so that it can be managed by a LcFactory 
      require(msg.sender == owner, "You are not the owner");
      selfdestruct(_to);
    }
}