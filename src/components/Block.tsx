import { ReactNode } from "react";

import styles from './Block.module.css'

export default function Block({children, page}: {children: ReactNode, page?: boolean}) {
    return (
        <div className={styles.b + (page ? " " + styles.page : "")}>
            {children}
        </div>
    )
}