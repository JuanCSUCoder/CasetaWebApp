"use client";

import { WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function WalletPage() {
    return (
      <>
        <WalletMultiButton />
        <WalletDisconnectButton />
      </>
    );
}