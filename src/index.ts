import * as readline from 'readline/promises';
import { calculateSubtotal, calculateIVA, calculateTotal } from './calculations.js';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const misPrecios: number[] = [];

async function iniciar() {
    while (true) {
        console.log('\nMI CAJA');
        console.log('1. Poner precio');
        console.log('2. Ver cuenta total');
        console.log('3. Salir');
        
        const opcion = await rl.question('Elige un numero: ');

        if (opcion === '1') {
            const respuesta = await rl.question('¿Cuánto cuesta?: ');
            const dinero = parseFloat(respuesta);
            
            if (dinero > 0) {
                misPrecios.push(dinero);
                console.log('¡Guardado!');
            } else {
                console.log('Precio no valido');
            }

        } else if (opcion === '2') {
            const suma = calculateSubtotal(misPrecios);
            const impuesto = calculateIVA(suma, 0.12);
            const final = calculateTotal(suma, impuesto);

            console.log('\nTU CUENTA');
            console.log('Suma total: Q' + suma.toFixed(2));
            console.log('Impuesto (12%): Q' + impuesto.toFixed(2));
            console.log('Total a pagar: Q' + final.toFixed(2));

        } else if (opcion === '3') {
            console.log('Adiós!');
            rl.close();
            break;
        } else {
            console.log('intenta otra vez.');
        }
    }
}

iniciar();