import Link from "next/link"
import styles from '../styles/NavBar.module.css';
import { ActiveLink } from "./ActiveLink";

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const NavBar = () => {
  return (
    <nav className={styles['head-navbar']}>

        {
          menuItems.map((me,index)=>{
            return <ActiveLink key={index} texto={me.text} ruta={me.href}/>
          })
        }

    </nav>
  )
}
