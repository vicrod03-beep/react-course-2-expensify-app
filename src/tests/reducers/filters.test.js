import filterReducer from '../../reducers/filters'
import moment from 'moment'

const state = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

test('should setup default filter values', () => {
    const state = filterReducer(undefined, {
        type: '@@INIT'
    })

    expect(state).toEqual(state)
})

test('should setup amount filter values', () => {
    const action = {
        type: 'SORT_BY_AMOUNT'
    }

    const result = filterReducer(undefined, action)
    expect(result.sortBy).toBe('amount')
})

test('should setup date filter values', () => {
    const action = {
        type: 'SORT_BY_DATE'
    }

    const result = filterReducer(state, action)
    expect(result.sortBy).toBe('date')
})

test('should setup text filter value', () => {
    const action = {
        type: 'SET_TEXT_FILTER', 
        text: 'something'
    }
    const result = filterReducer(undefined, action)
    expect(result.text).toBe(action.text)

})

test('should setup start date filter value', () => {
    const action = {
        type: 'SET_START_DATE', 
        startDate: moment()
    }
    const result = filterReducer(undefined, action)
    expect(result.startDate).toEqual(action.startDate)

})

test('should setup end date filter value', () => {
    const action = {
        type: 'SET_END_DATE', 
        endDate: moment()
    }
    const result = filterReducer(undefined, action)
    expect(result.endDate).toEqual(action.endDate)

})

