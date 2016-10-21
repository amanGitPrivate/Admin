import React from 'react';
import Login from './components/Login.jsx';
import shallow from './enzyme';

it('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  // const checkbox = shallow(
  //   <CheckboxWithLabel labelOn="On" labelOff="Off" />
  // );
  //
  // expect(checkbox.text()).toEqual('Off');
  //
  // checkbox.find('input').simulate('change');
  //
  // expect(checkbox.text()).toEqual('On');

  const wrapper = shallow(<Login/>);
  //
  //
  // expect(wrapper.contains(<div className="guestHouseLocation"/>)).to.equal(true);

});
