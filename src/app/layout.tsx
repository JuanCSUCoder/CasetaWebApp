import './globals.css'

export const metadata = {
  title: 'CASETA - Fast & Secure Realstate Transactions',
  description: 'CASETA is a platform to manage your physical assets, securely and in the fastest way, to deal nationally and internationally',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
