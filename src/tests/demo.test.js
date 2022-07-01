describe("Pruebas del archivo demo.test", () => {
  test("deben de ser iguales los strings", () => {
    const str1 = "Hola Mundo";
    const str2 = `Hola Mundo`;

    expect(str1).toBe(str2);
  });
});
