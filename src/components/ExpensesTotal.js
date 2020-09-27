import React from 'react'

export default (props) => {
    return props.expenses.reduce((acc, { amount }, arr) => {
        return acc + amount
    }, 0)
}
 