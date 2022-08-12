package com.uteq.kiosko.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;


@Entity
@Table(name = "turnoalumno")
@ToString @EqualsAndHashCode
public class Turnoalumnos {
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
    @Column(name = "id_kiosko")
    private Long id_kiosko;
    @Getter
    @Setter
    @Column(name = "id_alumno")
    private Long id_alumno;
    @Getter
    @Setter
    @ManyToOne
    @JoinColumn(name = "id_kiosko", updatable = false, insertable = false)
    private Kiosko kiosko;


}
