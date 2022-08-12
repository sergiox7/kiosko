console.log(sessionStorage.getItem('id') )
if(sessionStorage.getItem('id') == null){
    location.href ="https://kioskouteq.azurewebsites.net/login.html";
}else{
    localStorage.removeItem('kiosko')
    $.ajax({
        url:   'https://kioskouteq.azurewebsites.net/api/getCalificaciones',
        type:  'post',
        beforeSend: function () {
            document.querySelector("table tbody").innerHTML = "Cargando...."
        },
        success:  function (response) {
            document.querySelector("table tbody").innerHTML = ""
            let profesor
            $("#resultado").html("Notificaciones");
                response.map((calificacion,index)=>{
                    console.log(`${calificacion.alumno.matricula} ${sessionStorage.getItem('id')}`)
                    if(calificacion.alumno.matricula == sessionStorage.getItem('id')){
                        profesor = calificacion.profesorgrupomateria.profesor
                        document.querySelector("table tbody").innerHTML += `
                        <tr>
                            <th scope="row">${calificacion.profesorgrupomateria.materia.nombre}</th>
                            <td>${profesor.nombre} ${profesor.ap1} ${profesor.ap2}</td>
                            <td>${calificacion.calificacion}</td>
                        </tr>
                    `
                    }
                    
                })
        },
        error : function(xhr, status) {
            document.querySelector("table tbody").innerHTML = "Hubo un error al traer los datos, prueba mas tarde"
        },
        
    });
}
