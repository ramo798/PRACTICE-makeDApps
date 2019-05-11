pragma solidity ^0.5.0;
contract Landlist{

    struct Land{
        address owner;
        string landname;
        uint power;
    }
    Land[10] public lands;

    function setLand(uint _index, string memory _landname, uint _power) public{
        // require(_index < 10);
        lands[_index].owner = msg.sender;
        lands[_index].landname = _landname;
        lands[_index].power = _power;
    }

    function getLanddata(uint _index) public view returns(address, string memory,uint){
        return(lands[_index].owner, lands[_index].landname,lands[_index].power);
    }

    function Battleland(uint _index, string memory _landname, uint _power) public returns(uint){
        if(lands[_index].power < _power){
            setLand(_index,_landname,_power);
            return 0;
        }
        else{
            return 1;
        }
    }
}
