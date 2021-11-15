// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

contract Lc {

  mapping (uint => address) numberToOwner;
  uint256 validityTime;

  constructor() {
    uint256 _validityPeriod = 90 days;
    validityTime = block.timestamp + _validityPeriod;
  }

  
}