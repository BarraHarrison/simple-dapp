import { ethers } from "ethers";
import hre from "hardhat";

async function main() {
    const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
    const signer = await provider.getSigner(0);

    const artifact = await hre.artifacts.readArtifact("SimpleToken");

    const factory = new ethers.ContractFactory(
        artifact.abi,
        artifact.bytecode,
        signer
    );

    const initialSupply = ethers.parseUnits("1000000", 18);
    const contract = await factory.deploy(initialSupply);

    await contract.waitForDeployment();

    console.log("SimpleToken deployed to:", await contract.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
