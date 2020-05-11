package co.simplon.asctennisapi.service;

import co.simplon.asctennisapi.exception.EntityNotFoundException;
import co.simplon.asctennisapi.model.Player;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
