import React from 'react'
import { Expenses_Total } from '../../components/Expenses_Total'
import expenses from '../fixtures/expenses'
import { shallow } from 'enzyme'

let wrapper

beforeEach(() => {
    wrapper = shallow(<Expenses_Total expenses={expenses} />)
})

test('should match Snapshot with single expense', () => {
    wrapper.setProps({
        expenses: [expenses[0]]
    })
    expect(wrapper).toMatchSnapshot()
})

test('should match Snapshot with multiple expenses', () => {
    expect(wrapper).toMatchSnapshot()
})
