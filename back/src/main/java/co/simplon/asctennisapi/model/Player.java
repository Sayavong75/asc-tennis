package co.simplon.asctennisapi.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "player_id_seq")
    @SequenceGenerator(name = "player_id_seq", sequenceName = "player_id_seq", allocationSize = 1)
    private Long id;

    @NotNull
    @NotBlank
    @Column(nullable = false)
    private String lastName;

    @NotNull
    @NotBlank
    @Column(nullable = false)
    private String firstName;

    @NotNull
    @NotBlank
    @Column(nullable = false)
    private String login;

    @NotNull
    @NotBlank
    @Column(nullable = false)
    private String password;

    @NotNull
    @NotBlank
    @Column(nullable = false)
    private String email1;

    @Column(nullable = false)
    private String email2;

    @Column(nullable = false)
    private String phoneNumber1;

    @Column(nullable = false)
    private String phoneNumber2;

    @Column(nullable = false)
    private int trainingCount;

    @Column(nullable = false)
    private boolean generalAlertOn = true;

    @Column(nullable = false)
    private boolean playerAlertOn = true;

    @Column(nullable = false)
    private boolean statusIsActive = true;

    // RELATION unidirectionnelle vers Ranking (4)
    @ManyToOne
    private Ranking ranking;

    // RELATION unidirectionnelle vers TrainingGroup (5)
    @ManyToOne
    private TrainingGroup trainingGroup;

    // GETTERS & SETTERS

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail1() {
        return email1;
    }

    public void setEmail1(String email1) {
        this.email1 = email1;
    }

    public String getEmail2() {
        return email2;
    }

    public void setEmail2(String email2) {
        this.email2 = email2;
    }

    public String getPhoneNumber1() {
        return phoneNumber1;
    }

    public void setPhoneNumber1(String phoneNumber1) {
        this.phoneNumber1 = phoneNumber1;
    }

    public String getPhoneNumber2() {
        return phoneNumber2;
    }

    public void setPhoneNumber2(String phoneNumber2) {
        this.phoneNumber2 = phoneNumber2;
    }

    public int getTrainingCount() {
        return trainingCount;
    }

    public void setTrainingCount(int trainingCount) {
        this.trainingCount = trainingCount;
    }

    public boolean isGeneralAlertOn() {
        return generalAlertOn;
    }

    public void setGeneralAlertOn(boolean generalAlertOn) {
        this.generalAlertOn = generalAlertOn;
    }

    public boolean isPlayerAlertOn() {
        return playerAlertOn;
    }

    public void setPlayerAlertOn(boolean playerAlertOn) {
        this.playerAlertOn = playerAlertOn;
    }

    public boolean isStatusIsActive() {
        return statusIsActive;
    }

    public void setStatusIsActive(boolean statusIsActive) {
        this.statusIsActive = statusIsActive;
    }

    public Ranking getRanking() {
        return ranking;
    }

    public TrainingGroup getTrainingGroup() {
        return trainingGroup;
    }
}
