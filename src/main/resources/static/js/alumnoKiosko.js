if(sessionStorage.getItem('id') == null){
    location.href ="https://kioskouteq.azurewebsites.net/login.html";
}else{
var maximoTurno = 0;
var idKiosko
var turnoProfesor
var UltraMaximoTurno = 0

cargarDatos()

setInterval('cargarDatos()',3000);

function cargarDatos() {
    $.ajax({
        url:   'https://kioskouteq.azurewebsites.net/api/getTurno',
        type:  'post',
        beforeSend: function () {
        },
        success:  function (response) {
            console.log(response)
                response.map((dato,index)=>{
                    if(dato.kiosko.profesor.id == localStorage.getItem('kiosko')+''){
                        document.getElementById('numero').innerHTML = `${dato.kiosko.turno}`
                        idKiosko = dato.kiosko.id
                        turnoProfesor = dato.kiosko.turno
                        dato.turno > UltraMaximoTurno ? UltraMaximoTurno = dato.turno : null
                    }
    
                    if(dato.kiosko.profesor.id == localStorage.getItem('kiosko')+'' && dato.id_alumno+'' == sessionStorage.getItem('id')){
                        dato.turno > maximoTurno ? maximoTurno = dato.turno : null
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
    document.getElementById('miturno').innerHTML = `Mi turno ${maximoTurno}`
    console.log(idKiosko)
    console.log(`${maximoTurno} ${turnoProfesor}`)
    if(maximoTurno == turnoProfesor){
        document.getElementById('fondo').style.backgroundColor = 'green';
    }else{
        document.getElementById('fondo').style.backgroundColor = 'white';
    }
  }


  function obtenerTurno(){
    maximoTurno = maximoTurno + 1
    if(turnoProfesor > maximoTurno){
        maximoTurno = turnoProfesor + 1
    }
    if(UltraMaximoTurno > maximoTurno){
        maximoTurno = UltraMaximoTurno + 1
    }
    if(UltraMaximoTurno == maximoTurno){
        maximoTurno = UltraMaximoTurno + 1
    }
    var datos = {
        "turno": maximoTurno,
        "id_alumno": sessionStorage.getItem('id'),
        "id_kiosko": idKiosko
    }
    datos = JSON.stringify(datos)
  
    $.ajax({
        contentType: "application/json",
        data:  datos,
        dataType: "json",
        url:   'https://kioskouteq.azurewebsites.net/api/setTurno2',
        type:  'post',
        beforeSend: function () {
                $("#miturno").html("Turno..");
        },
        success:  function (response) {
            cargarDatos()
        },
        error : function(xhr, status) {
            $("#miturno").html("error");
        },
        
    });
  }
}


