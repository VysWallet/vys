import { useEffect, useState } from "react";
import axios from "axios";
import { Wallet } from "@/types/wallet";

const WalletDetails = (wallet: Wallet) => {
  const [balance, setBalance] = useState("0");

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/balance/ethereum/${wallet.address}`
        );
        setBalance(response.data.balance);
      } catch (error) {
        console.error("Erro ao buscar saldo:", error);
      }
    };

    fetchBalance();
  }, [wallet.address]);

  return (
    <div>
      <h2>Detalhes da Carteira</h2>
      <p>Endereço: {wallet.address}</p>
      <p>Saldo: {balance} ETH</p>
    </div>
  );
};

export default WalletDetails;
