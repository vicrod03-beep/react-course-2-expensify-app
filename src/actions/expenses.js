import { v4 as uuidv4 } from 'uuid'
import database from '../firebase/firebase'

// component calls actions generator
// action generator returns object
// component dispatches object
// redux store changes 


// component calls actions generator
// action generator returns function
// component dispatches function (?)
// function runs (has the ability to dispatch other actions and do whatever it wants)


// add_expense
const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

//startAddExpense
export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0
        } = expenseData
        const expense = { description, note, amount, createdAt }
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}

// remove_expense
const removeExpense = ({
    id
} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// edit_expense
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

export { addExpense, removeExpense, editExpense }