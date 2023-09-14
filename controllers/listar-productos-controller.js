import { productoServices } from "../services/producto-servicio.js";

const nuevoProducto = (imagenUrl,name,precio,id) => {
    const card = document.createElement("div");
    const contenido = `
                        <div class="card_producto_mostrado">                         
                        <img  width="12px" height="12px" src="../img/edit.svg" alt="editar">
                        <img  width="12px" height="12px" src="../img/eliminate.png" alt="editar">                          
                        <img src="${imagenUrl}" alt="imagen">
                        <h5 class="card_font">${name}</h5>
                        <p class="card_font">${precio}</p>             
                      
                        </div>    
                       `;
    card.innerHTML = contenido;    
    return card;                  
};

const productos = document.querySelector("[data-producto]")
const render = async () =>{
                         try{
                            const listaProductos = await productoServices.listaProductos();
                            listaProductos.forEach(e => {
                               productos.appendChild(nuevoProducto(e.imagenUrl,e.name,e.precio,e.id));
                              
                             }                                                     
                                                                
                            );
                          }catch (error){console.log(error);}
                              
};
render();