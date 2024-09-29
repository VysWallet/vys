import { ethers } from 'ethers';

export const createWallet = () => {
    const wallet = ethers.Wallet.createRandom();
    if (!wallet.mnemonic) {
        throw new Error("Mnemonic is null");
    }
    return {
        address: wallet.address,
        privateKey: wallet.privateKey,
        mnemonic: wallet.mnemonic.phrase,
    };
};