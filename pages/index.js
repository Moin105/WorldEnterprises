import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section5 from '../components/Section5'
import Section6 from '../components/Section6'
import Section7 from '../components/Section7'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>World Enterprises</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.png" />
      </Head>
     <Header/>
     <Banner/>
     <Section2/>
     <Section3/>
     <Section5/>
     <Section6/>
     <Section7/>
     <Footer/>
    </div>
  )
}
