import "@testing-library/jest-dom";
import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from "../../data/heroes";

describe("Testing 09-promesas", () => {
  test("should return an asysnc heroe", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual(heroes[0]);
      done();
    });
  });

  test(`should return an error if heroe's id doesn't exist`, (done) => {
     const noHeroe = async() => {
        const id = 1
        try {
            const heroe = await getHeroeByIdAsync(id)
            console.log('heroe found', heroe);
        } catch (error) {
            expect(error).toBe('No se pudo encontrar el héroe')
            console.log(error);
            done()
        }
     }
     noHeroe()
  });
});
