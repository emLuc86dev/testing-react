import "@testing-library/jest-dom";
import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe("Test for  08-imp-exp", () => {
  test("it shoud return a hereo by id ", () => {
    const heroesT = (id) => heroes.find((item) => item.id === id);
    for (let index = 0; index < heroes.length; index++) {
        // console.log(getHeroeById(index + 1));
      expect(getHeroeById(index + 1)).toEqual(heroesT(index + 1));
    }
  });

  test("shoud return undefined if hereo's id no exist ", () => {
    const heroesT = (id) => heroes.find((item) => item.id === id);
    for (let index = 0; index < heroes.length; index++) {
      expect(getHeroeById(index +10 )).toBe(undefined);
    }
  });


  test('shoud return total of Marvel owner (=2)', () => { 
    
    const owners = (owner) => heroes.filter(item => item.owner === owner)
    console.log(owners("Marvel"));

    expect(getHeroesByOwner("Marvel").length).toEqual(2)

   })

  test('shoud return list of heroes DC', () => { 
    
    const owners = (owner) => heroes.filter(item => item.owner === owner)
    console.log(owners("Marvel"));

    expect(getHeroesByOwner("DC")).toEqual(owners("DC"))

   })
});
