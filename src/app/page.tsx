import { Roboto } from 'next/font/google'

import styles from './page.module.css'
import solanaLogo from '@/assets/solanaLogo.png'
import { BiKey } from 'react-icons/bi'
import { HiLightningBolt } from 'react-icons/hi'

import PreSignUp from '@/components/PreSignUp'
import Block from '@/components/Block'
import RBox from '@/components/RBox'
import FeatureIcon from '@/components/FeatureIcon'
import Button from '@/components/Button'

const roboto = Roboto({
  weight: "400",
  style: "normal",
  subsets: [ "latin" ]
})

export default function Home() {
  return (
    <main className={[styles.main, roboto.className].join(" ")}>
      <Block>
        <h2
          style={{
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          A fast, secure and realiable way of making realstate transactions
          globally
        </h2>
      </Block>
      <Block page>
        <RBox>
          <div id="features">
            <h1>What is Caseta?</h1>
            <p className={styles.desc}></p>
            <Button
              value="Watch in YouTube"
              style={{
                margin: 0,
              }}
              link="https://youtu.be/bx7t_AUUeZo"
              blank
            />
          </div>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/bx7t_AUUeZo"
            title="Bienvenido a Caseta - ¿Qué es? ¿Para qué sirve?"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="hide-mobile"
          ></iframe>
        </RBox>
      </Block>
      <Block page>
        <RBox spaced>
          <div id="features">
            <h1>Hosted on Blockchain</h1>
            <p className={styles.desc}>
              Everything is hosted on the blockchain, so all the information is
              transparent and independent from private or government databases
            </p>
            <Button
              value="Try our Smart Contract"
              style={{
                margin: 0,
              }}
              link="/app/register"
            />
          </div>
          <FeatureIcon src={solanaLogo} alt="Solana Blockchain Logo" />
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
              Assets are never transfered if sale-contract conditions are not
              met.
            </p>
            <Button
              value="Check Proof-of-History Whitepaper"
              style={{
                margin: 0,
              }}
              link="https://solana.com/solana-whitepaper.pdf"
              blank
            />
          </div>
          <BiKey size={150} />
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
            <Button
              value="Start Selling"
              style={{
                margin: 0,
              }}
              link="/app/register"
            />
          </div>
          <HiLightningBolt size={150} />
        </RBox>
      </Block>
      <Block>
        <h1
          id="sign"
          style={{
            marginBottom: 20,
          }}
        >
          Get Updates of New Features!
        </h1>
        <PreSignUp />
      </Block>
    </main>
  );
}
