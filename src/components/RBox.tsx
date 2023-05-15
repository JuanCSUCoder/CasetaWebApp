import { CSSProperties, ReactNode } from "react";
import styles from './RBox.module.css'

export default function RBox({
        children,
        spaced,
        className,
        style
    }: {
        children: ReactNode,
        spaced?: boolean,
        className?: string,
        style?: CSSProperties
    }) {
    return <div className={[styles.responsive, spaced ? styles.space : '', className].join(' ')} style={style}>{children}</div>;
}