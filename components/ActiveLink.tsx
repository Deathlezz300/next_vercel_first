import React from 'react'
import Link from 'next/link'
import styles from '../styles/NavBar.module.css'
import { useRouter } from 'next/router'

interface props{
    ruta:string,
    texto:string
}

export const ActiveLink = ({ruta,texto}:props) => {
  
    const {asPath}=useRouter();
  
    return (
    <Link className={`${styles['head-link']} ${asPath==ruta ? styles.color : ''}`} href={ruta}>{texto}</Link>
  )
}
