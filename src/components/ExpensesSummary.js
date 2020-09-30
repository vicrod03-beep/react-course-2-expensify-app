import React from 'react'
import { connect } from "react-redux"
import expensesTotal from '../selectors/expenses-total'
import getVisibleExpenses from '../selectors/expenses'
import numeral from 'numeral'

export const ExpensesSummary = (props) => (
    <div>
        {
            props.expensesCount === 0 ? '' :
            <h3> 
                Viewing {props.expensesCount} expense{props.expensesCount > 1 ? 's' : ''}, totalling {numeral(props.expensesSummary / 100).format('$0,0.00')}
            </h3>
        }
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