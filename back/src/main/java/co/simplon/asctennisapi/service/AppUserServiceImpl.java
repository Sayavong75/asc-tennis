package co.simplon.asctennisapi.service;

import co.simplon.asctennisapi.exception.EntityNotFoundException;
import co.simplon.asctennisapi.exception.ExistingUsernameException;
import co.simplon.asctennisapi.model.AppUser;
import co.simplon.asctennisapi.repository.AppUserRepository;
import co.simplon.asctennisapi.security.JwtTokenProvider;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppUserServiceImpl implements AppUserService {

    private AppUserRepository appUserRepository;
    private BCryptPasswordEncoder passwordEncoder;
    private JwtTokenProvider jwtTokenProvider;
    private AuthenticationManager authenticationManager;

    public AppUserServiceImpl(AppUserRepository appUserRepository, BCryptPasswordEncoder passwordEncoder,
                              JwtTokenProvider jwtTokenProvider, AuthenticationManager authenticationManager) {
        this.appUserRepository = appUserRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtTokenProvider = jwtTokenProvider;
        this.authenticationManager = authenticationManager;
    }

    @Override
    public String signin(String username, String password) throws AuthenticationException {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        return jwtTokenProvider.createToken(username, appUserRepository.findByUsername(username).get().getRoleList());
    }

    @Override
    public String signup(AppUser user) throws ExistingUsernameException {
        System.out.println("AppUser signUp : " + user.getUsername() + " role :" + user.getRoleList());
        if (!appUserRepository.existsByUsername(user.getUsername())) {
            // Create new user's account
            AppUser userToSave = new AppUser(user.getUsername(), passwordEncoder.encode(user.getPassword()), user.getRoleList());
            appUserRepository.save(userToSave);
            return jwtTokenProvider.createToken(user.getUsername(), user.getRoleList());
        } else {
            throw new ExistingUsernameException();
        }
    }

    @Override
    public List<AppUser> findAllUsers() {
        return appUserRepository.findAll();
    }

    @Override
    public Optional<AppUser> findUserByUserName(String username) {
        return appUserRepository.findByUsername(username);
    }

    @Override
    public AppUser saveAppUser(String username, AppUser appUser) throws EntityNotFoundException {
        Optional<AppUser> dbAppUser = appUserRepository.findByUsername(username);
        if (dbAppUser.isPresent() && appUser.getUsername().equals(username)) {
            return appUserRepository.save(appUser);
        } else {
            throw new EntityNotFoundException("The appUser with username: " + username + " cannot be found in DB", "AppUser");
        }
    }
}
