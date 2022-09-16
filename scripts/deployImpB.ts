import { ethers } from "hardhat";

async function main() {
  const Implement = await ethers.getContractFactory("ContractB");
  const implementation= await Implement.deploy();

  await implementation.deployed();

  console.log(`ImplementationB deployed to ${implementation.address}`);

  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
