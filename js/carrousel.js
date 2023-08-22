import { productos } from './todosProductos.js';

let copiaProductos = productos;
let carr1 = document.getElementById("carrousel1");
let carr2 = document.getElementById("carrousel2");

copiaProductos.sort((prod1,prod2) => {
    if (prod1.ventas > prod2.ventas ) return -1
    else if(prod1.ventas < prod2.ventas ) return 1
    else return 0
})

for (let i = 0; i < 6; i++) {
    carr1.innerHTML += `
        <div class="carousel-cell">
            <a href="producto.html?idProducto=${copiaProductos[i].id}">
                <div style="width: 40rem; color: white;">
                    <img src="${copiaProductos[i].fotos[3]}" alt="Card image cap">
                    <div class="card-body">
                        <p class="card-text" style="text-align: center;"> ${copiaProductos[i].nombre} </p>
                    </div>
                </div>
            </a>
        </div>
    `
}

for (let prod of copiaProductos) {
    if (prod.categoria == "Accesorio") {
        carr2.innerHTML += `
        <div class="carousel-cell">
            <a href="producto.html?idProducto=${prod.id}">
                <div class="card" style="width: 40rem; background-color: rgba(255, 0, 0, 0); color: white;">
                    <img class="card-img-top" src="${prod.fotos[3]}" alt="Card image cap">
                    <div class="card-body">
                        <p class="card-text" style="text-align: center;"> ${prod.nombre} </p>
                    </div>
                </div>
            </a>
        </div>
    `
    }
}







