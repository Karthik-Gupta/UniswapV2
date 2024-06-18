import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const SEPOLIA_URL = "https://sepolia.infura.io/v3/c9470e784de8487eaa7e08de876031bb";
const SEPOLIA_CHAIN_ID = 11155111;

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: SEPOLIA_URL,
      chainId: SEPOLIA_CHAIN_ID,
      accounts: [
        process.env.SEPOLIA_PRIVATE_KEY_1 ?? ""
      ],
    },
  },
};

export default config;
