package co.simplon.asctennisapi.controllers;

import co.simplon.asctennisapi.model.Coach;
import co.simplon.asctennisapi.service.CoachService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/coaches")
@CrossOrigin("http://localhost:4200")
public class CoachController {

    private CoachService coachService;

    public CoachController(CoachService coachService) {
        this.coachService = coachService;
    }

    /** Coach list retrieval */
    @GetMapping
    public List<Coach> getCoaches() {
        return coachService.getCoaches();
    }

    /** Get one coach with its ID */
    @GetMapping("/{coachId}")
    public Coach getCoachById(@PathVariable Long coachId) {
        return coachService.getCoachById(coachId);
    }

    /** Create a new coach */
    @PostMapping
    public Coach createCoach(@RequestBody @Valid Coach newCoach) {
        return coachService.createCoach(newCoach);
    }

    /** Save an existing coach */
    @PutMapping("/{coachId}")
    public ResponseEntity<Coach> saveCoach(@PathVariable Long coachId, @RequestBody Coach coach) {
        try {
            return ResponseEntity.ok(this.coachService.saveCoach(coachId, coach));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    /** Delete a coach from the coaches array */
    @DeleteMapping("/{coachId}")
    public void deleteCoach(@PathVariable Long coachId) {
        coachService.deleteCoach(coachId);
    }
}
