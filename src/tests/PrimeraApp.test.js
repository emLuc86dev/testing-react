import React from "react";
import "@testing-library/jest-dom";
import PrimeraApp from "../PrimeraApp";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("Testing PrimeraApp", () => {
  test("should return <PrimeraApp /> ", () => {
    const greeting = `Hi, I'm Emilio`;

    const wrapper = shallow(<PrimeraApp saludo={greeting} />);

    // expect(wrapper).toMatchSnapshot()
    expect(wrapper).toMatchSnapshot();
  });

  test("should show subtitle sent by props", () => {
    const subtitle = "Subtitle sent by props";
    const greeting = `Hi, I'm Emilio`;
    const wrapper = shallow(
      <PrimeraApp saludo={greeting} subtitulo={subtitle} />
    );

    // expect(toJson(wrapper)).toMatchSnapshot();

    const textP = wrapper.find("p").text();
    expect(textP).toEqual(subtitle);

  });
});
