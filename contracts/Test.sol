pragma solidity ^0.5.0;
contract Test{
    string public name = "taro";
    function set(string memory _name) public {
        name = _name;
    }
    function get() public view returns (string memory) {
        return name;
    }
}