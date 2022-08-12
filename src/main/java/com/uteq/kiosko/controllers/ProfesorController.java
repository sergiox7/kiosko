package com.uteq.kiosko.controllers;


import com.uteq.kiosko.models.Profesor;
import com.uteq.kiosko.repo.ProfesorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProfesorController {
    @Autowired
    private ProfesorRepo profesorRepo;

    @RequestMapping(value = "api/profesores" )
    public List<Profesor> getProfesores() {

        return profesorRepo.findAll();
    }

}
