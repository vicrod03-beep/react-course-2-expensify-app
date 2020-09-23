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

export { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate }