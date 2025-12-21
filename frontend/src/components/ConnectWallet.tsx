import { useState } from "react";
import { BrowserProvider } from "ethers";

declare global {
    interface Window {
        ethereum?: any;
    }
}

export default function ConnectWallet() {
    const [address, setAddress] = useState<string | null>(null);

    const connectWallet = async () => {
        if (!window.ethereum) {
            alert("MetaMask not detected");
            return;
        }

        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const userAddress = await signer.getAddress();

        setAddress(userAddress);
    };

    return (
        <div style={{ marginBottom: "1rem" }}>
            <button onClick={connectWallet}>
                {address ? "Wallet Connected" : "Connect Wallet"}
            </button>

            {address && <p>Connected address: {address}</p>}
        </div>
    );
}