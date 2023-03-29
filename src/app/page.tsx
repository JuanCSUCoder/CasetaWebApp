import Image from 'next/image'
import { Roboto } from 'next/font/google'

import styles from './page.module.css'
import logo from '@/assets/logo_v1_transparent.png'
import solanaLogo from '@/assets/solanaLogo.png'
import { BiKey } from 'react-icons/bi'
import { HiLightningBolt } from 'react-icons/hi'

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
      <h2>
        A fast, secure and realiable way of making realstate transactions
        globally
      </h2>
      <Block page>
        <RBox spaced>
          <div id="features">
            <h1>Hosted on Blockchain</h1>
            <p className={styles.desc}>
              Everything is hosted on the blockchain, so all the information is
              transparent and independent from private or government databases
            </p>
          </div>
          <Image src={solanaLogo} alt="Solana Blockchain Logo" width={400} />
        </RBox>
      </Block>
      <Block page>
        <RBox spaced>
          <div>
            <h1>Improved Security with Decentralization</h1>
            <p className={styles.desc}>
              Your real-world assets are represented as digital assets that you
              own. You are in full control of them.
            </p>
            <p className={styles.desc}>
              Assets are never transfered if sale-contract conditions are not met.
            </p>
          </div>
          <BiKey size={200} />
        </RBox>
      </Block>
      <Block page>
        <RBox spaced>
          <div>
            <h1>Just Fast Transactions</h1>
            <p className={styles.desc}>
              No need for waiting at government institutions. Just some clicks
              and your sale is made.
            </p>
          </div>
          <HiLightningBolt size={200} />
        </RBox>
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
