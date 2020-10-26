import React from 'react'
import { shallow } from 'enzyme'
import { Header } from '../../components/Header'

let wrapper, spy

beforeEach(() => {
    wrapper = shallow(<Header startLogout={() => { }}/>)
    spy = jest.fn()
})

test('should render Header correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should call startLogout on button click', () => {
    wrapper.setProps({
        startLogout: spy
    })
    wrapper.find('button').simulate('click')
    expect(spy).toHaveBeenCalled()
})