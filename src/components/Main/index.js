import ContactsList from '../ContactsList'
import ContactForm from '../ContactForm'
import styles from './Main.module.css'
function Main() {
  return (
    <main className={styles.Main}>

      <section className={styles.Apart}>
        <ContactsList/>
      </section>

      <section className={styles.Apart}>
        {/* Rendering is to call a component content within another component */}
        <ContactForm/>
      </section>
    </main>
  )
}
export default Main