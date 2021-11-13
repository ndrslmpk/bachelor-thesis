// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

contract Lc {

  mapping (uint => address) lcIdRegister;
  uint256 validityTime;

  constructor(uint256 _validityPeriod) {
    validityTime = block.timestamp + _validityPeriod;
  }
}