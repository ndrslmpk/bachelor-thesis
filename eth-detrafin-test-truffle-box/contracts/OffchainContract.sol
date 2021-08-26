// contracts/Contract.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../client/node_modules/@openzeppelin/contracts/token/ERC721/IERC721.sol";

/// @title Off-chain Contract
/// @author NdrsLmpk
/// @notice This contract serves as a standard for the creation of an Off-chain contract. It allows the project to define a derivative, an Letter of Credit (see LetterOfCredit.sol), using this contract as an NFT.
/// @dev ERC-721 Interface is implemented. Explain to a developer any extra details -- TBD

contract OffchainContract is IERC721 {
    // STATE VARIABLE
    uint256 CONTRACT_SERIAL_NUMBER = 0;
    string tokenName = "WOLY TOKENS";
    string tokenSymbol = "WOLY";

    /// @notice Data
    /// @notice contractsOwnerList contains the contractId and maps to its owners
    /// @notice Data

    mapping(uint256 => address[]) public contractsOwnerList; // allows to index the contracts owners
    mapping(address => uint256[]) public ownersContractList; // allows to display
    bytes32[] name;
    string symbol;
    uint256 value;
    address owner;

    constructor(bytes32[] memory _name, uint256 _value) {
        name = _name;
        value = _value; // Contract Value
        uint256 tokenId = CONTRACT_SERIAL_NUMBER++; //  sets the new tokenId and increments the SERIAL_NUMBER for the next contract
        owner = msg.sender;
    }

    function balanceOf(address _owner)
        external
        view
        override
        returns (uint256 balance)
    {
        return ownersContractList[owner].length;
    }

    function ownerOf(uint256 tokenId)
        external
        view
        override
        returns (address _owner)
    {
        require(contractsOwnerList[tokenId].length == 0);
    }
}
