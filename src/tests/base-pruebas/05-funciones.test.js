import "@testing-library/jest-dom";
import * as user from "../../base-pruebas/05-funciones";

describe("Prueba del 05-funciones.js", () => {
  test("getUser debe retornar un objeto", () => {
    const userT = { uid: "ABC123", username: "El_Papi1502" };

    expect(user.getUser()).toEqual(userT);
  });

  test('getUsuarioActivo debe retornar un objeto', () => { 
    const nombre = "Emilio"
    const usuarioActivoT = {
        uid: 'ABC567',
        username: nombre
    }
    expect(user.getUsuarioActivo(nombre)).toEqual(usuarioActivoT)
   })

});
