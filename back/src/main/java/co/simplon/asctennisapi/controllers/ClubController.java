package co.simplon.asctennisapi.controllers;

import co.simplon.asctennisapi.model.Club;
import co.simplon.asctennisapi.service.ClubService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/clubs")
@CrossOrigin("http://localhost:4200")
public class ClubController {

    private ClubService clubService;

    public ClubController(ClubService clubService) {
        this.clubService = clubService;
    }

    /** Club list retrieval */
    @GetMapping
    public List<Club> getClubs() {
        return clubService.getClubs();
    }

    /** Get one club with its ID  */
    @GetMapping("/{clubId}")
    public Club getClubById(@PathVariable Long clubId) {
        return clubService.getClubById(clubId);
    }

    /** Create a new club */
    @PostMapping
    public Club createClub(@RequestBody @Valid Club newClub) {
        return clubService.createClub(newClub);
    }

    /** Save an existing club  */
    @PutMapping("/{clubId}")
    public ResponseEntity<Club> saveClub(@PathVariable Long clubId, @RequestBody Club club) {
        try {
            return ResponseEntity.ok(this.clubService.saveClub(clubId, club));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    /** Delete a club from the clubs array  */
    @DeleteMapping("/{clubId}")
    public void deleteClub(@PathVariable Long clubId) {
        clubService.deleteClub(clubId);
    }
}
