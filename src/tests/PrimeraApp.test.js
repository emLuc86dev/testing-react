import "@testing-library/jest-dom";
import {render} from '@testing-library/react'
import PrimeraApp from "../PrimeraApp";
 
describe("Testing PrimeraApp", () => {
  test("should return saludo:string", () => {
    const greeting = `Hi, I'm Emilio`;

    const wrapper = render(<PrimeraApp saludo="" />)

    expect(wrapper.getByText(saludo)).toBeInTheDocument(greeting)
  });
});
