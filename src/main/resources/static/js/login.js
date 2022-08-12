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

                var exitoso = 0;
                console.log(response.length)
                response.map((usuario,index)=>{
                    if(usuario.correo == correo && usuario.password == password){
                        sessionStorage.setItem('id', usuario.matricula);
                        location.href ="https://kioskouteq.azurewebsites.net/alumnoCalificaciones.html";
                        exitoso = 1;
                    }
                    console.log(` ${response.length} ${index + 1}`)
                    if(response.length == index + 1 && exitoso == 0){
                        error()
                    }
                })
        },
        error : function(xhr, status) {
            $("#boton").html("error");
        },
        
    });
}

function error(){
    alert('Credenciales incorrectas')
    $("#boton").html("Iniciar sesión");
}

