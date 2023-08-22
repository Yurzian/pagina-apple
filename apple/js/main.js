import { productos } from "./todosProductos.js";
let nombreProducto = document.getElementById('nombreProducto');
let precio = document.getElementById('precio');
let caracteristicas = document.getElementById('caracteristicas');

let barraBusqueda = window.location.search;
let parametros = new URLSearchParams(barraBusqueda);
let idProducto = parametros.get('idProducto');

nombreProducto.innerHTML = productos.filter(producto => producto.id == idProducto).map(producto => producto.nombre);
precio.innerHTML = productos.filter(producto => producto.id == idProducto).map(producto => producto.precio);



