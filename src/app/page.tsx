import Image from 'next/image'
import { Roboto } from 'next/font/google'
import styles from './page.module.css'

const roboto = Roboto({
  weight: "400",
  style: "normal",
  subsets: [ "latin" ]
})

export default function Home() {
  return (
    <main className={[styles.main, roboto.className].join(" ")}>
      <h1>Caseta</h1>
    </main>
  );
}
