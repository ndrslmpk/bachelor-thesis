// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

/// @title A factory to manage the creation of Letters of Credit
/// @author Andreas Lempik
/// @notice You can use this contract to find a guarantor for your business 
/// @dev The contract is a global singleton to manage the issuance of NFTs for each successfully processed LC 
contract Lcfactory {
    mapping(address => uint) lclist;

}
