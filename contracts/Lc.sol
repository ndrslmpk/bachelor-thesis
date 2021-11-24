// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

/// @title Non-fungible Token representing an Lc Contract
/// @author Ndrslmpk
/// @notice Explain to an end user what this does
/// @dev Explain to a developer any extra details
contract Lc {

  address payable public importer;
  address payable public exporter;
  address public carrier;
  Status public status;
  bool public importerAgreed = false;
  bool public exporterAgreed = false;

  mapping (uint => address) numberToOwner;

  /// @notice Introduces ownership of explicit token ids
  /// @dev Ownership is determined by an array of tokens indexes (tokenIDs)
  mapping (address => uint256[]) public ownedContracts;

  /// @notice Lookup for tokenOwner
  /// @dev Ownership is determined by an array of tokens indexes (tokenIDs)
  mapping (uint256 => address) public contractOwner;

/// @notice Enum allows to define certain states of the lc to determine which actions will be allowed and avoided
/// @dev opened is initiated after calling the constructor
/// @dev confirmed is the status after the signing, thus agreeing, of both parties
/// @dev closed is the status after each party got their needed asset (e.g. product and money)
  enum Status {
    opened, changed, confirmed, closed
  }

  uint256[] internal allContracts;
  uint256 validityTime;

  event LcOpened();
  event LcChanged();
  event LcConfirmed();
  event LcClosed();

  ///
  /// Assumptions: Importer is the only party calling the LC constructor
  constructor() {
    uint256 _validityPeriod = 90 days;
    validityTime = block.timestamp + _validityPeriod;
    status = Status.opened;
    importerAgreed = true; //assumption that importer always initializes contract 
  }

  
}