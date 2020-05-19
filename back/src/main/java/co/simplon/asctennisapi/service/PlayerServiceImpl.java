package co.simplon.asctennisapi.service;

import co.simplon.asctennisapi.exception.EntityNotFoundException;
import co.simplon.asctennisapi.exception.ExistingUsernameException;
import co.simplon.asctennisapi.model.Player;
import co.simplon.asctennisapi.repository.PlayerRepository;
import co.simplon.asctennisapi.security.JwtTokenProvider;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlayerServiceImpl implements PlayerService {

    private PlayerRepository playerRepository;
    private BCryptPasswordEncoder passwordEncoder;
    private JwtTokenProvider jwtTokenProvider;
    private AuthenticationManager authenticationManager;

//    PlayerServiceImpl (PlayerRepository playerRepository) { this.playerRepository = playerRepository; }

    public PlayerServiceImpl(PlayerRepository playerRepository, BCryptPasswordEncoder passwordEncoder,
                              JwtTokenProvider jwtTokenProvider, AuthenticationManager authenticationManager) {
        this.playerRepository = playerRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtTokenProvider = jwtTokenProvider;
        this.authenticationManager = authenticationManager;
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
            throw new EntityNotFoundException("The player with ID: " + playerId + " cannot be found in DB", "Player");
        }
    }

    @Override
    public Player createPlayer(Player newPlayer) {
        return playerRepository.save(newPlayer);
    }

    @Override
    public Player savePlayer(Long playerId, Player player) throws EntityNotFoundException{
        Optional<Player> dbPlayer = playerRepository.findById(playerId);
        if (dbPlayer.isPresent()) {
            return playerRepository.save(player);
        } else {
            throw new EntityNotFoundException("The player with ID: " + playerId + " cannot be found in DB", "Player");
        }
    }

    @Override
    public void deletePlayer(Long playerId) {this.playerRepository.deleteById(playerId);}



    @Override
    public String signin(String username, String password) throws AuthenticationException {
//        System.out.println("Avant authenticate :" + username);
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        return jwtTokenProvider.createToken(username, playerRepository.findByUsername(username).get().getRoleList());
    }

    @Override
    public String signup(Player user) throws ExistingUsernameException {
        if (!playerRepository.existsByUsername(user.getUsername())) {
            System.out.println("ServiceImpl signup avant : " + user.getUsername());
            Player userToSave = new Player(user.getUsername(), passwordEncoder.encode(user.getPassword()), user.getRoleList());
            playerRepository.save(userToSave);
            System.out.println("ServiceImpl signup après : " + user.getUsername());
            return jwtTokenProvider.createToken(user.getUsername(), user.getRoleList());
        } else {
            throw new ExistingUsernameException();
        }
    }

    @Override
    public List<Player> findAllUsers() {
        return playerRepository.findAll();
    }

    @Override
    public Optional<Player> findUserByUserName(String username) {
        return playerRepository.findByUsername(username);
    }
}
