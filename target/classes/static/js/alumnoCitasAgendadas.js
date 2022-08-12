if(sessionStorage.getItem('id') == null){
    location.href ="http://localhost:8080/login.html";
}else{
    localStorage.removeItem('kiosko')
    $.ajax({
        url:   'http://localhost:8080/api/citas',
        type:  'post',
        beforeSend: function () {
            document.querySelector("table tbody").innerHTML = "Cargando citas...."
        },
        success:  function (response) {
            let status
            document.querySelector("table tbody").innerHTML = ""
                console.log(response)
                response.map((cita,index)=>{
                    if (cita.status == '2') {
                        status = "aceptada"
                    } else {
                        status = "Rechazada"
                    }
                    if(cita.status == '1'){
                        status = "pendiente"
                    }
                    if(cita.alumno.matricula == sessionStorage.getItem('id')){
                        document.querySelector("table tbody").innerHTML += `
                        <tr>
                            <th scope="row">${cita.profesor.nombre}</th>
                            <td>${cita.fecha.substring(0,10)} ${cita.fecha.substring(11,16)}</td>
                            <td>${status}</td>
                        </tr>
                    `
                    }
                })
        },
        error : function(xhr, status) {
            document.querySelector("table tbody").innerHTML = "Hubo un error, intentalo mas tarde"
        },
        
    });
    
    
}

