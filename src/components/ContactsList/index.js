// import { useState, useEffect } from 'react'
import { useContext } from 'react';
import { ContactsContext } from '../../context/ContactContext.';
import ContactItem from '../ContactItem'
function ContactsList() {
  const ContactsCtr = useContext(ContactsContext)
  // console.log(ContactsCtr)
  const {Contacts} = ContactsCtr;
  // const {contacts} = props
  // // useState and useEffect are now in the main component
  // Store the API data and for mapping over that data
  // const [Contacts, setContacts] = useState(null)
  // console.log(Contacts)


  // Fetch the data from the API, Hook effect that will be used for any side-effect (Anything outside the react ecosystem )
  // Will fetch data from the API when the component mounts/shown in the browser
  // useEffect(() => {

    // async lets the browser know that this data is going to take some time to come in, and will allow you to use the await keyword
  //   const fetchData = async () => {
  //     const resp = await fetch('https://jsonplaceholder.typicode.com/users')
  //     const data = await resp.json()
  //     setContacts(data)

  //   }
  //   fetchData()
  // }, [])


  return (
    <div>
      <h2>Contacts List</h2>
      <>
        {
          // Load up the component -> after the component mounts run the useEffect -> When the data comes back load into useState -> When data is in the useState reload the component -> when reloading the component you are going to loop over all the data and render all the information
          // Looping over useState info, .map(): mutates the array
          Contacts ? (
            Contacts.map((contact) =>
              // To use a spread operator instead of a value do {...contact} and remove the variable name from props in ContactItem
              <ContactItem key={contact.id} item={contact} />
              // <ContactItem key={contact.id} name={contact.name} email={contact.email} phone={contact.phone}/> 
            )) : (
            <h3>No Contacts found...</h3>
          )
        }
      </>
    </div>
  )
}
export default ContactsList;