import React, { ReactNode } from "react";
import styles from './HBox.module.css'

export default function HBox({ children, spaced }: { children: ReactNode, spaced?: boolean }) {
    return (
        <div className={styles.hbox + (spaced ? " " + styles.spaced : "")}>
            {children}
        </div>
    )
}