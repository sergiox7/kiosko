package com.uteq.kiosko.controllers;


import com.uteq.kiosko.models.Alumno;
import com.uteq.kiosko.repo.AlumnoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;

@RestController
public class LoginAlumno {

    @Autowired
    private AlumnoRepo alumnoRepo;

    @RequestMapping(value = "api/loginAlumno" )
    public List<Alumno> getAlumnoLogin() {
        return alumnoRepo.findAll();
    }

}
