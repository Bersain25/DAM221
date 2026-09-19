const pedidosRealizados = [];

export function consultarProductos(menuRecibido) {
  console.log("PRODUCTOS DISPONIBLES");
  
  for (let i = 0; i < menuRecibido.length; i++) {
    const producto = menuRecibido[i];
    console.log(`[ID: ${producto.id}] - ${producto.nombre}`);
  }
}

export function crearPedido(idProducto, cantidad, menuRecibido) {
  const productoEncontrado = menuRecibido.find(item => item.id === idProducto);

  if (!productoEncontrado) {
    console.log(`El producto con ID ${idProducto} no se encuentra en el menú.`);
    return;
  }

  const nuevoPedido = {
    idPedido: pedidosRealizados.length + 1,
    producto: productoEncontrado.nombre,
    cantidad: cantidad
  };

  pedidosRealizados.push(nuevoPedido);
  console.log(`Pedido registrado: ${cantidad}x ${productoEncontrado.nombre}`);
}

export function listarPedidos() {
  console.log("MIS PEDIDOS");

  if (pedidosRealizados.length === 0) {
    console.log("No tienes ningún pedido registrado.");
    return;
  }

  for (let i = 0; i < pedidosRealizados.length; i++) {
    const pedido = pedidosRealizados[i];
    console.log(`Pedido #${pedido.idPedido}: ${pedido.cantidad} unidad(es) de ${pedido.producto}`);
  }
}