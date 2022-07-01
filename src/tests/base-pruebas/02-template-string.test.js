
import '@testing-library/jest-dom'
import {getSaludo} from '../../base-pruebas/02-template-string'

describe("Prueba del 02-template-string.test", () => {
    const nombre = 'Emilio'
    test(`getSaludo debe retornar Hola ${nombre}`, () => { 
           

            expect(getSaludo(nombre)).toBe(`Hola ${nombre}`)
     })
})