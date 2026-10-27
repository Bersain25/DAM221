// Datos y funciones compartidas por caja, cliente y cocina.
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const BASE = __dirname;
const ARCHIVO_PRODUCTOS = path.join(BASE, 'inventario.json');
const ARCHIVO_PEDIDOS = path.join(BASE, 'pedidos.json');
const CARPETA_TICKETS = path.join(BASE, 'tickets');
const IVA_PORCENTAJE = 0.16;
const PRODUCTOS_INICIALES = [
  { id: 1, nombre: 'Agua natural', categoria: 'Bebidas', precio: 15, stock: 20 },
  { id: 2, nombre: 'Refresco', categoria: 'Bebidas', precio: 22, stock: 15 },
  { id: 3, nombre: 'Pastel de chocolate', categoria: 'Postres', precio: 45, stock: 8 },
  { id: 4, nombre: 'Galletas', categoria: 'Postres', precio: 18, stock: 12 },
  { id: 5, nombre: 'Sandwich', categoria: 'Comida', precio: 38, stock: 10 },
];

const interfaz = readline.createInterface({ input: process.stdin, output: process.stdout });
function preguntar(texto) {
  return new Promise(resolve => interfaz.question(texto, respuesta => resolve(respuesta.trim())));
}
function leerJson(archivo, predeterminado) {
  if (!fs.existsSync(archivo)) escribirJson(archivo, predeterminado);
  try { return JSON.parse(fs.readFileSync(archivo, 'utf8')); }
  catch (error) {
    console.log(`No se pudo leer ${path.basename(archivo)}; se usaran datos iniciales.`);
    return [...predeterminado];
  }
}
function escribirJson(archivo, datos) {
  fs.writeFileSync(archivo, JSON.stringify(datos, null, 2), 'utf8');
}
function cargarProductos() { return leerJson(ARCHIVO_PRODUCTOS, PRODUCTOS_INICIALES); }
function guardarProductos(productos) { escribirJson(ARCHIVO_PRODUCTOS, productos); }
function cargarPedidos() { return leerJson(ARCHIVO_PEDIDOS, []); }
function guardarPedidos(pedidos) { escribirJson(ARCHIVO_PEDIDOS, pedidos); }
async function pedirEntero(texto, minimo = 0) {
  while (true) {
    const valor = Number(await preguntar(texto));
    if (Number.isInteger(valor) && valor >= minimo) return valor;
    console.log(`Escribe un numero entero igual o mayor que ${minimo}.`);
  }
}
async function pedirDinero(texto, minimo = 0) {
  while (true) {
    const valor = Number((await preguntar(texto)).replace(',', '.'));
    if (Number.isFinite(valor) && valor >= minimo) return Math.round((valor + Number.EPSILON) * 100) / 100;
    console.log(`Escribe una cantidad valida igual o mayor que $${minimo.toFixed(2)}.`);
  }
}
function mostrarProductos(productos) {
  if (!productos.length) { console.log('No hay productos para mostrar.'); return; }
  console.log('\nID   PRODUCTO                  CATEGORIA          PRECIO    STOCK');
  console.log('-'.repeat(68));
  productos.forEach(p => console.log(
    `${String(p.id).padEnd(5)}${p.nombre.slice(0, 24).padEnd(25)}${p.categoria.slice(0, 14).padEnd(15)}$${p.precio.toFixed(2).padStart(9)}${String(p.stock).padStart(8)}`
  ));
}
function generarTicket(pedido) {
  fs.mkdirSync(CARPETA_TICKETS, { recursive: true });
  const archivo = path.join(CARPETA_TICKETS, `ticket-${pedido.folio}.txt`);
  const filas = ['='.repeat(44), '             TICKET DE VENTA', '              Tienda escolar', '='.repeat(44),
    `Folio: ${pedido.folio}`, `Fecha: ${pedido.fecha}`, `Cliente: ${pedido.cliente}`,
    '-'.repeat(44), 'Producto                  Cant.    Importe', '-'.repeat(44)];
  pedido.productos.forEach(item => filas.push(
    `${item.nombre.slice(0, 24).padEnd(24)}${String(item.cantidad).padStart(5)}    $${item.importe.toFixed(2).padStart(8)}`));
  filas.push('-'.repeat(44), `Subtotal:                       $${pedido.subtotal.toFixed(2).padStart(8)}`,
    `IVA (16%):                       $${pedido.iva.toFixed(2).padStart(8)}`,
    `TOTAL:                           $${pedido.total.toFixed(2).padStart(8)}`,
    `Pago recibido:                   $${pedido.pago.toFixed(2).padStart(8)}`,
    `Cambio:                          $${pedido.cambio.toFixed(2).padStart(8)}`,
    `Estado del pedido: ${pedido.estado}`, '='.repeat(44), '          Gracias por su compra', '='.repeat(44));
  const contenido = filas.join('\n');
  fs.writeFileSync(archivo, contenido, 'utf8');
  return { archivo, contenido };
}

module.exports = { preguntar, interfaz, IVA_PORCENTAJE, cargarProductos, guardarProductos,
  cargarPedidos, guardarPedidos, pedirEntero, pedirDinero, mostrarProductos,
  generarTicket, escribirJson };
