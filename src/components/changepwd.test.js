import React from 'react';
import { shallow, mount, render } from 'enzyme';
//import * as Enzyme from 'enzyme';
//import { configure } from 'enzyme';
//import * as Adapter from 'enzyme-adapter-react-16';
//import { Link } from 'react-router';


import Change from './ChangePassword'// describe what we are testing

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

const sampledata = {
  oldPassword: 'pwd1',
  hpassword: 'pwd2',
  confirmPassword: 'pwd2'
}


describe('cp Component', () => {

  // make our assertion and what we expect to happen 
  it('should render without throwing an error', () => {
    expect(shallow(<Change />).find('form.changepassword').exists()).toBe(true)
  })
})


//checking if each field is rendered
describe('renders a password Old', () => {

  expect(shallow(<Change />).find('input[id="pwdold"]')).toHaveLength(1)

})

describe('renders a password New', () => {

  expect(shallow(<Change />).find('input[id="pwdnew"]')).toHaveLength(1)

})

describe('renders a password Repeat', () => {

  expect(shallow(<Change />).find('input[id="pwdrepeat"]')).toHaveLength(1)

})


//checking types of each field
it('check the type of Old Password', () => {
  const comp = shallow(<Change />);
  const input = comp.find('input[id="pwdold"]');

  expect(input).toHaveLength(1);

  expect(input.prop('type')).toEqual('password');
})

it('check the type of New Password', () => {
  const comp = shallow(<Change />);
  const input = comp.find('input[id="pwdnew"]');

  expect(input).toHaveLength(1);

  expect(input.prop('type')).toEqual('password');
})

it('check the type of Repeat Password', () => {
  const comp = shallow(<Change />);
  const input = comp.find('input[id="pwdrepeat"]');

  expect(input).toHaveLength(1);

  expect(input.prop('type')).toEqual('password');
})


//checking if fields are taking the input
it('checking for password', () => {

  const wrapper = shallow(<Change />);
  const input = wrapper.find('input[id="pwdold"]');
  input.simulate('onChange', {
    target: {

      name: "oldPassword",

      value: sampledata.oldPassword
    }

  })
  expect(wrapper.state().oldPassword).toEqual(sampledata.oldPassword);

})




it('calls onSubmit function when form is submitted', () => {

  const validate = jest.fn();

  const wrapper = mount(<form onSubmit={validate} />);

  const form = wrapper.find('form');

  form.simulate('submit');

  expect(validate).toHaveBeenCalledTimes(1);

});

