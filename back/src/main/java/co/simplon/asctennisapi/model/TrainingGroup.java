package co.simplon.asctennisapi.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
public class TrainingGroup {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "training_group_id_seq")
    @SequenceGenerator(name = "training_group_id_seq", sequenceName = "training_group_id_seq", allocationSize = 1)
    private Long id;

    @NotNull
    @NotBlank
    @Column(nullable = false)
    private String label;

    // RELATION bidirectionnelle vers Coach (1)
    @ManyToOne
    private Coach coach;

    // RELATION bidirectionnelle vers Player (5)
    @JsonIgnore
    @OneToMany (mappedBy = "trainingGroup")
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

    public Coach getCoach() {
        return coach;
    }

    public List<Player> getPlayers() {
        return players;
    }
}