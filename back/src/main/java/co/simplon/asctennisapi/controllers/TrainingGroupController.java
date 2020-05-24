package co.simplon.asctennisapi.controllers;

import co.simplon.asctennisapi.model.TrainingGroup;
import co.simplon.asctennisapi.service.TrainingGroupService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/training-groups")
@CrossOrigin("http://localhost:4200")
public class TrainingGroupController {

    private TrainingGroupService trainingGroupService;

    public TrainingGroupController(TrainingGroupService trainingGroupService) {
        this.trainingGroupService = trainingGroupService;
    }

    /**
     * Training group list retrieval
     */
    @GetMapping
    public List<TrainingGroup> getTrainingGroups() {
        return trainingGroupService.getTrainingGroups();
    }

    /**
     * Get one training group with its ID
     */
    @GetMapping("/{trainingGroupId}")
    public TrainingGroup getTrainingGroupById(@PathVariable Long trainingGroupId) {
        return trainingGroupService.getTrainingGroupById(trainingGroupId);
    }

    /**
     * Create a new training group
     */
    @PostMapping
    public TrainingGroup createTrainingGroup(@RequestBody @Valid TrainingGroup newTrainingGroup) {
        return trainingGroupService.createTrainingGroup(newTrainingGroup);
    }

    /**
     * Save an existing training group
     */
    @PutMapping("/{trainingGroupId}")
    public ResponseEntity<TrainingGroup> saveTrainingGroup(@PathVariable Long trainingGroupId, @RequestBody TrainingGroup trainingGroup) {
        try {
            return ResponseEntity.ok(this.trainingGroupService.saveTrainingGroup(trainingGroupId, trainingGroup));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    /**
     * Delete a training group from the training groups array
     */
    @DeleteMapping("/{trainingGroupId}")
    public void deleteTrainingGroup(@PathVariable Long trainingGroupId) {
        trainingGroupService.deleteTrainingGroup(trainingGroupId);
    }
}
