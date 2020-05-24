package co.simplon.asctennisapi.model;

import org.springframework.security.core.GrantedAuthority;

/**
 * User possible roles.
 */
public enum Role implements GrantedAuthority {

    NO_ROLE, ROLE_ADMIN, ROLE_READER;

    @Override
    public String getAuthority() {
        return name();
    }
}