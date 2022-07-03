import React from "react";
// import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import CounterApp from "../CounterApp";

describe("Testing <CounterApp />", () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("should return <CounterApp /> correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should return value in <CounterApp /> ", () => {
    const wrapper = shallow(<CounterApp value={12} />);
    const value = wrapper.find("h2").text();

    expect(value.trim()).toBe("12");
  });

  test("onClick event button +1 >= 10", () => {
    const firstButton = wrapper.find("button").at(0).simulate("click");
    const value = +wrapper.find("h2").text().trim();
    expect(value >= 10).toBe(true);
  });
  test("onClick event button reset ", () => {
    const wrapper = shallow(<CounterApp value={10} />);
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(1).simulate("click");
    const value = +wrapper.find("h2").text().trim();
    expect(value == 10).toBe(true);
  });

  test("onClick event button -1 <= 10", () => {
    const firstButton = wrapper.find("button").at(2).simulate("click");
    const value = +wrapper.find("h2").text().trim();
    expect(value < 10).toBe(true);
  });
});
