package co.simplon.asctennisapi.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import java.time.LocalTime;

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
    private LocalTime startTime;

    @NotNull
    @NotBlank
    @Column(nullable = false)
    private int maxNumberPlayers;

    @Column(nullable = false)
    private boolean statusIsActive = true;

    // RELATION unidirectionnelle vers Club (3)
    @ManyToOne
    private Club club;

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

    public LocalTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalTime startTime) {
        this.startTime = startTime;
    }

    public int getMaxNumberPlayers() {
        return maxNumberPlayers;
    }

    public void setMaxNumberPlayers(int maxNumberPlayers) {
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
}
