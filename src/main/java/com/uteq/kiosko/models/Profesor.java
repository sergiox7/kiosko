package com.uteq.kiosko.models;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;
import java.util.List;


@Entity
@Table(name = "profesor")
@ToString @EqualsAndHashCode
public class Profesor {
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
    @Getter
    @Setter
    @Column(name = "ap1")
    private String ap1;
    @Getter
    @Setter
    @Column(name = "ap2")
    private String ap2;
    @Getter
    @Setter
    @Column(name = "correo")
    private String correo;
    @Getter
    @Setter
    @Column(name = "password")
    private String password;

}
