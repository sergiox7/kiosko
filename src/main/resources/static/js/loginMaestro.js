sessionStorage.removeItem('idmaestro');
function login(){
    var correo = document.getElementById('correo').value
    var password = document.getElementById('pass').value
    $.ajax({
        url:   'http://localhost:8080/api/profesores',
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
                        location.href ="http://localhost:8080/profesorKiosko.html";
                    }
                })
        },
        error : function(xhr, status) {
            $("#resultado").html("Hubo un erro vuelve a intentar");
        },
        
    });
}