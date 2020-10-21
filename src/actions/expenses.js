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
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0
        } = expenseData
        const expense = { description, note, amount, createdAt }
        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}

// remove_expense
const removeExpense = id => ({
    type: 'REMOVE_EXPENSE',
    id
})

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses/${id}`).remove()
            .then(() => {
                dispatch(removeExpense(id))
            })
    }
}

// edit_expense
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

export const startEditExpense = (id, updates) => {
     return (dispatch, getState) => {
         const uid = getState().auth.uid
         return database.ref(`users/${uid}/expenses/${id}`).update({
             ...updates
         })
         .then(() => {
             dispatch(editExpense(id, updates))
         })
     }
 }

// set_expenses 
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses`)
            .once('value')
            .then(snapshot => {
                const expenses = []
                snapshot.forEach(childSnapshot => {
                    expenses.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    })
                })
                dispatch(setExpenses(expenses))
            })
    }
}

export { addExpense, removeExpense, editExpense }