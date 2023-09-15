import { productoServices } from "../services/producto-servicio.js";
const url = new URL(window.location);
const id = url.searchParams.get("id");

const formulario = document.querySelector("[data-form]")
const opterDatosProd = ()=>{   

    const urlPrd = document.querySelector(`[data-imagen]`) ;
    const cat = document.querySelector(`[data-cat]`);
    const name = document.querySelector(`[data-name]`);
    const precio = document.querySelector(`[data-precio]`);
    const desc = document.querySelector(`[data-desc]`);

    productoServices.editarProducto(id)
      .then((data)=>{
        urlPrd.value = data.imagenUrl;
        cat.value = data.cat;
        name.value = data.name;
        precio.value = data.precio;
        desc.value = data.desc;
      });

};

opterDatosProd();

formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    const urlPrd = document.querySelector(`[data-imagen]`).value ;
    const cat = document.querySelector(`[data-cat]`).value;
    const name = document.querySelector(`[data-name]`).value;
    const precio = document.querySelector(`[data-precio]`).value;
    const desc = document.querySelector(`[data-desc]`).value;

    productoServices.actualizarProducto(urlPrd,cat,name,precio,desc,id)
      .then (()=>{
        window.location.href = "../screems/edicion-exitosa.html";
      });
});
