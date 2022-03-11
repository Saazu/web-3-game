import "@nomiclabs/hardhat-ethers";
import { ethers } from 'hardhat';

async function deployGame() {
  const Game  = await ethers.getContractFactory("GameContract");
  const gameContract =  await Game.deploy();
  await gameContract.deployed();
  return gameContract;
}

deployGame().then(() => console.log("Game conntract deployed"));