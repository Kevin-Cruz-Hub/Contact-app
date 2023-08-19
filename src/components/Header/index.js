import styles from './Header.module.css'
// This imports styles and will not collide with other styling names
function Header(props) {
    const {title} = props
  return (
    <div className={styles.Container}>
      <h1>{title}</h1>
    </div>
  )
}
export default Header;