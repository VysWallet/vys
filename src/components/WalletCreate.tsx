import { createWallet } from "@/lib/ethers";
import { Wallet } from "@/types/wallet";
import { useState } from "react";

export function WalletCreate() {
  const [wallet, setWallet] = useState<Wallet | null>(null);

  const handleCreateWallet = () => {
    const newWallet = createWallet();
    console.log(newWallet);
    setWallet(newWallet);
    // **Aviso de Segurança:** Armazene a seed phrase de forma segura no dispositivo do usuário.
    localStorage.setItem("wallet", JSON.stringify(newWallet));
  };

  return (
    <div>
      {!wallet ? (
        <button onClick={handleCreateWallet}>Criar Nova Carteira</button>
      ) : (
        JSON.stringify(wallet)
      )}
    </div>
  );
}
