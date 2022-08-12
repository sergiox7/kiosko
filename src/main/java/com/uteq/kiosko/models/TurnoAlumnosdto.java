package com.uteq.kiosko.models;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "turnoalumno")
@ToString
@EqualsAndHashCode
public class TurnoAlumnosdto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    @Column(name = "id")
    private Long id;
    @Getter
    @Setter
    @Column(name = "turno")
    private Integer turno;
    @Getter
    @Setter
    @Column(name = "id_alumno")
    private Long id_alumno;
    @Setter
    @Getter
    @Column(name = "id_kiosko")
    private Long id_kiosko;
}
