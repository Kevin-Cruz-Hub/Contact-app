// useReducer: is used to store an object with 2 properties, allows us to manage our state logic using a rudeced function that is in charge of updating the state by returning a dispatcher function. 
import { useState, useEffect, useReducer } from 'react'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main'
// useReducer
import ContactsReducer from './Reducer/ContactsReducer';
// This is how you import the ContactsContext data
import { ContactsContext } from './context/ContactContext.';
// Context: allows us to create an object that can be passed directly to children at any level without having to pass them around as props by putting it in a global state
function App() {
  // lifting the state: is when you move a state up from a child component to a parent component in order to pass the state down to the necessary child components as props

  // Store the API data and for mapping over that data
  // const [Contacts, setContacts] = useState(null)
  //  console.log(Contacts)

  // contacts: global state
  // dispatch: function that will send a 'action' object to the reducer function
  // useReducer:
  //the ContactsReducer is the imported function that is going to have all the logic to update the state 
  const [Contacts, dispatch] = useReducer(ContactsReducer, null)



  // Fetch the data from the API, Hook effect that will be used for any side-effect (Anything outside the react ecosystem )
  // Will fetch data from the API when the component mounts/shown in the browser
  useEffect(() => {

    // async lets the browser know that this data is going to take some time to come in, and will allow you to use the await keyword
    const fetchData = async () => {
      const resp = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await resp.json()
      // type: type of action you want to  , payload: the data (optional)
      // dispatching an action to a useReducer Function
      dispatch({type: 'fetched_data', payload: data}/*This is the action */)

    }
    fetchData()
  }, [])



  // Adding a new Contact to the Contact list
  const addNewContact = (newContact) => {
    // This function is going to be passed to the contact form component
    

    // type can be anything its just a name for the data that is being passed
    // setContacts([...Contacts, dispatch])
  }
  return (
    // Everythin wrapped inside the tags will have access to the data 
    // This is just like an API that can allow you to pass data without having to do prop drilling
    // Passing the useState and the add new contact to the ContactContext.Provider
    // You can wrap a context within a context, the Context name can be changed
    <ContactsContext.Provider value={{Contacts, dispatch}}>
      <div className="App">
        <Navbar />
        <Header title='Contact App' />
        <Main />
      </div>
    </ContactsContext.Provider>
  );
}

export default App;
