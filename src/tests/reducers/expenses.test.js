import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT '})
    expect(state).toEqual([])
})

test('should add an expense', () => {
    const action = {        
        type: 'ADD_EXPENSE',
        expense: expenses[0]
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, action.expense])
})

test('should remove expense by id', () => {
    const action = {        
        type: 'REMOVE_EXPENSE',
        id: '1'
    }
    
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([
        expenses[1],
        expenses[2]
    ])
})

test('should not remove expense if id not found', () => {
    const action = {        
        type: 'REMOVE_EXPENSE',
        id: '4'
    }
    
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should edit an expense', () => {
    const action = {        
        type: 'EDIT_EXPENSE',
        id: '3',
        updates: { amount: 770 }
    }
    
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([
        expenses[0],
        expenses[1],
        {
            ...expenses[2],
            ...action.updates
        }
    ])
})

test('should edit another expense', () => {
    const action = {        
        type: 'EDIT_EXPENSE',
        id: '3',
        updates: { amount: 770 }
    }
    
    const state = expensesReducer(expenses, action)
    expect(state[2].amount).toBe(action.updates.amount)
})

test('should not edit values if id not found', () => {
    const action = {        
        type: 'EDIT_EXPENSE',
        id: '4',
        updates: { amount: 770 }
    }
    
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})