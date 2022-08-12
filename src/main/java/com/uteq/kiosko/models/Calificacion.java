package com.uteq.kiosko.models;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "calificacion")
@ToString @EqualsAndHashCode
public class Calificacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    @Column(name = "id")
    private Long id;
    @Getter
    @Setter
    @Column(name = "calificacion")
    private Double calificacion;
    @Getter
    @Setter
    @ManyToOne
    @JoinColumn(name = "matricula", nullable = false, updatable = false)
    private Alumno alumno;
    @Getter
    @Setter
    @OneToOne
    @JoinColumn(name = "idProfesorGrupoMateria", nullable = false, updatable = false)
    private Profesorgrupomateria profesorgrupomateria;
}
