package co.simplon.asctennisapi.service;

import co.simplon.asctennisapi.exception.EntityNotFoundException;
import co.simplon.asctennisapi.model.Club;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ClubService {

    /** Club list retrieval */
    List<Club> getClubs();

    /** Get one club with its ID */
    Club getClubById(Long clubId) throws EntityNotFoundException;

    /** Create a new club */
    Club createClub(Club newClub);

    /** Save an existing club */
    Club saveClub(Long clubId, Club club);

    /** Delete a club from the clubs array */
    void deleteClub(Long clubId);

}
