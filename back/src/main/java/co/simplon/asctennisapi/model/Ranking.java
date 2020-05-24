package co.simplon.asctennisapi.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

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

    // RELATION bidirectionnelle vers Series (2)
    @ManyToOne
    private Series series;

    // RELATION bidirectionnelle vers Player (4)
    @JsonIgnore
    @OneToMany(mappedBy = "ranking")
    private List<Player> players;

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

    public List<Player> getPlayers() {
        return players;
    }
}
