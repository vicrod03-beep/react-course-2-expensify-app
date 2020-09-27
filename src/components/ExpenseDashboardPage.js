import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import Expenses_Total from './Expenses_Total'

const ExpenseDashboardPage = () => (
    <div>
        <Expenses_Total />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export default ExpenseDashboardPage 