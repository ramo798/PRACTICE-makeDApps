pragma solidity ^0.5.0;
contract Ownown{
    struct Objectdata{
        string objectname;
        string owenername;
        address owneraddress;
    }
    Objectdata[8] public objects;

    function setObject(uint _index, string memory _objectname,string memory _ownername) public{
        objects[_index].objectname = _objectname;
        objects[_index].owenername = _ownername;
        objects[_index].owneraddress = msg.sender;
    }
    function getObject(uint _index) public view returns(string memory, string memory, address){
        return(objects[_index].objectname,objects[_index].owenername,objects[_index].owneraddress);
    }
    function testsetObject(string memory _objectname,string memory _ownername) public{
        objects[0].objectname = _objectname;
        objects[0].owenername = _ownername;
        objects[0].owneraddress = msg.sender;
    }
    function testgetObject() public view returns(string memory, string memory, address){
        return(objects[0].objectname,objects[0].owenername,objects[0].owneraddress);
    }
    function testgetdata() public pure returns(string memory){
        return("this is success!!!");
    }
}