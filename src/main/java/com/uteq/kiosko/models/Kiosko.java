package com.uteq.kiosko.models;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name = "kiosko")
@ToString @EqualsAndHashCode
public class Kiosko {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    @Column(name = "id")
    private Long id;
    @Getter
    @Setter
    @OneToOne
    @JoinColumn(name = "idProfesor", nullable = false, updatable = false, insertable = false)
    private Profesor profesor;
    @Getter
    @Setter
    @Column(name = "turno")
    private Integer turno;

}
