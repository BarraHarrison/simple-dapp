import ConnectWallet from "./components/ConnectWallet";
import TokenBalance from "./components/TokenBalance";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Simple dApp</h1>

      <ConnectWallet />
      <TokenBalance />
    </div>
  );
}

export default App;
