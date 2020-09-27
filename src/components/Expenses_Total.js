import React from 'react'
import { connect } from "react-redux"
import getVisibleExpenses from "../selectors/expenses"

export const Expenses_Total = (props) => (
    <h3> Viewing {props.expenses.length} expenses, totalling {props.expenses.reduce((acc, { amount }, array) => {
                                                    return acc + amount
                                                    }, 0)}
    </h3>
)

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(Expenses_Total)