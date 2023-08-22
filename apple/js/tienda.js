import { productos } from "./todosProductos.js";
let copiaProductos = productos;
let contenido = document.getElementById("productos");

const formularioBusqueda = document.getElementById("formBuscador");

const botonSiguiente = document.getElementById("botonSiguiente");
const botonAnterior = document.getElementById("botonAnterior");

const productosPorPagina = 6;

let maxPaginas = 0; 
let paginaActual = 1;

formularioBusqueda.addEventListener("submit", (e) => {
    e.preventDefault();
    actualizarContenido(1);
})

function actualizarContenido(pagina) {
    copiaProductos = productos;

    let valor = document.getElementById("textBuscador").value;

    let selectFiltrar = document.getElementById("selectFiltrar");
    let valorFiltrar = selectFiltrar.options[selectFiltrar.selectedIndex].value;

    let selectPrecio = document.getElementById("selectPrecio");
    let valorPrecio = selectPrecio.options[selectPrecio.selectedIndex].value;

    let selectProducto = document.getElementById("selectProducto");
    let valorProducto = selectProducto.options[selectProducto.selectedIndex].value;

    let selectColor = document.getElementById("selectColor");
    let valorColor = selectColor.options[selectColor.selectedIndex].value;

    if (valorFiltrar == 2) {
        copiaProductos = copiaProductos.filter(p => p.nExistencias < 8);
    } else if (valorFiltrar == 3) {
        copiaProductos = copiaProductos.filter(p => p.ventas > 3000);
    }

    if (valor != "") {
        copiaProductos = copiaProductos.filter(p => {
            if (p.nombre.includes(valor) || p.categoria.includes(valor) || p.color.includes(valor)) return p;
        })
    }

    switch (+valorPrecio) {
        case 1:
            break;

        case 2:
            copiaProductos = copiaProductos.filter(function (p) {
                return (p.precio > 0 && p.precio < 500);
            })
            break;
        case 3:
            copiaProductos = copiaProductos.filter((p) => {
                if (p.precio >= 500 && p.precio < 800) return p;
            })
            break;
        case 4: 
            copiaProductos = copiaProductos.filter((p) => {
                if (p.precio >= 800 && p.precio < 1200) return p;
            })
            break;
        case 5: 
            copiaProductos = copiaProductos.filter((p) => {
                if (p.precio > 1200) return p;
            })
            break;
    }
    
    if (valorProducto != 1) {
        copiaProductos = copiaProductos.filter(p => p.categoria === valorProducto);
    }
    
    if (valorColor != 1) {
        copiaProductos = copiaProductos.filter(p => p.color === valorColor);
    }

    contenido.innerHTML = "";
    
    const indiceInicial = (pagina - 1) * 6;
    const indiceFinal = pagina * 6;
    maxPaginas = Math.ceil(copiaProductos.length / 6);
    copiaProductos = copiaProductos.slice(indiceInicial, indiceFinal);

    if (maxPaginas <= 1)
    {
        botonAnterior.hidden = true;
        botonSiguiente.hidden = true;
    }
    else
    {
        botonAnterior.hidden = false;
        botonSiguiente.hidden = false;
    }

    if(copiaProductos.length == 0)
    {
        contenido.innerHTML = "No se encontraron productos con estas características...";
    }

    for (let prod of copiaProductos) {
        contenido.innerHTML += `
        <a class='producto' href='producto.html?idProducto=${prod.id}'>
        <div class='divProducto'> <img class='fotoProducto' src="${prod.fotos[0]}"></div> <br>
        ${prod.nombre} <br>
        ${prod.precio} € <br>
        </a>
        `;
    }
}

actualizarContenido(1);

botonSiguiente.addEventListener('click', () => {
    paginaActual++;

    if (paginaActual > maxPaginas)
    {
        paginaActual = 1;
    }

    actualizarContenido(paginaActual);
});

botonAnterior.addEventListener('click', () => {
    paginaActual--;

    if (paginaActual < 1) 
    {
        paginaActual = maxPaginas;
    }

    actualizarContenido(paginaActual);
});



selectFiltrar.addEventListener("change", () => actualizarContenido(1));
selectPrecio.addEventListener("change", () => actualizarContenido(1));
selectProducto.addEventListener("change", () => actualizarContenido(1));
selectColor.addEventListener("change", () => actualizarContenido(1));