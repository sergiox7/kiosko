sessionStorage.removeItem('idmaestro');
function login(){
    var correo = document.getElementById('correo').value
    var password = document.getElementById('pass').value
    $.ajax({
        url:   'https://kioskouteq.azurewebsites.net/api/profesores',
        type:  'post',
        beforeSend: function () {
                $("#boton").html("Procesando, espere por favor...");
        },
        success:  function (response) {
            $("#resultado").html("Notificaciones");
                console.log(response)
                response.map((usuario,index)=>{
                    if(usuario.correo == correo && usuario.password == password){
                        sessionStorage.setItem('idmaestro', usuario.id);
                        location.href ="https://kioskouteq.azurewebsites.net/profesorKiosko.html";
                    }
                })
        },
        error : function(xhr, status) {
            $("#resultado").html("Hubo un erro vuelve a intentar");
        },
        
    });
}