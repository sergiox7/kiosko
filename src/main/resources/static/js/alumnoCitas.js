console.log(sessionStorage.getItem('id') )
if(sessionStorage.getItem('id') == null){
    location.href ="https://kioskouteq.azurewebsites.net/login.html";
}else{
    localStorage.removeItem('kiosko')
    //fecha
var fecha = new Date(); //Fecha actual
var mes = fecha.getMonth()+1; //obteniendo mes
var dia = fecha.getDate(); //obteniendo dia
var ano = fecha.getFullYear(); //obteniendo año
if(dia<10)
  dia='0'+dia; //agrega cero si el menor de 10
if(mes<10)
  mes='0'+mes //agrega cero si el menor de 10
document.getElementById('dia').min=ano+"-"+mes+"-"+dia;



$.ajax({
  url:   'https://kioskouteq.azurewebsites.net/api/optenerProfesor',
  type:  'post',
  beforeSend: function () {
      //document.querySelector("table tbody").innerHTML = "Cargando...."
  },
  success:  function (response) {
      //document.querySelector("table tbody").innerHTML = ""
      //console.log(response)
      let profesor
      $("#resultado").html("Notificaciones");
          response.map((dato,index)=>{
              dato.grupo.alumno.map((alumno,index)=>{
                  //console.log(`${alumno.matricula} ${sessionStorage.getItem('id')}`)
                  if(alumno.matricula == sessionStorage.getItem('id')){
                      profesor = dato.profesor
                      document.getElementById("tabla").innerHTML += `
                          <tr>
                              <th scope="row">${profesor.nombre} ${profesor.ap1} ${profesor.ap2}</th>
                              <th>${dato.materia.nombre}</th>
                              <th>
                              <button type="button" class="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#myModal" onclick="asignarIdModal(${profesor.id})">Agendar cita</button>
                              <button type="button" class="btn btn-outline-info"  onclick="guardarkiosko(${profesor.id})">Entrar al kiosko</button>
                              </th>
                          </tr> 
                      `
              }
              })
          })
  },
  error : function(xhr, status) {
      //document.querySelector("table tbody").innerHTML = "Hubo un error al traer los datos, prueba mas tarde"
  },
  
});

function guardarkiosko(idProfesor){
    localStorage.setItem('kiosko', idProfesor)
    location.href ="https://kioskouteq.azurewebsites.net/alumnoKiosko.html";
}

function asignarIdModal(idProfesor){
  document.getElementById('profesorId').value = idProfesor
  console.log('funcion asignar ID')
  console.log(document.getElementById('profesorId').value)
}

function agendarCita(){
  let idProfesor = document.getElementById('profesorId').value
  let dia = document.getElementById('dia').value
  let hora = document.getElementById('hora').value

  console.log(`${dia} ${hora}`)
  console.log(Date.parse(dia + ' '+ hora));
  console.log(Date.parse(dia + ' '+ hora)- 18000000);


  var datoscita = {
      "fecha": Date.parse(dia + ' '+ hora)- 18000000 ,
      "status": '1',
      "matricula_alumno": sessionStorage.getItem('id'),
      "id_profesor": idProfesor
  }
  datoscita = JSON.stringify(datoscita)

  $.ajax({
      contentType: "application/json",
      data:  datoscita,
      dataType: "json",
      url:   'https://kioskouteq.azurewebsites.net/api/insertarCita',
      type:  'post',
      beforeSend: function () {
              $("#resultado").html("Procesando, espere por favor...");
      },
      success:  function (response) {
          $("#resultado").html("Notificaciones");
          location.href ="https://kioskouteq.azurewebsites.net/alumnoCitasAgendadas.html";
             
      },
      error : function(xhr, status) {
          $("#resultado").html("Hubo un erro vuelve a intentar");
      },
      
  });

}
}

