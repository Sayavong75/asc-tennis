package co.simplon.asctennisapi.service;

import co.simplon.asctennisapi.exception.EntityNotFoundException;
import co.simplon.asctennisapi.model.Player;
import co.simplon.asctennisapi.repository.PlayerRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlayerServiceImpl implements PlayerService {

    private PlayerRepository playerRepository;

    PlayerServiceImpl(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    @Override
    public List<Player> getPlayers() {
        return playerRepository.findAll();
    }

    @Override
    public Player getPlayerById(Long playerId) throws EntityNotFoundException {
        Optional<Player> dbPlayer = playerRepository.findById(playerId);
        if (dbPlayer.isPresent()) {
            return dbPlayer.get();
        } else {
            throw new EntityNotFoundException("The player with ID: "
                    + playerId + " cannot be found in DB", "Player");
        }
    }

    @Override
    public Player createPlayer(Player newPlayer) {
        return playerRepository.save(newPlayer);
    }

    @Override
    public Player savePlayer(Long playerId, Player player) throws EntityNotFoundException {
        Optional<Player> dbPlayer = playerRepository.findById(playerId);
        if (dbPlayer.isPresent() && player.getId().equals(playerId)) {
            return playerRepository.save(player);
        } else {
            throw new EntityNotFoundException("The player with ID: " + playerId + " cannot be found in DB", "Player");
        }
    }

    @Override
    public void deletePlayer(Long playerId) {
        this.playerRepository.deleteById(playerId);
    }
}
