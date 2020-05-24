package co.simplon.asctennisapi;

import co.simplon.asctennisapi.model.AppUser;
import co.simplon.asctennisapi.model.Role;
import co.simplon.asctennisapi.service.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

@SpringBootApplication
public class AscTennisApiApplication implements CommandLineRunner {

    @Qualifier("appUserServiceImpl")
    @Autowired
    AppUserService userService;

    public static void main(String[] args) {
        SpringApplication.run(AscTennisApiApplication.class, args);
    }

    /**
     * Init method that loads some data in database.
     *
     * @param params
     * @throws Exception
     */
    @Override
    public void run(String... params) throws Exception {
//        AppUser norole = new AppUser("no_login", "norole", new ArrayList<>(Collections.singletonList(Role.NO_ROLE)));
//        userService.signup(norole);

//        AppUser admin = new AppUser("sayasake", "passepartout", new ArrayList<>(Arrays.asList(Role.ROLE_ADMIN, Role.ROLE_READER)));
//        userService.signup(admin);

//        AppUser reader = new AppUser("ricky", "labellevie", new ArrayList<>(Collections.singletonList(Role.ROLE_READER)));
//        userService.signup(reader);
    }
}
