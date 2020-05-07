package co.simplon.asctennisapi.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.NotBlank;
import javax.persistence.*;
import java.util.List;

@Entity
public class Club {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "club_id_seq")
    @SequenceGenerator(name = "club_id_seq", sequenceName = "club_id_seq", allocationSize = 1)
    private Long id;

    @NotNull
    @NotBlank
    @Column(nullable = false)
    private String name;

    @NotNull
    @NotBlank
    @Column(nullable = false)
    private String address1;

    @Column(nullable = false)
    private String address2;

    @Column(nullable = false)
    private Long zipCode;

    @NotNull
    @NotBlank
    @Column(nullable = false)
    private String city;

    @Column(nullable = false)
    private String phoneNumber;

    @Column(columnDefinition="text")
    private String iframeGoogleMaps;

    @Column(nullable = false)
    private boolean statusIsActive = true;

    // RELATION unidirectionnelle vers TrainingDay (3)
    @JsonIgnore
    @OneToMany (mappedBy = "club")
    private List<TrainingDay> trainingDays;

    // GETTERS & SETTERS
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress1() {
        return address1;
    }

    public void setAddress1(String address1) {
        this.address1 = address1;
    }

    public String getAddress2() {
        return address2;
    }

    public void setAddress2(String address2) {
        this.address2 = address2;
    }

    public Long getZipCode() {
        return zipCode;
    }

    public void setZipCode(Long zipCode) {
        this.zipCode = zipCode;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getIframeGoogleMaps() {
        return iframeGoogleMaps;
    }

    public void setIframeGoogleMaps(String iframeGoogleMaps) {
        this.iframeGoogleMaps = iframeGoogleMaps;
    }

    public boolean isStatusIsActive() {
        return statusIsActive;
    }

    public void setStatusIsActive(boolean statusIsActive) {
        this.statusIsActive = statusIsActive;
    }

    public List<TrainingDay> getTrainingDays() {
        return trainingDays;
    }
}


