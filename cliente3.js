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
    console.log(`El producto con ID ${idProducto} no se encuentra en el menu.`);
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
    console.log("No tienes ningun pedido registrado.");
    return;
  }

  for (let i = 0; i < pedidosRealizados.length; i++) {
    const pedido = pedidosRealizados[i];
    console.log(`Pedido #${pedido.idPedido}: ${pedido.cantidad} unidad(es) de ${pedido.producto}`);
  }
}

export function obtenerMenuDinamico(menuRecibido) {
  return menuRecibido.map(producto => {
    return {
      id: producto.id,
      nombreFormateado: `Producto #${producto.id}: ${producto.nombre.toUpperCase()}`,
      precio: producto.precio || 0
    };
  });
}

export function mostrarProductosDisponibles(menuRecibido) {
  console.log("LISTA DE PRODUCTOS DISPONIBLES");
  menuRecibido.forEach(producto => {
    console.log(`- [ID: ${producto.id}] ${producto.nombre} | Precio: $${producto.precio || 0}`);
  });
}

export function mostrarPromociones(menuRecibido, porcentajeDescuento = 10) {
  console.log(`PROMOCIONES DEL DÍA (${porcentajeDescuento}% DE DESCUENTO)`);
  
  const promociones = menuRecibido.map(producto => {
    const precioBase = producto.precio || 100;
    const precioConDescuento = precioBase - (precioBase * (porcentajeDescuento / 100));
    return {
      nombre: producto.nombre,
      precioOriginal: precioBase,
      precioOferta: precioConDescuento.toFixed(2)
    };
  });

  promociones.forEach(promo => {
    console.log(`¡OFERTA! ${promo.nombre} - De $${promo.precioOriginal} a solo $${promo.precioOferta}`);
  });
}
export function simularEstadoPedido(idPedido, estadoFinal = "Pedido entregado") {
  const pedido = pedidosRealizados.find(p => p.idPedido === idPedido);

  if (!pedido) {
    console.log(`No se encontro el pedido #${idPedido} para hacer el seguimiento.`);
    return;
  }

  console.log(`INICIANDO SEGUIMIENTO DEL PEDIDO #${pedido.idPedido} (${pedido.producto})`);
  
  console.log(`Pedido #${pedido.idPedido}: Pedido recibido`);

  setTimeout(() => {
    console.log(`Pedido #${pedido.idPedido}: Preparando......`);
  }, 2000);

  setTimeout(() => {
    console.log(`Pedido #${pedido.idPedido}: Empacando......`);
  }, 4000);

  setTimeout(() => {
    console.log(`Pedido #${pedido.idPedido}: ${estadoFinal}`);
  }, 6000);
}