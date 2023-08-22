import { productos } from "./todosProductos.js";
let nombreProducto = document.getElementById('nombreProducto');
let precio = document.getElementById('precio');
let caracteristicasEscribir = document.getElementById('caracteristicasEscribir');
let imgCarr1 = document.getElementById('carr1');
let imgCarr2 = document.getElementById('carr2');
let imgCarr3 = document.getElementById('carr3');

let barraBusqueda = window.location.search;
let parametros = new URLSearchParams(barraBusqueda);
let idProducto = parametros.get('idProducto');

const prod = productos.find(producto => producto.id == idProducto);

imgCarr1.src = prod.fotos[0];
imgCarr2.src = prod.fotos[1];
imgCarr3.src = prod.fotos[2];
nombreProducto.innerHTML = prod.nombre;
precio.innerHTML = prod.precio + " €";

switch (prod.categoria) {
    case "Movil":
        caracteristicasEscribir.innerHTML += `
        Almacenamiento: ${prod.almacenamiento} <br>
        Color: ${prod.color} <br>
        Versión S.O: ${prod.so} <br>
        Cámara: ${prod.camara} <br>
        Stock: ${prod.nExistencias} <br>
        `;
        break;

    case "Tablet":
        caracteristicasEscribir.innerHTML += `
        Almacenamiento: ${prod.almacenamiento} <br>
        Color: ${prod.color} <br>
        Versión S.O: ${prod.so} <br>
        Cámara: ${prod.camara} <br>
        Apple Pencil: ${prod.ApplePencil} <br>
        Stock: ${prod.nExistencias} <br>
        `;
        break;

    case "Portatil":
        caracteristicasEscribir.innerHTML += `
        Almacenamiento: ${prod.almacenamiento} <br>
        Color: ${prod.color} <br>
        Nucleos CPU: ${prod.nucleosCpu} <br>
        Nucleos GPU: ${prod.nucleosGpu} <br>
        Ram: ${prod.ram} <br>
        Autonomía: ${prod.autonomia} <br>
        Stock: ${prod.nExistencias} <br>
        `;
        break;

    case "Pc":
        caracteristicasEscribir.innerHTML += `
        Almacenamiento: ${prod.almacenamiento} <br>
        Color: ${prod.color} <br>
        Nucleos CPU: ${prod.nucleosCpu} <br>
        Nucleos GPU: ${prod.nucleosGpu} <br>
        Ram: ${prod.ram} <br>
        Stock: ${prod.nExistencias} <br>
        `;
        break;

    case "Audio":
        caracteristicasEscribir.innerHTML += `
        Color: ${prod.color} <br>
        Autonomía: ${prod.autonomia} <br>
        Estuche: ${prod.estuche} <br>
        Stock: ${prod.nExistencias} <br>
        `;
        break;

    case "Reloj":
        caracteristicasEscribir.innerHTML += `
        Color: ${prod.color} <br>
        Autonomía: ${prod.autonomia} <br>
        Stock: ${prod.nExistencias} <br>
        `;
        break;

    case "Accesorio":
        caracteristicasEscribir.innerHTML += `
        Color: ${prod.color} <br>
        Stock: ${prod.nExistencias} <br>
        `;
        break;
    

};






