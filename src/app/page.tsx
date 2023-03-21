import Image from 'next/image'
import { Roboto } from 'next/font/google'

import styles from './page.module.css'
import logo from '@/assets/brand/logo_v1_transparent.png'
import solanaLogo from '@/assets/solanaLogo.png'

import PreSignUp from '@/components/PreSignUp'
import LandingNav from '@/components/LandingNav'
import HBox from '@/components/HBox'
import Block from '@/components/Block'

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
      <h2 id="features">
        A fast, secure and realiable way of making realstate transactions
        globally
      </h2>
      <Block page>
        <HBox spaced>
          <h1>Hosted on Blockchain</h1>
          <Image src={solanaLogo} alt="Solana Blockchain Logo" width={400} />
        </HBox>
      </Block>
      <Block>
        <h1
          id="sign"
          style={{
            marginBottom: 20,
          }}
        >
          Get Notified When is Ready!
        </h1>
        <PreSignUp />
      </Block>
    </main>
  );
}
