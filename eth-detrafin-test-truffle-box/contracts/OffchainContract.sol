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
    address contractOwner;

    constructor(bytes32[] memory _name, uint256 _value) {
        name = _name;
        value = _value; // Contract Value
        uint256 tokenId = CONTRACT_SERIAL_NUMBER++; //  sets the new tokenId and increments the SERIAL_NUMBER for the next contract
        contractOwner = msg.sender;
    }

    function balanceOf(address _owner)
        external
        view
        override
        returns (uint256 balance)
    {
        require(msg.sender != address(0));

        return ownersContractList[contractOwner].length;
    }

    function ownerOf(uint256 tokenId)
        external
        view
        override
        returns (address _owner)
    {
        require(msg.sender != address(0));
        require(contractsOwnerList[tokenId].length == 0);
        require(tokenId >= 0);
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) external override {
        require(from != address(0));
        require(to >= address(0));
        require(tokenId > 0);
        //requiring msg.sender to be the same person as the from transfer
        // Todo: It needs to be allowed to transfer tokens on the behalf of somebody else
        require(msg.sender == from);
        // require(msg.sender == contractsOwnerList[tokenId]); //checks whether the requested tokenId has an owner with the sender's address

        Transfer(from, to, tokenId);
    }

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) external override {}

    function approve(address to, uint256 tokenId) external override {
        require(tokenId != 0);
    }

    function getApproved(uint256 tokenId)
        external
        view
        override
        returns (address operator)
    {
        require(msg.sender != operator);
    }

    function setApprovalForAll(address operator, bool _approved)
        external
        override
    {}

    function isApprovedForAll(address owner, address operator)
        external
        view
        override
        returns (bool)
    {
        require(msg.sender != owner);
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes calldata data
    ) external override {
        require(from != address(0), "from cannot be the zero address");
        require(to != address(0), "from cannot be the zero address");
        require(contractsOwnerList[tokenId] == from);
        require(checkOwnership(tokenId, from));
        Transfer(from, to, tokenId);
    }

    function checkOwnership(uint256 tokenId, address checkOwner)
        public
        returns (bool)
    {
        address[] memory _owners = contractsOwnerList[tokenId];

        // Checks whether the
        for (uint256 i = 0; i < contractsOwnerList[tokenId].length; i++) {
            address _addr = _owners[i];
            if (_addr == checkOwner) {
                return true;
            } else {
                return false;
            }
        }
    }
}
