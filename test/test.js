const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Contract = await ethers.getContractFactory("CoolCatsTemplate");

    // TODO: Change to where you will host your metadata
    const baseURI = "https://api.example.com";

    const contract = await Contract.deploy({ args: [baseURI] });
    await contract.deployed();

    // Test adopting 20 cats
    const setAdoptTx = await contract.adopt(20);

    // wait until the transaction is mined
    await setAdoptTx.wait();
  });
});
