package co.simplon.asctennisapi.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

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

    // @Column(nullable = false)
    @Column
    private String email1;

    // @Column(nullable = false)
    @Column
    private String email2;

    // @Column(nullable = false)
    @Column
    private String phoneNumber1;

    // @Column(nullable = false)
    @Column
    private String phoneNumber2;

    // @Column(nullable = false)
    @Column
    private int trainingCount;

    @Column(nullable = false)
    private boolean generalAlertOn = true;

    @Column(nullable = false)
    private boolean playerAlertOn = true;

    @Column(nullable = false)
    private boolean statusIsActive = true;

    // RELATION bidirectionnelle vers Ranking (4)
    @ManyToOne
    private Ranking ranking;

    // RELATION bidirectionnelle vers TrainingGroup (5)
    @ManyToOne
    private TrainingGroup trainingGroup;

    // RELATION unidirectionnelle vers AppUser (7)
    @OneToOne
    private AppUser appUser;

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

    public AppUser getAppUser() { return appUser; }

}
