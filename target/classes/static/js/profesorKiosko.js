cargarDatos()

var turnoProfesor = 0
//setInterval('cargarDatos()',3000);

function cargarDatos() {
    $.ajax({
        url:   'http://localhost:8080/api/getkiosko',
        type:  'post',
        beforeSend: function () {
        },
        success:  function (response) {
            console.log(response)
                response.map((dato,index)=>{
                    if(dato.profesor.id == sessionStorage.getItem('idmaestro')+''){
                        document.getElementById('numero').innerHTML = `${dato.turno}`
                        idKiosko = dato.id
                        turnoProfesor = dato.turno
                    }
                })
                cargarTurno()
        },
        error : function(xhr, status) {
            document.getElementById('numero').innerHTML = `Hubo un error`
        },
        
      });
}

  function cargarTurno(){
    document.getElementById('numero').innerHTML = `${turnoProfesor}`
    console.log(idKiosko)
    console.log(`${turnoProfesor}`)
    
  }


  function obtenerTurno(){
    turnoProfesor = turnoProfesor + 1
    
    var datos = {
        "id": idKiosko,
        "id_profesor": sessionStorage.getItem('idmaestro'),
        "turno": turnoProfesor
    }
    datos = JSON.stringify(datos)
  
    $.ajax({
        contentType: "application/json",
        data:  datos,
        dataType: "json",
        url:   'http://localhost:8080/api/actualizaturno',
        type:  'post',
        beforeSend: function () {
        },
        success:  function (response) {
            cargarDatos()
        },
        error : function(xhr, status) {
        },
        
    });
  }