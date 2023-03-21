import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Index.module.css'
import { useState, useEffect } from 'react'

import SettingsPanel from '../components/SettingsPanel'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Image Editor</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Hello</h1>
        <SettingsPanel />
      </main>
    </>
  )
}