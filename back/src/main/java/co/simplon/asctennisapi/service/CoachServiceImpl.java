package co.simplon.asctennisapi.service;

import co.simplon.asctennisapi.exception.EntityNotFoundException;
import co.simplon.asctennisapi.model.Coach;
import co.simplon.asctennisapi.repository.service.CoachRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CoachServiceImpl implements CoachService {

    private CoachRepository coachRepository;

    public CoachServiceImpl (CoachRepository coachRepository) {
        this.coachRepository = coachRepository;
    }

    @Override
    public List<Coach> getCoaches() {
        return coachRepository.findAll();
    }

    @Override
    public Coach getCoachById(Long coachId) throws EntityNotFoundException {
        Optional<Coach> dbCoach = coachRepository.findById(coachId);
        if (dbCoach.isPresent()) {
            return dbCoach.get();
        } else {
            throw new EntityNotFoundException("The coach with ID: " + coachId + " cannot be found in DB", "Coach");
        }
    }

    @Override
    public Coach createCoach(Coach newCoach) {
        return coachRepository.save(newCoach);
    }

    @Override
    public Coach saveCoach(Long coachId, Coach coach) throws EntityNotFoundException{
        Optional<Coach> dbCoach = coachRepository.findById(coachId);
        if (dbCoach.isPresent()) {
            return coachRepository.save(coach);
        } else {
            throw new EntityNotFoundException("The coach with ID: " + coachId + " cannot be found in DB", "Coach");
        }
    }

    @Override
    public void deleteCoach(Long coachId) {this.coachRepository.deleteById(coachId);}
}
