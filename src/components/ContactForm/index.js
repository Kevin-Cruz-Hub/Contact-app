// useRef: Lets you hold some type of information that will not be used for rendering, similar to getElementByID, lets you make a connection betten a variable and an input
import { useRef, useState, useContext } from 'react'
// You need to import both the useContext and the ContactContext name at the same time 
import { ContactsContext } from '../../context/ContactContext.'
import styles from './ContactForm.module.css'
function ContactForm(props) {
    // import -> initialize the values -> 
    const contactsCtx = useContext(ContactsContext)
    // console.log(contactsCtx)
    const { dispatch } = contactsCtx

    // Creating a control form
    const [formData, setFormData] = useState({
        // passing an object that will have key:pair values that need to be stored dynamically
        name: '',
        email: '',
        phone: ''
    })


    // useRef does not trigger a re-render/reload of the screen, useful when using non-react systems like built in browser API
    // First create a variable that uses useRef as a reference to an element
    // const nameRef = useRef('')
    // const emailRef = useRef('')
    // const phoneRef = useRef('')


    const handleSubmit = (e) => {
        // This method is going to stop the default behavior of the form
        // This will stop the button from reloading the screen
        e.preventDefault()
        // You will need to enter current.value to get the value that the user enterred/ the element that the ref was attatched to
        // console.log(nameRef.current.value);
        // console.log(emailRef.current.value);
        // console.log(phoneRef.current.value);

        // Create a new contact
        // const newContact = {
        //     name: nameRef.current.value,
        //     email: emailRef.current.value,
        //     phone: phoneRef.current.value,
        // }
        // This creates a new object that you can add to your state in ContactList
        // nameRef.current.value = ''
        // emailRef.current.value = ''
        // phoneRef.current.value = ''



        // This add an id to all the new elements added to the array using new Date()
        const newContact = {...formData, id: new Date()}
        // addNewContact(newContact)
        console.log("This is a new Contact:",newContact)
        // dispatch from useReducer
        dispatch({type:'add_contact', payload: newContact})

        // This is needed in order to add to the set the inputs back to empty
        setFormData({
            name: '',
            email: '',
            phone: ''
        });
    }


    // function to handle the uses inputs and update the useState and 
    const handleChange = (e) => {
        // You can use these to update the useState
        // console.log(e.target.name)
        // console.log(e.target.value)


        // by passing a new object 
        // This will always be the same method
        // make sure the elements = items in the object -> spread the array and 
        setFormData({
            // This will connect the state to the form first accessing the useState with the spread operator
            // Then accessing the element name and giving it the value of the 
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className={styles.FormD}>
            <h2>Create New Contact</h2>
            {/* Creating the app form */}
            {/* use an event listener to listen for when the user submits and pass the needed function*/}
            <form onSubmit={handleSubmit}>
                <div>
                    {/* Then pair it to an element to reference it */}
                    <label>Name:
                        <input type='text'
                            value={formData.name}
                            onChange={handleChange}
                            name='name' />
                    </label>
                    {/* <label>Name: <input type='text' ref={nameRef} /></label> */}
                </div>
                <div>
                    {/* now to bind the inputs to the states, this gives control of the inputs to the state hook */}
                    {/* requires an onchange event listener in order to update the text */}
                    <label>Email:
                        <input type='text'
                            value={formData.email}
                            onChange={handleChange}
                            name='email' />
                    </label>
                    {/* <label>Email : <input type='text' ref={emailRef} /></label> */}
                </div>
                <div>
                    <label>Phone:
                        <input type='text'
                            value={formData.phone}
                            onChange={handleChange}
                            name='phone' />
                    </label>
                    {/* <label>Phone: <input type='text' ref={phoneRef} /></label> */}
                </div>
                <div className={styles.ButtonCont}>
                    {/* A button will automatically reload the screen */}
                    <button className={styles.Button}>Create</button>
                </div>
            </form>
        </div>
    )
}
export default ContactForm;