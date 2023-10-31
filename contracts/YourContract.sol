// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract YourContract {
    string private data;

    function set(string memory _data) public {
        data = _data;
    }

    function get() public view returns (string memory) {
        return data;
    }
}

