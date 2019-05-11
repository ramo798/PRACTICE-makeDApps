pragma solidity ^0.5.0;
contract Ownbuki{

    struct Buki {
        string bukiname;
        address owner;
    }
    Buki[] public bukies;

    function makebuki(string memory _bukiname) public returns (uint){
        Buki memory newbuki = Buki({
            bukiname : _bukiname,
            owner : msg.sender
        });
        return bukies.push(newbuki) - 1;
    }

    function getItemsLength() public view returns (uint) {
        uint kekka = bukies.length;
        return kekka;
    }

    function getbukidata(uint _index) public view returns (string memory,address) {
        return (bukies[_index].bukiname, bukies[_index].owner);
    }

}