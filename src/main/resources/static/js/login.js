sessionStorage.removeItem('id');
function login(){
    var correo = document.getElementById('correo').value
    var password = document.getElementById('pass').value
    $.ajax({
        url:   'https://kioskouteq.azurewebsites.net/api/loginAlumno',
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
                        location.href ="https://kioskouteq.azurewebsites.net/alumnoCalificaciones.html";
                    }else{
                        alert('Credenciales incorrectas')
                        $("#boton").html("Iniciar sesión");
                    }
                })
        },
        error : function(xhr, status) {
            $("#boton").html("error");
        },
        
    });
}

