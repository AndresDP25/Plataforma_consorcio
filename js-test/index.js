
$(document).ready(function() {
    if(localStorage.getItem('usuarioActual') == undefined){
    imprimoFormulario();
    };
});

const imprimoFormulario = () => {
    formulario.innerHTML =
    
            `
            <div class="container mt-5 py-5">   
            <div class="container col-md-4 formulario">    
                <h1 class="tituloFormulario mt-5">Plataforma consorcio</h1>
                <h2 class="tituloFormulario mt-5">Ingrese sus datos:</h2>
                <form class="" id="formulario">
                    <label for="nombre"></label>
                    <input class="form-control" type="text" id="nombre"  placeholder="Nombre" required> 
                    <label for="contacto"></label>
                    <input class="form-control" type="text" id="contacto" placeholder="Contacto" required> 
                    <button class="btn btn-primary mt-4">Enviar formulario</button>
                </form>
                <div id="mensaje-validacion"></div>
            </div>
          </div>
                `  
                $('.btn-primary').click(function(e){
                    // console.log(e);
                    cargarUsuario(e);
                });      
                // onclick="cargarUsuario(event)
}