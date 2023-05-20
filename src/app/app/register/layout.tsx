import Block from "@/components/Block";
import { ConnectionProvider } from "@solana/wallet-adapter-react";
import { ReactNode } from "react";

export default function RegisterLayout({ children }: { children: ReactNode}) {
    return (
        <Block page>
            {children}
        </Block>
    )
}