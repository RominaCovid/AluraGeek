import { productoServices } from "../services/producto-servicio.js";

const nuevoProducto = (imagenUrl,name,precio,desc,id) => {
    const card = document.createElement("div");
    const contenido = `<div class="card_producto" 
                        <img arc="${imagenUrl}" alt="imagen">
                        <h5 class="card_name_producto">${name}</h5>
                        <p class="card_precio_producto">${precio}</p>
                        <p class="card_descripcion_producto">${desc}</p>
                        <a class="card_ver_producto" href="../screems/productos.html?id=${id}">Ver Producto</a> 
                        </div>`;
    card.innerHTML = contenido;  
    console.log(imagenUrl);
    return card;                  
};

const productos = document.querySelector("[data-palo-santo]");
const render = async () =>{
                          try{
                            const listaProductos = await productoServices.listaProductos();
                            listaProductos.forEach(e => {
                                productos.appendChild(
                                  nuevoProducto(e.imagenUrl,e.name,e.precio,e.desc,e.id));
                                
                            });
                          }catch (error){console.log(error);
                            }  
};
render();