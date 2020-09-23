import { v4 as uuidv4 } from 'uuid'

// add_expense
const addExpense = (
    { 
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0 } = {}
    ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description, 
        note, 
        amount, 
        createdAt
    }
})

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