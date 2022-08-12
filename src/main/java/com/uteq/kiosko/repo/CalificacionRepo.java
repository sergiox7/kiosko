package com.uteq.kiosko.repo;

import com.uteq.kiosko.models.Calificacion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CalificacionRepo extends JpaRepository<Calificacion, Long> {
}
