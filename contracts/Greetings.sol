pragma solidity ^0.5.0;

contract Greetings {
  string greeting = 'hello, world';
  
      function set(string memory _greeting) public {
        greeting = _greeting;
      }
      function get() public view returns (string memory) {
        return greeting;
      }

}
