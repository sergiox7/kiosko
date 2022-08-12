package com.uteq.kiosko.controllers;

import com.uteq.kiosko.models.Alumno;
import com.uteq.kiosko.repo.AlumnoRepo;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@RestController
public class AlumnoController {

    @Autowired
    private AlumnoRepo alumnoRepo;

    @RequestMapping(value = "api/alumnos" )
    public List<Alumno> getAlumnos() {

        return alumnoRepo.findAll();
    }
}
