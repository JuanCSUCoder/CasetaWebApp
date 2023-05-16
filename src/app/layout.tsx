import Image from "next/image";
import { Roboto } from "next/font/google";

import RBox from "@/components/RBox";
import LandingNav from "@/components/LandingNav";

import logo from "@/assets/logo_v1_transparent.png";
import "./globals.css";
import Block from "@/components/Block";
import Link from "next/link";

const roboto = Roboto({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const robold = Roboto({
  weight: "700",
  style: "normal",
  subsets: ["latin"]
})

export const metadata = {
  title: "CASETA - Fast & Secure Realstate Transactions",
  description:
    "CASETA is a platform to manage your physical assets, securely and in the fastest way, to deal nationally and internationally",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <header>
          <RBox
            style={{
              alignItems: "center",
              paddingLeft: "3rem",
              paddingRight: "3rem",
            }}
          >
            <Link href="/">
              <Image src={logo} alt="Caseta Logo" width={250} />
            </Link>
            <div className={roboto.className}>
              <LandingNav />
            </div>
          </RBox>
        </header>
        {children}
        <footer
          style={{
            backgroundColor: "white",
            color: "black",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <p
            className={robold.className}
            style={{
              textAlign: "center",
              padding: "3rem",
            }}
          >
            All Rights Reserved © Caseta 2023
          </p>
        </footer>
      </body>
    </html>
  );
}
