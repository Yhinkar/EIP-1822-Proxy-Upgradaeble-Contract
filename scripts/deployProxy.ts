import { ethers } from "hardhat";

async function main() {
  const Proxy = await ethers.getContractFactory("Proxy");
  const proxy = await Proxy.deploy("0x473be604", "0xD7366023f4508eCa8C1Fb0008D419f82983BFD11");

  await proxy.deployed();

  console.log(`Proxy contract deployed to ${proxy.address}`);
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
