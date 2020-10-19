import React from 'react'
import { shallow } from 'enzyme'
import { LoginPage } from '../../components/LoginPage'

let wrapper, spy

beforeEach(() => {
    wrapper = shallow(<LoginPage startLogin={() => { }}/>)
    spy = jest.fn()
})

test('should correctly render LoginPage', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should call startLogin on button click', () => {
    wrapper.setProps({
        startLogin: spy
    })
    wrapper.find('button').simulate('click')
    expect(spy).toHaveBeenCalled()
})