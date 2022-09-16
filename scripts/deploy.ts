import { ethers } from "hardhat";

async function main() {
  const firstImp = await ethers.getContractFactory("ContractA");
  const impA = await firstImp.deploy();

  await firstImp.deployed();

  console.log(`ImplementationA deployed to ${firstImp.address}`);
 
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
