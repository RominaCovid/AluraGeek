import { productoServices } from "../services/producto-servicio.js";

const formulario = document.querySelector("[data-form]");
const mail = document.querySelector("[data-email]").value;
const contrasenia = document.querySelector("[data-contrasenia]").value;
const bth = document.querySelector("[data-btn]");

formulario.addEventListener("submit", (evento)=>{
    evento.defaultPrevented();
    productoServices.validarUsuario()
     .then ((respuesta)=>{
        respuesta.forEach((element) => {
            if((element.email === mail) && (element.contrasenia === contrasenia)){
                bth.disabled = false;
            };
        }); 
      })
     .catch (error => console.log("error"));
})



    
    


