package com.uteq.kiosko.controllers;

import com.uteq.kiosko.models.Calificacion;
import com.uteq.kiosko.repo.CalificacionRepo;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@RestController
public class CalificacionController {
    @Autowired
    private CalificacionRepo calificacionRepo;

    @RequestMapping(value = "api/getCalificaciones")
    public List<Calificacion> getCalificaciones() {

        return calificacionRepo.findAll();
    }
}
