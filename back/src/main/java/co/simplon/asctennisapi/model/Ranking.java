package co.simplon.asctennisapi.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
public class Ranking {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ranking_id_seq")
    @SequenceGenerator(name = "ranking_id_seq", sequenceName = "ranking_id_seq", allocationSize = 1)
    private Long id;

    @NotNull
    @NotBlank
    @Column(nullable = false)
    private String label;

    // RELATION unidirectionnelle vers Series (2)
    @ManyToOne
    private Series series;

    // GETTERS & SETTERS
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public Series getSeries() {
        return series;
    }
}
