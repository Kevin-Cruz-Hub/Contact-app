/**
//  * These are called documentation strings and its just docing what your functions is doing 
 * @description Stores all the state logic, to get this enter /** and it will show automatically
 * @param {*} state :Current state
 * @param {*} action : object with the type and payload
 * @returns 
 */
// Store all the state logic in order to update the state
export default function ContactsReducer(state, action){
    // destructuring the object data that was recieved from the API
    const {type, payload} = action
    

    // console.log(action)
    // console.log(state) //Returns the initial data that can not be changed directly

    console.log(type)
    console.log(payload)

    // Switch statements must always return a new state
    switch(type) {
        // These names have to match the dispatchs that you want to be received, can make the name anything you want
        case 'fetched_data':
            // payload is the array of data/contacts from the API
            return[...payload]
        case 'add_contact':
            return[...state, payload]
            break;
        case 'delete_contact':
            const copyState = [...state]

            // filter will loop through the item and is going to return every item.id not equal to the payload in a new array
            const newArray = copyState.filter(item => item.id !== payload)
            return [
                // will return a new array without the selected element
                ...newArray
            ]
        default:
            return[]
    }
}