package co.simplon.asctennisapi.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
public class Coach {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "coach_id_seq")
    @SequenceGenerator(name = "coach_id_seq", sequenceName = "coach_id_seq", allocationSize = 1)
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
    private String email1;

    @Column(nullable = false)
    private String email2;

    @Column(nullable = false)
    private String phoneNumber1;

    @Column(nullable = false)
    private String phoneNumber2;

    @Column(nullable = false)
    private boolean statusIsActive = true;

    // RELATION bidirectionnelle vers TrainingGroup (1)
    @JsonIgnore
    @OneToMany (mappedBy = "coach")
    private List<TrainingGroup> trainingGroups;

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

    public boolean isStatusIsActive() {
        return statusIsActive;
    }

    public void setStatusIsActive(boolean statusIsActive) {
        this.statusIsActive = statusIsActive;
    }

    public List<TrainingGroup> getTrainingGroups() {
        return trainingGroups;
    }
}
