package co.simplon.asctennisapi.service;

import co.simplon.asctennisapi.exception.EntityNotFoundException;
import co.simplon.asctennisapi.model.Coach;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CoachService {

    /** Coach list retrieval */
    List<Coach> getCoaches();

    /** Get one coach with its ID */
    Coach getCoachById(Long coachId) throws EntityNotFoundException;

    /** Create a new coach */
    Coach createCoach(Coach newCoach);

    /** Save an existing coach */
    Coach saveCoach(Long coachId, Coach coach);

    /** Delete a coach from the coaches array */
    void deleteCoach(Long coachId);
}