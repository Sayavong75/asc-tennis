package co.simplon.asctennisapi.service;

import co.simplon.asctennisapi.exception.EntityNotFoundException;
import co.simplon.asctennisapi.model.Club;
import co.simplon.asctennisapi.repository.service.ClubRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClubServiceImpl implements ClubService {

    private ClubRepository clubRepository;

    public ClubServiceImpl (ClubRepository clubRepository) {
        this.clubRepository = clubRepository;
    }

    @Override
    public List<Club> getClubs() {
        return clubRepository.findAll();
    }

    @Override
    public Club getClubById(Long clubId) throws EntityNotFoundException {
        Optional<Club> dbClub = clubRepository.findById(clubId);
        if (dbClub.isPresent()) {
            return dbClub.get();
        } else {
            throw new EntityNotFoundException("The club with ID: " + clubId + " cannot be found in DB", "Club");
        }
    }

    @Override
    public Club createClub(Club newClub) {
        return clubRepository.save(newClub);
    }

    @Override
    public Club saveClub(Long clubId, Club club) throws EntityNotFoundException{
        Optional<Club> dbClub = clubRepository.findById(clubId);
        if (dbClub.isPresent()) {
            return clubRepository.save(club);
        } else {
            throw new EntityNotFoundException("The club with ID: " + clubId + " cannot be found in DB", "Club");
        }
    }

    @Override
    public void deleteClub(Long clubId) {this.clubRepository.deleteById(clubId);}
}
