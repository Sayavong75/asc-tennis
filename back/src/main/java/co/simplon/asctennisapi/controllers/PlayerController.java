package co.simplon.asctennisapi.controllers;

import co.simplon.asctennisapi.model.Player;
import co.simplon.asctennisapi.service.PlayerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/players")
@CrossOrigin("http://localhost:4200")
public class PlayerController {

    private PlayerService playerService;

    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    /**
     * Player list retrieval
     */
    @GetMapping
    public List<Player> getPlayers() {
        return playerService.getPlayers();
    }

    /**
     * Get one player with its ID
     */
    @GetMapping("/{playerId}")
    public Player getPlayerById(@PathVariable Long playerId) {
        return playerService.getPlayerById(playerId);
    }

    /**
     * Create a new player
     */
    @PostMapping
    public Player createPlayer(@RequestBody @Valid Player newPlayer) {
        return playerService.createPlayer(newPlayer);
    }

    /**
     * Save an existing player
     */
    @PutMapping("/{playerId}")
    public ResponseEntity<Player> savePlayer(@PathVariable Long playerId, @RequestBody Player player) {
        try {
            return ResponseEntity.ok(this.playerService.savePlayer(playerId, player));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    /**
     * Delete a player from the players array
     */
    @DeleteMapping("/{playerId}")
    public void deletePlayer(@PathVariable Long playerId) {
        playerService.deletePlayer(playerId);
    }

}
