package com.uteq.kiosko.controllers;

import com.uteq.kiosko.models.Citadto;
import com.uteq.kiosko.models.Kiosko;
import com.uteq.kiosko.models.TurnoAlumnosdto;
import com.uteq.kiosko.models.Turnoalumnos;
import com.uteq.kiosko.repo.KioskoRepo;
import com.uteq.kiosko.repo.TurnoAlumnosRepo;
import com.uteq.kiosko.repo.TurnoAlumnosdtoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class KioskoController {

    @Autowired
    private KioskoRepo kioskoRepo;

    @Autowired
    private TurnoAlumnosRepo turnoAlumnosRepo;

    @Autowired
    private TurnoAlumnosdtoRepo turnoAlumnosdtoRepo;

    @RequestMapping(value = "api/getkiosko" )
    public List<Kiosko> getkiosko(){
        return kioskoRepo.findAll();
    }

    @RequestMapping(value= "api/actualizaturno", method = RequestMethod.POST)
    public Kiosko actualizaturno(@RequestBody Kiosko kiosko){
        Kiosko resultado = kioskoRepo.save(kiosko);
        return resultado;
    }

    @RequestMapping(value = "api/getTurno" )
    public List<Turnoalumnos> setTurno(){
        return turnoAlumnosRepo.findAll();
    }

    @RequestMapping(value= "api/setTurno", method = RequestMethod.POST)
    public Turnoalumnos insetarTurno(@RequestBody Turnoalumnos turnoalumnos){
        Turnoalumnos resultado = turnoAlumnosRepo.save(turnoalumnos);
        return resultado;
    }

    @RequestMapping(value= "api/setTurno2", method = RequestMethod.POST)
    public TurnoAlumnosdto insetarTurno2(@RequestBody TurnoAlumnosdto turnoAlumnosdto){
        TurnoAlumnosdto resultado = turnoAlumnosdtoRepo.save(turnoAlumnosdto);
        return resultado;
    }



}
