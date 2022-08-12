sessionStorage.removeItem('id');
function login(){
    var correo = document.getElementById('correo').value
    var password = document.getElementById('pass').value
    $.ajax({
        url:   'http://localhost:8080/api/loginAlumno',
        type:  'post',
        beforeSend: function () {
                $("#boton").html("Procesando, espere por favor...");
        },
        success:  function (response) {
            $("#resultado").html("Notificaciones");
                console.log(response)
                response.map((usuario,index)=>{
                    if(usuario.correo == correo && usuario.password == password){
                        sessionStorage.setItem('id', usuario.matricula);
                        location.href ="http://localhost:8080/alumnoCalificaciones.html";
                    }
                })
        },
        error : function(xhr, status) {
            $("#resultado").html("Hubo un erro vuelve a intentar");
        },
        
    });
}

