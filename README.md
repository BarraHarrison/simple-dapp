# Simple dApp – React + Solidity Architecture

## 📌 Project Overview

This project is a **minimal decentralized application (dApp)** built to demonstrate the **core architecture of a real-world Web3 application**.

The goal of this project was **not** to build a production-ready application, but to clearly understand and implement the full **frontend → blockchain → wallet** interaction loop using modern tooling.

This repository serves as a **reference implementation** that I can return to later when building more advanced fullstack dApps.

---

## 🏗️ Architecture Overview

The dApp follows the same structure used by real production applications:

```
React Frontend
   ↓
Ethers.js (v6)
   ↓
MetaMask Wallet
   ↓
Ethereum Blockchain (Hardhat Local Network)
   ↓
Solidity Smart Contract
```

Each layer is intentionally simple so the overall flow is easy to understand and reason about.

---

## 🔧 What Was Built

### 1. Solidity Smart Contract

* Built a minimal **ERC-20 token** using OpenZeppelin
* Implemented with Solidity `^0.8.x`
* Designed for easy frontend interaction and event emission

### 2. Local Deployment

* Deployed the contract to a **local Hardhat blockchain**
* Used a TypeScript deployment script compatible with **Hardhat v3**
* Verified deployment and contract interaction locally

### 3. React Frontend (Vite)

* Scaffolded a React + TypeScript frontend using **Vite**
* Removed all boilerplate demo code
* Focused purely on Web3 interaction components

### 4. Ethers.js v6 Integration

* Used **Ethers v6** in the browser
* Created a `BrowserProvider` connected to MetaMask
* Instantiated the smart contract using ABI + address

### 5. MetaMask Wallet Connection

* Implemented wallet connection logic
* Requested account access via MetaMask
* Displayed the connected wallet address in the UI

### 6. Reading Live On-Chain Data

* Read ERC-20 token balances directly from the blockchain
* Displayed live on-chain data in the React UI
* Confirmed full frontend → blockchain connectivity

---

## 🧠 Key Learning Outcomes

This project demonstrates:

* How a frontend communicates with a smart contract
* How wallets act as the bridge between users and the blockchain
* How contract ABIs and addresses are used in frontend applications
* How local blockchain development mirrors real network architecture
* How to structure a dApp project cleanly and intentionally

This architecture forms the **foundation that more advanced dApps build on**.

---

## 🚀 Why This Project Matters

This repository acts as:

* A **reference architecture** for future fullstack dApps
* A clean example of **React + Solidity integration**
* A checkpoint before moving on to more complex systems (oracles, indexing, backends)

In later stages of my Blockchain study roadmap (Month 3; Week 12), this structure will be used as a template to create a **fullstack dApp** with additional infrastructure and features.

---

## 🛠️ Tech Stack

* Solidity
* Hardhat v3
* OpenZeppelin Contracts
* React + TypeScript (Vite)
* Ethers.js v6
* MetaMask

---
