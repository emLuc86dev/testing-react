import "@testing-library/jest-dom";
import { getImagen } from "../../base-pruebas/11-async-await";

describe("Testing 11-async-await", () => {
  test("should return image url", async () => {
    const url = await getImagen();
    console.log(url);

    expect(url.includes('https://')).toBe(true)
  });
});
