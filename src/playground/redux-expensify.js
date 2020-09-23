import { createStore, combineReducers } from 'redux'
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

// set_text_filter 
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

// sort_by_date
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

// sort_by_amount
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

// set_start_date
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

// set_end_date
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

// Expenses Reducer 

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })
        default: 
            return state
    }
}

// Filters Reducer

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':            
            return {
                ...state, 
                text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }      
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }    
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }                
        default: 
            return state
    }
}

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else {
            return a.amount < b.amount ? 1 : -1
        }
    })
} 

// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
)

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({
    description: 'Rent',
    amount: 1000,
    createdAt: -10000
}))

const expenseTwo = store.dispatch(addExpense({
    description: 'Coffee',
    amount: 3000,
    createdAt: -1000
}))

// store.dispatch(removeExpense({
//     id: expenseOne.expense.id
// }))

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))

//store.dispatch(setTextFilter('e'))
// store.dispatch(setTextFilter())

store.dispatch(sortByAmount())
//store.dispatch(sortByDate()) 

//store.dispatch(setStartDate(0))
// store.dispatch(setStartDate())
//store.dispatch(setEndDate(1250))


const demoState = {
    expenses: [{
        id: 'lkalskdasd',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}

