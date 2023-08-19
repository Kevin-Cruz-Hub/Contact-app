import styles from './ContactItem.module.css'
import { useContext } from 'react';
import { ContactsContext } from '../../context/ContactContext.';
function ContactItem(props) {
  // console.log(props)

  const contactsCtx = useContext(ContactsContext)
  // console.log('Here',contactsCtx)
  const {dispatch} = contactsCtx

  // You dont need to do the .valuename when deconstructing a rest parameter 
  const { name, phone, email, id } = props.item;
  return (
    <div>
      <h3>{name}</h3>
      <h5>{phone}</h5>
      <h4>{email}</h4>
      <button className={styles.Btn} onClick={() => dispatch({type: 'delete_contact', payload: id})}>Delete</button>
      <hr className={styles.Hr} />
    </div>
  )
}
export default ContactItem;