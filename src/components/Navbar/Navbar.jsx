import styles from './Navbar.module.css'


const Navbar = () => {
    

  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">Rick And Morty API</a>
    </nav>
  )
}

export default Navbar