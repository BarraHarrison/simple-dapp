import { useEffect, useState } from "react";
import { BrowserProvider, Contract, formatUnits } from "ethers";

import SimpleTokenAbi from "../abi/SimpleToken.json";
import { SIMPLE_TOKEN_ADDRESS } from "../config/contracts";

declare global {
    interface Window {
        ethereum?: any;
    }
}

export default function TokenBalance() {
    const [balance, setBalance] = useState<string>("0");

    useEffect(() => {
        const fetchBalance = async () => {
            if (!window.ethereum) return;

            const provider = new BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const userAddress = await signer.getAddress();

            const tokenContract = new Contract(
                SIMPLE_TOKEN_ADDRESS,
                SimpleTokenAbi.abi,
                signer
            );

            const rawBalance = await tokenContract.balanceOf(userAddress);
            setBalance(formatUnits(rawBalance, 18));
        };

        fetchBalance();
    }, []);

    return (
        <div>
            <h3>Your SimpleToken Balance</h3>
            <p>{balance} STK</p>
        </div>
    );
}