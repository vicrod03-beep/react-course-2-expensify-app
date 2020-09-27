import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import getVisibleExpenses from '../selectors/expenses'

export class ExpenseList extends React.Component {
    expenseLenght = () => this.props.expenses.length === 0 ? false : true
    render () {
        return (
            <div>
                {
                    this.expenseLenght() && 
                    this.props.expenses.map(expense => {
                        return <ExpenseListItem key={expense.id} {...expense} />
                    })
                }
            </div>
        )
    }
}

/* export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? 
                <p>No expenses</p>
            : 
            props.expenses.map(expense => {
                return <ExpenseListItem key={expense.id} {...expense} />
            })
        }  
        <div>
            {props.expenses.length === 0 ? 
             '' :
            <ExpensesTotal expenses={props.expenses} />
            }
        </div>
    </div>
)
 */
const mapStateToProps = (state) => ({
        expenses: getVisibleExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpenseList)

