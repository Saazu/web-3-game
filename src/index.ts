import { ethers } from "ethers";

async function hasAccounts() {
  //@ts-ignore
  const accounts = window.ethereum.request({ method: "eth_accounts"}) as string[];
  return accounts && accounts.length > 0;
}

async function requestAccounts() {
  //@ts-ignore
  const accounts = window.ethereum.request({ method: "eth_requestAccounts"}) as string[];
  return accounts && accounts.length > 0;
}