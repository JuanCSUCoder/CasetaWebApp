import Block from "@/components/Block";
import { ReactNode } from "react";

export default function SuccessLayout({children}: {children: ReactNode}) {
    return (
        <Block>
            {children}
        </Block>
    )
}