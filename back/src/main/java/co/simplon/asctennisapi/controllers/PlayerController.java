package co.simplon.asctennisapi.controllers;

import co.simplon.asctennisapi.dto.AppUserDto;
import co.simplon.asctennisapi.dto.JsonWebToken;
import co.simplon.asctennisapi.exception.ExistingUsernameException;
import co.simplon.asctennisapi.model.Player;
import co.simplon.asctennisapi.service.PlayerService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/players")
@CrossOrigin("http://localhost:4200")
public class PlayerController {

    private PlayerService playerService;

    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    /** Player list retrieval */
//    @GetMapping
//    public List<Player> getPlayers() {
//        return playerService.getPlayers();
//    }

    /** Get one player with its ID */
//    @GetMapping("/{playerId}")
//    public Player getPlayerById(@PathVariable Long playerId) {
//        return playerService.getPlayerById(playerId);
//    }

    /** Create a new player */
    @PostMapping
    public Player createPlayer(@RequestBody @Valid Player newPlayer) {
        return playerService.createPlayer(newPlayer);
    }

    /** Save an existing player */
    @PutMapping("/{playerId}")
    public ResponseEntity<Player> savePlayer(@PathVariable Long playerId, @RequestBody Player player) {
        try {
            return ResponseEntity.ok(this.playerService.savePlayer(playerId, player));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    /** Delete a player from the players array */
    @DeleteMapping("/{playerId}")
    public void deletePlayer(@PathVariable Long playerId) {
        playerService.deletePlayer(playerId);
    }

    /**
     * Method to register a new user in database.
     *
     * @param user the new user to create.
     * @return a JWT if sign up is ok, a bad response code otherwise.
     */
    @PostMapping("/sign-up")
    public ResponseEntity<JsonWebToken> signUp(@RequestBody Player user) {
        try {
            System.out.println("new user sign up : " + user);
            return ResponseEntity.ok(new JsonWebToken(playerService.signup(user)));
        } catch (ExistingUsernameException ex) {
            return ResponseEntity.badRequest().build();
        }
    }

    /**
     * Method to sign in a user (already existing).
     *
     * @param user the user to sign in to the app.
     * @return a JWT if sign in is ok, a bad response code otherwise.
     */
    @PostMapping("/sign-in")
    public ResponseEntity<JsonWebToken> signIn(@RequestBody Player user) {
        try {
            System.out.println("controller : username -> " + user.getUsername());
            return ResponseEntity.ok(new JsonWebToken(playerService.signin(user.getUsername(), user.getPassword())));
        } catch (AuthenticationException ex) {
            return ResponseEntity.badRequest().build();
        }
    }

    /**
     * Method to get all users from the database.
     * This method is restricted to Admin users.
     *
     * @return the list of all users registered in the database.
     */
    @GetMapping
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public List<AppUserDto> getAllUsers() {
        return playerService.findAllUsers().stream().map(player -> new AppUserDto(player.getUsername(), player.getRoleList())).collect(Collectors.toList());
    }

    /**
     * Method to get one user from database based on its user name.
     * This method is restricted to Admin users.
     *
     * @param appUserName the user name to look for.
     * @return a User object if found, a not found response code otherwise.
     */
    @GetMapping("/{appUserName}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<AppUserDto> getOneUser(@PathVariable String appUserName) {
        Optional<Player> appUser = playerService.findUserByUserName(appUserName);
        if (appUser.isPresent()) {
            return ResponseEntity.ok(new AppUserDto(appUser.get().getUsername(), appUser.get().getRoleList()));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
