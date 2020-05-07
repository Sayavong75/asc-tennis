package co.simplon.asctennisapi.controllers;

import co.simplon.asctennisapi.model.TrainingDay;
import co.simplon.asctennisapi.model.TrainingGroup;
import co.simplon.asctennisapi.service.TrainingDayService;
import co.simplon.asctennisapi.service.TrainingGroupService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/training-days")
@CrossOrigin("http://localhost:4200")
public class TrainingDayController {

    private TrainingDayService trainingDayService;

    public TrainingDayController(TrainingDayService trainingDayService) {
        this.trainingDayService = trainingDayService;
    }

    /** Training day list retrieval */
    @GetMapping
    public List<TrainingDay> getTrainingDays() {
        return trainingDayService.getTrainingDays();
    }

    /** Get one training day with its ID */
    @GetMapping("/{trainingDayId}")
    public TrainingDay getTrainingDayById(@PathVariable Long trainingDayId) {
        return trainingDayService.getTrainingDayById(trainingDayId);
    }

    /** Create a new training day */
    @PostMapping
    public TrainingDay createTrainingDay(@RequestBody @Valid TrainingDay newTrainingDay) {
        return trainingDayService.createTrainingDay(newTrainingDay);
    }

    /** Save an existing training day */
    @PutMapping("/{trainingDayId}")
    public ResponseEntity<TrainingDay> saveTrainingDay(@PathVariable Long trainingDayId, @RequestBody TrainingDay trainingDay) {
        try {
            return ResponseEntity.ok(this.trainingDayService.saveTrainingDay(trainingDayId, trainingDay));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    /** Delete a training day from the training days array */
    @DeleteMapping("/{trainingDayId}")
    public void deleteTrainingDay(@PathVariable Long trainingDayId) {
        trainingDayService.deleteTrainingDay(trainingDayId);
    }
}
