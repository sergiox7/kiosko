package com.uteq.kiosko.models;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "grupo")
@ToString @EqualsAndHashCode
public class Grupo {
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
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "grupo")
    @JsonManagedReference
    //@Transition
    private List<Alumno> alumno;
}
