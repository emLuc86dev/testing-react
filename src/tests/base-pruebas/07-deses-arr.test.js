import '@testing-library/jest-dom'

import {retornaArreglo} from '../../base-pruebas/07-deses-arr'
 
describe('Pruebas de 07-deses-arr', () => { 

    test('retorna un string y un numero', () => { 
         
        const [letras, numero] = retornaArreglo()
        expect(letras).toEqual('ABC')
        expect(numero).toEqual(1234)
     })
 })