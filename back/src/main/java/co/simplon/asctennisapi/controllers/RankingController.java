package co.simplon.asctennisapi.controllers;

import co.simplon.asctennisapi.model.Ranking;
import co.simplon.asctennisapi.service.RankingService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/rankings")
@CrossOrigin("http://localhost:4200")
public class RankingController {

    private RankingService rankingService;

    public RankingController(RankingService rankingService) {
        this.rankingService = rankingService;
    }

    /**
     * Ranking list retrieval
     */
    @GetMapping
    public List<Ranking> getRankings() {
        return rankingService.getRankings();
    }

    /**
     * Get one ranking with its ID
     */
    @GetMapping("/{rankingId}")
    public Ranking getRankingById(@PathVariable Long rankingId) {
        return rankingService.getRankingById(rankingId);
    }

    /**
     * Create a new ranking
     */
    @PostMapping
    public Ranking createRanking(@RequestBody @Valid Ranking newRanking) {
        return rankingService.createRanking(newRanking);
    }

    /**
     * Save an existing ranking
     */
    @PutMapping("/{rankingId}")
    public ResponseEntity<Ranking> saveRanking(@PathVariable Long rankingId, @RequestBody Ranking ranking) {
        try {
            return ResponseEntity.ok(this.rankingService.saveRanking(rankingId, ranking));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    /**
     * Delete a ranking from the rankings array
     */
    @DeleteMapping("/{rankingId}")
    public void deleteRanking(@PathVariable Long rankingId) {
        rankingService.deleteRanking(rankingId);
    }
}
