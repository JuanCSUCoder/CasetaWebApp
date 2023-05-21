"use client";

import styles from "./page.module.css";
import { Roboto } from "next/font/google";
import Button from "@/components/Button";
import dynamic from "next/dynamic";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";

const WalletDisconnectButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletDisconnectButton,
  { ssr: false }
);
const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);


const roboto = Roboto({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default function RegisterPage() {
  const wallet = useAnchorWallet()
  const connection = useConnection()

  console.log(wallet)

  return (
    <>
      <h1
        className={roboto.className}
        style={{
          color: "white",
        }}
      >
        Register RealState
      </h1>

      <p
        className={roboto.className}
        style={{
          color: "white",
          maxWidth: "35rem",
        }}
      >
        Welcome to Caseta, the revolutionary platform for real estate
        transactions on the blockchain. With Caseta, you can securely and
        efficiently buy, sell, and manage real estate properties using the power
        of blockchain technology. Fill this form, and we will walk you through
        the process of using Caseta for your real estate transactions.
      </p>

      <form className={roboto.className + " " + styles.form} action="/success">
        <section>
          <h2>Property Information</h2>

          <label htmlFor="pname">Property Name:</label>
          <input
            id="pname"
            name="pname"
            className={styles.emailbox}
            type="text"
            placeholder="Wonderful Property"
            required
          />

          <h3>Location Information</h3>

          <label htmlFor="country">Country:</label>
          <select
            name="country"
            id="country"
            className={styles.emailbox}
            placeholder="Select a Country"
            required
          >
            <option value="">Select a Country</option>
            <option value="CO">Colombia</option>
          </select>
          <label htmlFor="state">State/Department:</label>
          <select
            name="state"
            id="state"
            className={styles.emailbox}
            placeholder="Select State/Department"
            required
          >
            <option value="">Select State/Department</option>
            <option value="AMA">Amazonas</option>
            <option value="ANT">Antioquia</option>
            <option value="ARA">Arauca</option>
            <option value="SAP">
              Archipelago of Saint Andréws, Providence and Saint Catalina
            </option>
            <option value="ATL">Atlántico</option>
            <option value="BOL">Bolívar</option>
            <option value="BOG">Bogotá D.C.</option>
            <option value="BOY">Boyacá</option>
            <option value="CAL">Caldas</option>
            <option value="CAQ">Caquetá</option>
            <option value="CAS">Casanare</option>
            <option value="CAU">Cauca</option>
            <option value="CES">Cesar</option>
            <option value="CHO">Chocó</option>
            <option value="COR">Córdoba</option>
            <option value="CUN">Cundinamarca</option>
            <option value="GUA">Guainía</option>
            <option value="GUV">Guaviare</option>
            <option value="HUI">Huila</option>
            <option value="LAG">La Guajira</option>
            <option value="MAG">Magdalena</option>
            <option value="MET">Meta</option>
            <option value="NAR">Nariño</option>
            <option value="NSA">Norte de Santander</option>
            <option value="PUT">Putumayo</option>
            <option value="QUI">Quindío</option>
            <option value="RIS">Risaralda</option>
            <option value="SAN">Santander</option>
            <option value="SUC">Sucre</option>
            <option value="TOL">Tolima</option>
            <option value="VAC">Valle del Cauca</option>
            <option value="VAU">Vaupés</option>
            <option value="VID">Vichada</option>
          </select>
          <label htmlFor="address">Address:</label>
          <input
            id="address"
            name="address"
            className={styles.emailbox}
            type="text"
            placeholder="Cr 000 No. 00-00, C.P 11001"
            required
          />

          <h3>Verification Info</h3>
          <label htmlFor="doc">Document Proof:</label>
          <input
            id="doc"
            name="doc"
            className={styles.emailbox}
            type="file"
            required
          />
        </section>

        <section>
          <h2>Owner Information</h2>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            className={styles.emailbox}
            placeholder="someone@example.com"
            required
          />

          <label htmlFor="nip">ID Number:</label>
          <input
            type="number"
            name="nip"
            id="nip"
            className={styles.emailbox}
            placeholder="0 000 000 000"
            required
          />
          <label htmlFor="first-name">First Name:</label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            className={styles.emailbox}
            placeholder="John"
            required
          />
          <label htmlFor="last-name">Last Name:</label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            placeholder="Smith"
            className={styles.emailbox}
            required
          />

          <label htmlFor="wallet">Wallet:</label>

          <p style={{
            maxWidth: "320px",
            textOverflow: "ellipsis",
            overflow: "hidden",
            fontWeight: "bold",
            textDecoration: "underline",
            cursor: "pointer"
          }}>
            {wallet ? wallet.publicKey.toString() : ""}
          </p>

          <WalletMultiButtonDynamic />
          <WalletDisconnectButtonDynamic />

          <Button
            value="Send Request"
            submit
            style={{
              margin: 0,
              marginTop: "1rem",
            }}
          />
        </section>
      </form>
    </>
  );
}
