import styles from "./page.module.css";
import { Roboto } from "next/font/google";
import Button from "@/components/Button";

const roboto = Roboto({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default function RegisterPage() {
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
          <h2>Property Information:</h2>

          <label htmlFor="pname">Property Name:</label>
          <input
            id="pname"
            name="pname"
            className={styles.emailbox}
            type="text"
          />

          <h3>Location Information:</h3>

          <label htmlFor="country">Country:</label>
          <input
            id="country"
            name="country"
            className={styles.emailbox}
            type="text"
          />
          <label htmlFor="address">Address:</label>
          <input
            id="address"
            name="address"
            className={styles.emailbox}
            type="text"
          />

          <h3>Verification Info</h3>
          <label htmlFor="doc">Document Proof:</label>
          <input id="doc" name="doc" className={styles.emailbox} type="file" />
        </section>

        <section>
          <h2>Owner Information:</h2>
          <label htmlFor="nip">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            className={styles.emailbox}
          />

          <label htmlFor="nip">ID Number:</label>
          <input
            type="number"
            name="nip"
            id="nip"
            className={styles.emailbox}
          />
          <label htmlFor="first-name">First Name:</label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            className={styles.emailbox}
          />
          <label htmlFor="last-name">Last Name:</label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            className={styles.emailbox}
          />

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
