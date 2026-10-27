const d = require('./datos');

// Helper para esperar el flujo de setTimeout de cliente3.js antes de mostrar de nuevo el menú
const esperar = ms => new Promise(resolve => setTimeout(resolve, ms));

async function menu() {
  // Cargamos cliente3.js usando la importación dinámica (compatible con export)
  const cliente3 = await import('./cliente3.js');

  while (true) {
    const productos = d.cargarProductos();

    console.log('\n========== MODULO CLIENTE ==========');
    console.log('1. Consultar productos');
    console.log('2. Mostrar productos disponibles');
    console.log('3. Ver promociones');
    console.log('4. Crear pedido');
    console.log('5. Listar mis pedidos');
    console.log('6. Seguimiento asíncrono de pedido (setTimeout)');
    console.log('0. Volver al menú principal');

    const opcion = await d.preguntar('Selecciona una opción: ');

    if (opcion === '1') {
      cliente3.consultarProductos(productos);
    } 
    else if (opcion === '2') {
      cliente3.mostrarProductosDisponibles(productos);
    } 
    else if (opcion === '3') {
      const descuento = await d.pedirEntero('Porcentaje de descuento a aplicar: ', 0);
      cliente3.mostrarPromociones(productos, descuento);
    } 
    else if (opcion === '4') {
      cliente3.mostrarProductosDisponibles(productos);
      const id = await d.pedirEntero('Ingresa el ID del producto: ', 1);
      const cantidad = await d.pedirEntero('Ingresa la cantidad: ', 1);
      cliente3.crearPedido(id, cantidad, productos);
    } 
    else if (opcion === '5') {
      cliente3.listarPedidos();
    } 
    else if (opcion === '6') {
      const idPedido = await d.pedirEntero('Ingresa el # de tu pedido para seguimiento: ', 1);
      
      console.log('1. Pedido entregado');
      console.log('2. Pedido cancelado');
      const eleccion = await d.preguntar('Selecciona el estado final provisto por el sistema: ');
      const estadoFinal = (eleccion === '2') ? 'Pedido cancelado' : 'Pedido entregado';

      cliente3.simularEstadoPedido(idPedido, estadoFinal);
      
      // Mantiene la terminal en espera durante los 6 segundos de la simulación asíncrona
      await esperar(6500);
    } 
    else if (opcion === '0') {
      break;
    } 
    else {
      console.log('Opción no válida.');
    }
  }
}

module.exports = { menu };