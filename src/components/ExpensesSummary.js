import React from 'react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import expensesTotal from '../selectors/expenses-total'
import getVisibleExpenses from '../selectors/expenses'
import numeral from 'numeral'

export const ExpensesSummary = (props) => (
    <div className="page-header">
        <div className="content-container">
        {props.expensesCount === 0 ? '' :
            <div>
                <h1 className="page-header__title"> Viewing <span>{props.expensesCount}</span> expense{props.expensesCount > 1 ? 's' : ''}, totalling <span>{numeral(props.expensesSummary / 100).format('$0,0.00')}</span></h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>}
        </div>
    </div>
)

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    return {
        expensesCount: visibleExpenses.length,
        expensesSummary: expensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)