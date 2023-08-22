import { productos } from "./todosProductos.js";

let botonAnadir = document.getElementById("anadirProd");

let barraBusqueda = window.location.search;
let parametros = new URLSearchParams(barraBusqueda);
let idP = parametros.get("idProducto");
const toastLiveExampleA = document.getElementById('liveToastA');
const toastLiveExampleQ = document.getElementById('liveToastQ');

function anadirProducto (id) {
    let carrito = JSON.parse(localStorage.getItem("carrito"));

    let producto = productos.filter(pr => pr.id == id);

    if (Object.hasOwn(carrito, id))
    {
        carrito[id] ++;

        if (carrito[id] > producto[0].nExistencias)
        {
            carrito[id] --;
            document.getElementById("txtoast").innerHTML = "No queda más stock!";
            document.getElementById("txtoast").innerHTML += '<button type="button" class="btn-close float-end" data-bs-dismiss="toast" aria-label="Close"></button>';
            const toast = new bootstrap.Toast(toastLiveExampleQ);
            toast.show();
        }
        else {
            const toast = new bootstrap.Toast(toastLiveExampleA);
            toast.show();
        }
    }
    else 
    {
        carrito[id] = 1;
        const toast = new bootstrap.Toast(toastLiveExampleA);
        toast.show();
    }

    localStorage.setItem("carrito",JSON.stringify(carrito));

    

}

function quitarProducto (id) {
    let carrito = JSON.parse(localStorage.getItem("carrito"));

    carrito[id] --;

    if (carrito[id] < 1)
    {
        delete carrito[id];

    }

    document.getElementById("txtoast").innerHTML = "Producto eliminado correctamente!";
    document.getElementById("txtoast").innerHTML += '<button type="button" class="btn-close float-end" data-bs-dismiss="toast" aria-label="Close"></button>';
    const toast = new bootstrap.Toast(toastLiveExampleQ)
    toast.show()

    localStorage.setItem("carrito",JSON.stringify(carrito));
    
}

if(botonAnadir)
{
    botonAnadir.addEventListener("click", (event) => {
        event.preventDefault();
    
        anadirProducto(idP);

        
    });    
}


let precioTotal = 0;
let contenido = document.getElementById("productos");

function mostrarCarrito ()
{
    precioTotal = 0;
    contenido.innerHTML = "";
    for (let productoCarrito in JSON.parse(localStorage.getItem("carrito")))
    {
        let numProductos = JSON.parse(localStorage.getItem("carrito"))[productoCarrito];
        let producto = productos.filter(p => p.id == productoCarrito);
        let precioConIva = producto[0].precio * 1.21;

        contenido.innerHTML += `
        <div class="producto">
        <div class="divProducto"> <a href="producto.html?idProducto=${producto[0].id}"><img class="fotoProducto" src="${producto[0].fotos[3]}"></div></a> <br>
        <p>${producto[0].nombre} <br> Precio final: ${Number(precioConIva.toFixed(2))}€ <br> Unidades: ${numProductos} <br>
        <button type="button" data-id-producto="${+ producto[0].id}" data-tipo="suma" class="btn btn-light btn-lg">Añadir</button>
        <button type="button" data-id-producto="${+ producto[0].id}" data-tipo="resta" class="btn btn-light btn-lg">Quitar</button></p> </div>
        `;
        precioTotal += Number(precioConIva.toFixed(2)) * numProductos;
    }

    document.getElementById("totalCarrito").innerHTML = "Carrito Total : " + Number(precioTotal.toFixed(2)) + " €";
}

mostrarCarrito();

document.addEventListener ("click", (evento) => {
    if(evento.target.tagName === "BUTTON" && evento.target.dataset.tipo === "suma")
    {
        anadirProducto (evento.target.dataset.idProducto);
        mostrarCarrito();

    }

    if(evento.target.tagName === "BUTTON" && evento.target.dataset.tipo === "resta")
    {
        quitarProducto (evento.target.dataset.idProducto);
        mostrarCarrito();
    }
})


