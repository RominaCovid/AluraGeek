//escribe en el archivo db.json
const listaProductos = () =>{
    return fetch("http://localhost:3000/producto")
    .then (respuesta => respuesta.json())
    .catch(error=>console.log("error"))
};
const crearProducto = (imagenUrl,cat,name,precio,desc)=>{
    return fetch("http://localhost:3000/producto",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({imagenUrl,cat,name,precio,desc})
        
    })
    .then (respuesta=>{
        if(respuesta.ok){
            return respuesta.body
            console.log(respuesta.body)
        }
        throw new Error ("No se pudo crear producto")
    });
    
};

export const productoServices={
    listaProductos,
    crearProducto,
};