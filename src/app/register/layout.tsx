import Block from "@/components/Block";
import { ReactNode } from "react";

export default function RegisterLayout({ children }: { children: ReactNode}) {
    return (
        <Block page>
            {children}
        </Block>
    )
}