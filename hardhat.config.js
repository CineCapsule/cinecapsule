require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const privateKey = fs.readFileSync(".env").toString().trim() || "";
const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    spark: {
      chainId: 123,
      url: "https://rpc.fusespark.io",
      accounts: [privateKey],
      gasPrice: 1000000000,
    },
    fuse: {
      url: "https://rpc.fuse.io",
      chainId: 122,
      accounts: [privateKey],
      gasPrice: 1000000000,
    },
    
    mumbai: {
      // Infura
      url: `https://polygon-mumbai.infura.io/v3/${infuraId}`,
      url: "https://matic-mumbai.chainstacklabs.com",
      accounts: [privateKey]
    },
    matic: {
      // Infura
      url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [privateKey]
    }
    
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};