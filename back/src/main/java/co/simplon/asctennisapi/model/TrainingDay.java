package co.simplon.asctennisapi.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
public class TrainingDay {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "training_day_id_seq")
    @SequenceGenerator(name = "training_day_id_seq", sequenceName = "training_day_id_seq", allocationSize = 1)
    private Long id;

    @NotNull
    @NotBlank
    @Column(nullable = false)
    private String day;

    @NotNull
    @NotBlank
    @Column(nullable = false)
    private String startTime;

    @NotNull
    @Column(nullable = false)
    private Long maxNumberPlayers;

    @Column(nullable = false)
    private boolean statusIsActive = true;

    // RELATION bidirectionnelle vers Club (3)
    @ManyToOne
    private Club club;

    // RELATION unidirectionnelle vers Training Group (6)
    @OneToOne
    private TrainingGroup trainingGroup ;

    // GETTERS & SETTERS
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public Long getMaxNumberPlayers() {
        return maxNumberPlayers;
    }

    public void setMaxNumberPlayers(Long maxNumberPlayers) {
        this.maxNumberPlayers = maxNumberPlayers;
    }

    public boolean isStatusIsActive() {
        return statusIsActive;
    }

    public void setStatusIsActive(boolean statusIsActive) {
        this.statusIsActive = statusIsActive;
    }

    public Club getClub() {
        return club;
    }

    public TrainingGroup getTrainingGroup() {
        return trainingGroup;
    }
}
