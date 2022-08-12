package com.uteq.kiosko.controllers;

import com.uteq.kiosko.models.Cita;
import com.uteq.kiosko.models.Citadto;
import com.uteq.kiosko.models.Grupo;
import com.uteq.kiosko.models.Profesorgrupomateria;
import com.uteq.kiosko.repo.CitaRepo;
import com.uteq.kiosko.repo.CitadtoRepo;
import com.uteq.kiosko.repo.GrupoRepo;
import com.uteq.kiosko.repo.ProfesorGrupoMateriaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CitasController {

    @Autowired
    private CitaRepo citaRepo;

    @Autowired
    private ProfesorGrupoMateriaRepo profesorGrupoMateriaRepo;

    @Autowired
    private GrupoRepo grupoRepo;

    @Autowired
    private CitadtoRepo citadtoRepo;

    @RequestMapping(value = "api/citas" )
    public List<Cita> getCitas() {
        return citaRepo.findAll();
    }

    @RequestMapping(value = "api/optenerProfesor" )
    public List<Profesorgrupomateria> getProfesor() {
        return profesorGrupoMateriaRepo.findAll();
    }

    @RequestMapping(value = "api/optenerGrupo" )
    public List<Grupo> getGrupo() {
        return grupoRepo.findAll();
    }

    @RequestMapping(value= "api/insertarCita", method = RequestMethod.POST)
    public Citadto insertarCita(@RequestBody Citadto citadto){
        Citadto resultado = citadtoRepo.save(citadto);
        return resultado;
    }

    @RequestMapping(value = "api/cita" )
    public List<Citadto> getCitaPrueba() {
        return citadtoRepo.findAll();
    }

    /*
    @RequestMapping(value = "api/citaAlumno/{matricula}", method = RequestMethod.GET)
    public List<Cita> getCitaAlumno(@PathVariable Long matricula){
        return citaRepo.citasAlumno(matricula);
    }
    */

}
