package co.simplon.asctennisapi.service;

import co.simplon.asctennisapi.exception.EntityNotFoundException;
import co.simplon.asctennisapi.exception.ExistingUsernameException;
import co.simplon.asctennisapi.model.Player;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface PlayerService {

    /** Player list retrieval */
    List<Player> getPlayers();

    /** Get one player with its ID */
    Player getPlayerById(Long playerId) throws EntityNotFoundException;

    /** Create a new player */
    Player createPlayer(Player newPlayer);

    /** Save an existing player */
    Player savePlayer(Long playerId, Player player);

    /** Delete a player from the players array */
    void deletePlayer(Long playerId);

    /**
     * Method that signs a user in the application.
     *
     * @param username the user username.
     * @param password the user password.
     * @return the JWT if credentials are valid, throws InvalidCredentialsException otherwise.
     * @throws AuthenticationException
     */
    String signin(String username, String password) throws AuthenticationException;

    /**
     * Method that signs up a new user in the application.
     *
     * @param user the new user to create.
     * @return the JWT if user username is not already existing.
     * @throws ExistingUsernameException
     */
    String signup(Player user) throws ExistingUsernameException;

    /**
     * Method that finds all users from the application database.
     *
     * @return the list of all application users.
     */
    List<Player> findAllUsers();

    /**
     * Method that finds a user based on its username.
     *
     * @param username the username to look for.
     * @return an Optional object containing user if found, empty otherwise.
     */
    Optional<Player> findUserByUserName(String username);
}
