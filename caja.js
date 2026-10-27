// Modulo de caja: captura de pedidos, cobro, cancelacion y ticket.
const d = require('./datos');

async function nuevoPedido() {
  const productos = d.cargarProductos();
  const pedidos = d.cargarPedidos();
  const cliente = (await d.preguntar('Nombre del cliente (Enter = Mostrador): ')) || 'Mostrador';
  const carrito = new Map();
  while (true) {
    d.mostrarProductos(productos);
    console.log('Agrega el ID de un producto; escribe 0 para terminar.');
    const id = await d.pedirEntero('ID: ');
    if (id === 0) break;
    const producto = productos.find(p => p.id === id);
    if (!producto) { console.log('No existe ese producto.'); continue; }
    const disponible = producto.stock - (carrito.get(id) || 0);
    if (disponible <= 0) { console.log('No quedan unidades disponibles para agregar.'); continue; }
    const cantidad = await d.pedirEntero(`Cantidad (disponible ${disponible}): `, 1);
    if (cantidad > disponible) { console.log('No hay suficiente inventario.'); continue; }
    carrito.set(id, (carrito.get(id) || 0) + cantidad);
    console.log('Producto agregado.');
  }
  if (!carrito.size) { console.log('Pedido vacio. No se genero venta.'); return; }

  const detalle = [...carrito].map(([id, cantidad]) => {
    const producto = productos.find(p => p.id === id);
    return { productoId: id, nombre: producto.nombre, cantidad, precio: producto.precio,
      importe: Math.round(producto.precio * cantidad * 100) / 100 };
  });
  const subtotal = Math.round(detalle.reduce((suma, item) => suma + item.importe, 0) * 100) / 100;
  const iva = Math.round(subtotal * d.IVA_PORCENTAJE * 100) / 100;
  const total = Math.round((subtotal + iva) * 100) / 100;
  console.log(`\nSubtotal: $${subtotal.toFixed(2)} | IVA: $${iva.toFixed(2)} | TOTAL: $${total.toFixed(2)}`);
  const pago = await d.pedirDinero('Pago recibido: $', total);
  const ahora = new Date();
  const folio = `${ahora.toISOString().replace(/[-:TZ.]/g, '').slice(0, 14)}-${String(ahora.getMilliseconds()).padStart(3, '0')}`;
  const pedido = { folio, fecha: ahora.toLocaleString('es-MX'), cliente, productos: detalle,
    subtotal, iva, total, pago, cambio: Math.round((pago - total) * 100) / 100, estado: 'Listo' };
  carrito.forEach((cantidad, id) => { productos.find(p => p.id === id).stock -= cantidad; });
  d.guardarProductos(productos);
  pedidos.push(pedido);
  d.guardarPedidos(pedidos);
  const ticket = d.generarTicket(pedido);
  console.log(`\n${ticket.contenido}\nTicket guardado en: ${ticket.archivo}`);
  console.log('El pedido aparece como LISTO en el modulo de cliente.');
}

async function cancelarPedido() {
  const pedidos = d.cargarPedidos();
  const listos = pedidos.filter(p => p.estado.toLowerCase() === 'listo');
  if (!listos.length) { console.log('No hay pedidos listos para cancelar.'); return; }
  listos.forEach(p => console.log(`Folio ${p.folio} | ${p.cliente} | $${p.total.toFixed(2)}`));
  const folio = await d.preguntar('Folio del pedido que deseas cancelar: ');
  const pedido = pedidos.find(p => p.folio === folio && p.estado === 'Listo');
  if (!pedido) { console.log('No se encontro un pedido listo con ese folio.'); return; }
  const productos = d.cargarProductos();
  pedido.productos.forEach(vendido => {
    const producto = productos.find(p => p.id === vendido.productoId);
    if (producto) producto.stock += vendido.cantidad;
  });
  pedido.estado = 'Cancelado';
  d.guardarProductos(productos);
  d.guardarPedidos(pedidos);
  d.generarTicket(pedido);
  console.log('Pedido cancelado. Se repusieron las existencias y se actualizo el ticket.');
}

async function menu() {
  while (true) {
    console.log('\n========== CAJA ==========\n1. Cobrar / crear pedido\n2. Cancelar pedido\n0. Salir');
    const opcion = await d.preguntar('Selecciona: ');
    if (opcion === '1') await nuevoPedido();
    else if (opcion === '2') await cancelarPedido();
    else if (opcion === '0') break;
    else console.log('Opcion no valida.');
  }
}

if (require.main === module) {
  menu().catch(error => console.error('Ocurrio un error:', error.message)).finally(() => d.interfaz.close());
}
module.exports = { menu };
