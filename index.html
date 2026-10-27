<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Prueba PHP - cliente3.js</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 800px;
      margin: 20px auto;
      padding: 0 20px;
      background-color: #f4f4f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    .panel {
      background: white;
      padding: 15px;
      margin-bottom: 15px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    button {
      background-color: #3498db;
      color: white;
      border: none;
      padding: 8px 12px;
      margin: 5px 2px;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #2980b9;
    }
    label {
      display: inline-block;
      margin-right: 10px;
    }
    input, select {
      padding: 5px;
      margin-right: 10px;
    }
    #consola {
      background: #1e1e1e;
      color: #00ff66;
      font-family: monospace;
      padding: 15px;
      border-radius: 5px;
      min-height: 200px;
      white-space: pre-wrap;
      overflow-y: auto;
      max-height: 300px;
    }
    .php-info {
      background-color: #e8f4f8;
      border-left: 4px solid #3498db;
      padding: 10px;
      margin-bottom: 15px;
      font-size: 0.9em;
    }
  </style>
</head>
<body>

  <h1>Panel de Pruebas (PHP) - cliente3.js</h1>

  <div class="php-info">
    <strong>Servidor PHP activo:</strong> <?php echo "Página renderizada el " . date('d/m/Y') . " a las " . date('H:i:s'); ?>
  </div>

  <div class="panel">
    <h2>1. Menú y Productos</h2>
    <button id="btnConsultar">Consultar Productos</button>
    <button id="btnMostrarDisponibles">Mostrar Productos Disponibles</button>
    <button id="btnPromociones">Mostrar Promociones</button>
  </div>

  <div class="panel">
    <h2>2. Gestor de Pedidos</h2>
    <label>
      Producto ID:
      <input type="number" id="inputId" value="1" min="1" style="width: 50px;">
    </label>
    <label>
      Cantidad:
      <input type="number" id="inputCantidad" value="1" min="1" style="width: 50px;">
    </label>
    <button id="btnCrearPedido">Crear Pedido</button>
    <button id="btnListarPedidos">Listar Pedidos</button>
  </div>

  <div class="panel">
    <h2>3. Seguimiento Asíncrono (setTimeout)</h2>
    <label>
      ID del Pedido:
      <input type="number" id="idPedidoSeguimiento" value="1" min="1" style="width: 50px;">
    </label>
    <label>
      Estado Final Externo:
      <select id="selectEstadoFinal">
        <option value="Pedido entregado">Pedido entregado</option>
        <option value="Pedido cancelado">Pedido cancelado</option>
      </select>
    </label>
    <button id="btnSeguimiento">Simular Estado del Pedido</button>
  </div>

  <div class="panel">
    <h2>Salida de Consola</h2>
    <button id="btnLimpiar" style="background-color: #e74c3c;">Limpiar Consola</button>
    <div id="consola">--- Consola lista para mostrar resultados ---</div>
  </div>

  <script type="module">
    import {
      consultarProductos,
      crearPedido,
      listarPedidos,
      mostrarProductosDisponibles,
      mostrarPromociones,
      simularEstadoPedido
    } from './cliente3.js';

    // Menú de prueba
    const menuBase = [
      { id: 1, nombre: "Hamburguesa Doble", precio: 120 },
      { id: 2, nombre: "Pizza Pepperoni", precio: 180 },
      { id: 3, nombre: "Papas Fritas", precio: 50 },
      { id: 4, nombre: "Refresco 600ml", precio: 30 }
    ];

    // Redirigir console.log a la pantalla
    const consolaDiv = document.getElementById('consola');
    const logOriginal = console.log;

    console.log = function(...args) {
      logOriginal.apply(console, args);
      const texto = args.join(' ');
      consolaDiv.textContent += '\n' + texto;
      consolaDiv.scrollTop = consolaDiv.scrollHeight;
    };

    // Eventos
    document.getElementById('btnConsultar').addEventListener('click', () => {
      consultarProductos(menuBase);
    });

    document.getElementById('btnMostrarDisponibles').addEventListener('click', () => {
      mostrarProductosDisponibles(menuBase);
    });

    document.getElementById('btnPromociones').addEventListener('click', () => {
      mostrarPromociones(menuBase, 15);
    });

    document.getElementById('btnCrearPedido').addEventListener('click', () => {
      const id = parseInt(document.getElementById('inputId').value);
      const cantidad = parseInt(document.getElementById('inputCantidad').value);
      crearPedido(id, cantidad, menuBase);
    });

    document.getElementById('btnListarPedidos').addEventListener('click', () => {
      listarPedidos();
    });

    document.getElementById('btnSeguimiento').addEventListener('click', () => {
      const id = parseInt(document.getElementById('idPedidoSeguimiento').value);
      const estadoFinal = document.getElementById('selectEstadoFinal').value;
      simularEstadoPedido(id, estadoFinal);
    });

    document.getElementById('btnLimpiar').addEventListener('click', () => {
      consolaDiv.textContent = '--- Consola limpia ---';
    });
  </script>

</body>
</html>