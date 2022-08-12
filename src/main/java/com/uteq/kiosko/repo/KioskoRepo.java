package com.uteq.kiosko.repo;

import com.uteq.kiosko.models.Kiosko;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KioskoRepo extends JpaRepository<Kiosko, Long> {
}
