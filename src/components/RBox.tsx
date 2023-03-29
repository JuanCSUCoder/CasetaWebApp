import { ReactNode } from "react";
import styles from './RBox.module.css'

export default function RBox({children}:{children: ReactNode}) {
    return (
        <div className={styles.responsive}>
            {children}
        </div>
    )
}