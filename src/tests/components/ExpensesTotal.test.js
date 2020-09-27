import React from 'react'
import { shallow } from 'enzyme'
import ExpensesTotal from '../../components/ExpensesTotal'
import expenses from '../fixtures/expenses'

test('should return 0 ', () => {
    const exp = [{}]
    const state = ExpensesTotal ({expenses})
    expect(state).toBe(114195)
})

/* test('should return 0 if no expenses', () => {
    expenses = jest.fn()
    const wrapper = shallow(<ExpensesTotal expenses={ex/>)
    expect(wrapper).toHaveBeenLastCalledWith([])
}) */