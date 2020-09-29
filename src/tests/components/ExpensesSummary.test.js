import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'
import expenses from '../fixtures/expenses'

let wrapper

beforeEach(() => {
    wrapper = shallow(<ExpensesSummary expensesCount={2} expensesSummary={94} />)
})

test('should view 2 expenses totalling 94', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should view 1 expense totalling 90', () => {
    wrapper.setProps({
        expensesCount: 1,
        expensesSummary: 90

    })
    expect(wrapper).toMatchSnapshot()
})