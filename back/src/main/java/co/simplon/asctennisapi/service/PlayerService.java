package co.simplon.asctennisapi.service;

import co.simplon.asctennisapi.exception.EntityNotFoundException;
import co.simplon.asctennisapi.model.Player;
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
     * Method that finds a user based on its username.
     *
     * @param username the username to look for.
     * @return an Optional object containing user if found, empty otherwise.
     */
    Optional<Player> findUserByUserName(String username);
}
