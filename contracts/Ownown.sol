pragma solidity ^0.5.0;
contract Ownown{
    struct Objectdata{
        string objectname;
        string owenername;
        address owneradress;
    }
    Objectdata[8] public objects;

    function setObject(uint _index, string memory _objectname,string memory _ownername) public{
        objects[_index].objectname = _objectname;
        objects[_index].owenername = _ownername;
        objects[_index].owneradress = msg.sender;
    }

    function getObject(uint _index) public view returns(string memory, string memory, address){
        return(objects[_index].objectname,objects[_index].owenername,objects[_index].owneradress);
    }
}