import React, { ReactNode } from "react";
import styles from './HBox.module.css'

export default function HBox({children}:{children: ReactNode}) {
    return (
        <div className={styles.hbox}>
            {children}
        </div>
    )
}