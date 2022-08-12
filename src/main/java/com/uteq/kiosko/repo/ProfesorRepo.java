package com.uteq.kiosko.repo;

import com.uteq.kiosko.models.Profesor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfesorRepo extends JpaRepository<Profesor, Long> {
}
