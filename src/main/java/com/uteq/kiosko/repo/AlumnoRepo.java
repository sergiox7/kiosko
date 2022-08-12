package com.uteq.kiosko.repo;

import com.uteq.kiosko.models.Alumno;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlumnoRepo extends JpaRepository<Alumno, Long> {
}
