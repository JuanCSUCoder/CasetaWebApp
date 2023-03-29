import { ReactNode } from "react";
import styles from './RBox.module.css'

export default function RBox({children, spaced}:{children: ReactNode, spaced?: boolean}) {
    return (
        <div className={styles.responsive}>
            {children}
        </div>
    )
}