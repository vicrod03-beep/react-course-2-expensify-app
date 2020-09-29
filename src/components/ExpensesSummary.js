import React from 'react'
import { connect } from "react-redux"
import expensesTotal from '../selectors/expenses-total'
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
    return {
        expensesCount: state.expenses.length,
        expensesSummary: expensesTotal(state.expenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)