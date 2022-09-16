//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./Proxiable.sol";

contract ContractA is Proxiable {
    address public owner;
    uint public count;

    function constructor1() public {
        require(owner == address(0), "Already initalized");
        owner = msg.sender;
    }

    function increment() public {
        count++;
    }

    function updateCode(address newCode) onlyOwner public {
        updateCodeAddress(newCode);
    }

    function encode() external pure returns (bytes memory) {
        return abi.encodeWithSignature("constructor1()");
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner is allowed to perform this action");
        _;
    }
}