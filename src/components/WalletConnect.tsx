import { useEffect, useState } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

const WalletConnectButton = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [provider, setProvider] =
    useState<ethers.providers.Web3Provider | null>(null);

  const connectWallet = async () => {
    try {
      const web3Modal = new Web3Modal({
        network: "mainnet",
        cacheProvider: true,
      });

      const connection = await web3Modal.connect();
      const newProvider = new ethers.providers.Web3Provider(connection);
      setProvider(newProvider);

      const signer = newProvider.getSigner();
      const address = await signer.getAddress();
      setWalletAddress(address);
    } catch (error) {
      console.error("Erro ao conectar a carteira:", error);
    }
  };

  useEffect(() => {
    if (provider) {
      provider.on("accountsChanged", (accounts: string[]) => {
        setWalletAddress(accounts[0]);
      });
    }
  }, [provider]);

  return <button onClick={connectWallet}>Conectar Carteira</button>;
};

export default WalletConnectButton;
