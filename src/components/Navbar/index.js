import styles from './Navbar.module.css'
function Navbar() {
  return (
    <nav>
      <ul className={styles.List}>
        <li>Home</li>
        <li>Login</li>
        <li>Sign Up</li>
      </ul>
    </nav>
  )
}
export default Navbar;