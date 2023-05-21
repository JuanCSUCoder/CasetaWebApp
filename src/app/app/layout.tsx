"use client";

import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { BraveWalletAdapter, PhantomWalletAdapter, SalmonWalletAdapter } from "@solana/wallet-adapter-wallets";
import { ReactNode, useMemo } from "react";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

require('@solana/wallet-adapter-react-ui/styles.css');

import "../globals.css"

export default function WalletLayout({ children }: { children: ReactNode }) {
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = "http://127.0.0.1:8899";

    const wallets = useMemo(() => [
        new BraveWalletAdapter(),
        new SalmonWalletAdapter(),
        new PhantomWalletAdapter()
    ], [network])

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets}>
                <WalletModalProvider>
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}
