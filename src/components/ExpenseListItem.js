import React from 'react'
import { NavLink } from 'react-router-dom'

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
    return (
        <div>
            <NavLink to={`/edit/${id}`} activeClassName="is-active">
                <h3>{description}</h3>
            </NavLink>
            <p>{amount} - {createdAt}</p>
        </div>
    )
}

export default ExpenseListItem