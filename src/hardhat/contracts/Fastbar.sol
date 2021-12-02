pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";


contract FastBar is ERC20("FastBar", "xFAST"){
    using SafeMath for uint256;
    IERC20 public fast;

    constructor(IERC20 _fast) public {
        fast = _fast;
    }

    // Enter the bar. Pay some FASTs. Earn some shares.
    function enter(uint256 _amount) public {
        uint256 totalFast = fast.balanceOf(address(this));
        uint256 totalShares = totalSupply();
        if (totalShares == 0 || totalFast == 0) {
            _mint(msg.sender, _amount);
        } else {
            uint256 what = _amount.mul(totalShares).div(totalFast);
            _mint(msg.sender, what);
        }
        fast.transferFrom(msg.sender, address(this), _amount);
    }

    // Leave the bar. Claim back your FASTs.
    function leave(uint256 _share) public {
        uint256 totalShares = totalSupply();
        uint256 what = _share.mul(fast.balanceOf(address(this))).div(totalShares);
        _burn(msg.sender, _share);
        fast.transfer(msg.sender, what);
    }
}