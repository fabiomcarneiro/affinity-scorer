// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract NFTFloorPriceConsumerV3 {
    AggregatorV3Interface internal nftFloorPriceFeed;

    /**
     * Network: Goerli - No Sepolia feeds available at this time
     * Aggregator: CryptoPunks
     * Address: 0x352f2Bc3039429fC2fe62004a1575aE74001CfcE
     */
    constructor() {
        nftFloorPriceFeed = AggregatorV3Interface(
            0xB677bfBc9B09a3469695f40477d05bc9BcB15F50
        );
    }

    /**
     * Returns the latest price
     */
    function getLatestPrice() public view returns (int) {
        // prettier-ignore
        (
            /*uint80 roundID*/,
            int nftFloorPrice,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint80 answeredInRound*/
        ) = nftFloorPriceFeed.latestRoundData();
        return nftFloorPrice;
    }
}
