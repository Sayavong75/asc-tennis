package co.simplon.asctennisapi.controllers;

import co.simplon.asctennisapi.dto.AppUserDto;
import co.simplon.asctennisapi.dto.JsonWebToken;
import co.simplon.asctennisapi.exception.ExistingUsernameException;
import co.simplon.asctennisapi.model.AppUser;
import co.simplon.asctennisapi.service.AppUserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * This controller is in charge of responding to http calls on /api/users.
 * It manages user registration, user authentication and can provide user related data to Admin users.
 */
@RestController
@RequestMapping("/api/users")
public class AppUserController {
    private AppUserService appUserService;

    public AppUserController(AppUserService appUserService) {
        this.appUserService = appUserService;
    }

    /**
     * Method to register a new user in database.
     *
     * @param user the new user to create.
     * @return a JWT if sign up is ok, a bad response code otherwise.
     */
    @PostMapping("/sign-up")
    public ResponseEntity<JsonWebToken> signUp(@RequestBody AppUser user) {
        System.out.println("Controller SignUp : " + user);
        try {
            return ResponseEntity.ok(new JsonWebToken(appUserService.signup(user)));
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
    public ResponseEntity<JsonWebToken> signIn(@RequestBody AppUser user) {
        System.out.println("Controller SigIn : " + user.getUsername() + ", password : " + user.getPassword()
                + ", role : " + user.getRoleList());
        try {
            return ResponseEntity.ok(new JsonWebToken(appUserService.signin(user.getUsername(), user.getPassword())));
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
        return appUserService.findAllUsers().stream().map(appUser -> new AppUserDto(appUser.getId(), appUser.getUsername(), appUser.getRoleList())).collect(Collectors.toList());
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
        Optional<AppUser> appUser = appUserService.findUserByUserName(appUserName);
        if (appUser.isPresent()) {
//            return ResponseEntity.ok(new AppUserDto(appUser.get().getUsername(), appUser.get().getRoleList()));
            return ResponseEntity.ok(new AppUserDto(appUser.get().getId(), appUser.get().getUsername(), appUser.get().getRoleList()));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * Save an existing appUser
     */
    @PutMapping("/{username}")
    public ResponseEntity<AppUser> saveAppUser(@PathVariable String username, @RequestBody AppUser appUser) {
        System.out.println("Controller saveUser : " + username);
        try {
            return ResponseEntity.ok(this.appUserService.saveAppUser(username, appUser));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

}
