// Menu principal: selecciona el modulo que quieres utilizar.
const readline = require('readline');
const interfaz = readline.createInterface({ input: process.stdin, output: process.stdout });
const preguntar = texto => new Promise(resolve => interfaz.question(texto, respuesta => resolve(respuesta.trim())));

async function main() {
  while (true) {
    console.log('\n====================================\n SISTEMA DE VENTAS DE TIENDA\n====================================');
    console.log('1. Caja\n2. Cliente\n3. Cocina e inventario\n0. Salir');
    const opcion = await preguntar('Selecciona un modulo: ');
    if (opcion === '1') await require('./caja').menu();
    else if (opcion === '2') await require('./cliente').menu();
    else if (opcion === '3') await require('./cocina').menu();
    else if (opcion === '0') { console.log('Hasta luego.'); break; }
    else console.log('Opcion no valida.');
  }
}

main().catch(error => console.error('Ocurrio un error:', error.message)).finally(() => interfaz.close());
