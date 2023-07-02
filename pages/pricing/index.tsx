import styles from '@/styles/Home.module.css'
import { MainLayout } from '@/components/Layouts/MainLayout'
import { DarkLayout } from '@/components/Layouts/DarkLayout'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/pricing.tsx</code>
          </p>
         
        </div>
  )
}

Home.getLayout=function getLayout(page:JSX.Element){
    return(
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}