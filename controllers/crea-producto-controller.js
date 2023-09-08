import { productoServices } from "../services/producto-servicio.js";
const form = document.querySelector(`[data-form]`);
form.addEventListener("submit",e =>{
    e.preventDefault();
    const url = document.querySelector(`[data-imagen]`).value ;
    const cat = document.querySelector(`[data-cat]`).value ;
    const name = document.querySelector(`[data-name]`).value ;
    const precio = document.querySelector(`[data-precio]`).value ;
    const desc = document.querySelector(`[data-desc]`).value ;

    productoServices.crearProducto(url,cat,name,precio,desc)
    .then ((respuesta)=>{window.location.href = `../screems/index.html`});
 
});