import Link from 'next/link'
import styles from './sidebar.module.css'
import {Tooltip} from '@mui/material/Tooltip';


export default function Sidebar() {
  return (

    <nav className={styles.nav}>

<>
<div className={styles.nav_items}><div className={styles.nav_item}>Home</div>




<div className={styles.nav_item}>About</div>
<div className={styles.nav_item}>Contact</div>




</div>




</>


    </nav>
  )
}
