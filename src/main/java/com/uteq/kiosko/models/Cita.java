package com.uteq.kiosko.models;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;


@Entity
@Table(name = "cita")
@ToString @EqualsAndHashCode
public class Cita {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    @Column(name = "id")
    private Long id;
    @Getter
    @Setter
    @Column(name = "fecha")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fecha;
    @Getter
    @Setter
    @Column(name = "status")
    private String status;
    @Getter
    @Setter
    @Column(name = "matriculaAlumno")
    private Long matriculaPlumno;
    @Getter
    @Setter
    @Column(name = "idProfesor")
    private Long idProfesor;
    @Getter
    @Setter
    @ManyToOne
    @JoinColumn(name = "matriculaAlumno", nullable = false, updatable = false, insertable = false)
    private Alumno alumno;
    @Getter
    @Setter
    @ManyToOne
    @JoinColumn(name = "idProfesor", nullable = false, updatable = false, insertable = false)
    private Profesor profesor;
}
