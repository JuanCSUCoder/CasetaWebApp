import { ReactNode } from "react";

export default function RBox({children}:{children: ReactNode}) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '100%'
        }}>
            {children}
        </div>
    )
}