package co.simplon.asctennisapi.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Arrays;
import java.util.Collections;

/**
 * Global security configuration for our HTTP Rest API.
 */
@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    /**
     * Method that configures web security. Useful here for development purposes to allow h2 console access.
     *
     * @param web the WebSecurity object to configure.
     * @throws Exception
     */
    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/h2-console/**/**");

        web.ignoring().antMatchers("/");
        web.ignoring().antMatchers("/index.html");
        web.ignoring().antMatchers("/favicon.ico");
        web.ignoring().antMatchers("/main.js");
        web.ignoring().antMatchers("/polyfills.js");
        web.ignoring().antMatchers("/runtime.js");
        web.ignoring().antMatchers("/styles.js");
        web.ignoring().antMatchers("/vendor.js");
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return NoOpPasswordEncoder.getInstance();
    }
}
