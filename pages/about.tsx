import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'
import { MainLayout } from '@/components/Layouts/MainLayout'
import { DarkLayout } from '@/components/Layouts/DarkLayout'

const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
  return (
    <MainLayout>
      <DarkLayout>
      <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/about.tsx</code>
          </p>
         
        </div>
      </DarkLayout>
    </MainLayout>
  )
}