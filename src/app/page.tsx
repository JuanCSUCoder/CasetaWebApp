import Image from 'next/image'
import { Roboto } from 'next/font/google'

import styles from './page.module.css'
import logo from '@/assets/brand/logo_v1_transparent.png'
import PreSignUp from '@/components/PreSignUp'
import LandingNav from '@/components/LandingNav'
import HBox from '@/components/HBox'

const roboto = Roboto({
  weight: "400",
  style: "normal",
  subsets: [ "latin" ]
})

export default function Home() {
  return (
    <main className={[styles.main, roboto.className].join(" ")}>
      <HBox>
        <Image src={logo} alt="Caseta Logo" width={300} />
        <LandingNav />
      </HBox>
      <h2>
        A fast, secure and realiable way of making realstate transactions
        globally
      </h2>
      <PreSignUp />
    </main>
  );
}
