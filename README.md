# Solidity Contract Template based on CoolCatsNFT [@coolcatsnft](https://twitter.com/coolcatsnft)

Source: [https://etherscan.io/address/0x1a92f7381b9f03921564a437210bb9396471050c#contracts](https://etherscan.io/address/0x1a92f7381b9f03921564a437210bb9396471050c#contracts)

The CoolCatsNFT contract is very well written and very gas efficient.
Consider using this approach if you're creating NFTs off-chain.
Can cost as low as $100 at 14 October 2021 ETH Price of $3,527.
CoolCatsNFT team deployed this contract for $55.59 at $1,983 ETH Price from 27 June 2021.

The trick is to just use \_safeMint without using \_setTokenURI at all. Hence no ERC721Metadata.sol imported.
tokenURI function will just concatenate the baseURI with the token id when calling the function.

Curated by [@marcelc63](https://twitter.com/marcelc63) - [marcelchristianis.com](https://marcelchristianis.com)
Each functions have been annotated based on my own research and findings from [https://medium.com/coinmonks/what-i-learned-from-building-cool-cats-nft-4057f279d400](https://medium.com/coinmonks/what-i-learned-from-building-cool-cats-nft-4057f279d400)

Feel free to use and modify as you see appropriate

# Using the Template

Please do the followings

1. Modify any code that's labeled with TODO
2. Change the baseURI in deploy.js, run.js, and test.js
3. Make sure to create your own .env and modify hardhat.config.js accordingly with your deployment URL and accounts private key.
4. Remove the comments and annotation

# Included in the Template

1. Contract that CoolCatsNFT used
2. Complete commentary on core functions
3. Deployment Script
4. Testing Script

# Commands to use

```
// To test

npx hardhat run scripts/run.js
npx hardhat test

// To deploy to Rinkeby testnet

npx hardhart run scripts/deploy.js --network rinkeby
```
