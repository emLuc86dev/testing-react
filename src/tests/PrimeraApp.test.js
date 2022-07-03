import React from "react";
import "@testing-library/jest-dom";
import PrimeraApp from "../PrimeraApp";
import {shallow} from 'enzyme'
 
describe("Testing PrimeraApp", () => {
  test("should return <PrimeraApp /> ", () => {
    const greeting = `Hi, I'm Emilio`;

    const wrapper = shallow(<PrimeraApp />)

    expect(wrapper).toMatchSnapshot()
  });
});
