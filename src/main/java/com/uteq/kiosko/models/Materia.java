package com.uteq.kiosko.models;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
@Entity
@Table(name = "materia")
@ToString @EqualsAndHashCode
public class Materia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    @Column(name = "id")
    private Long id;
    @Getter
    @Setter
    @Column(name = "nombre")
    private String nombre;
}
