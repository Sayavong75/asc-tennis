package co.simplon.asctennisapi.service;

import co.simplon.asctennisapi.exception.EntityNotFoundException;
import co.simplon.asctennisapi.model.Ranking;
import co.simplon.asctennisapi.repository.RankingRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RankingServiceImpl implements RankingService {

    private RankingRepository rankingRepository;

    public RankingServiceImpl(RankingRepository rankingRepository) {
        this.rankingRepository = rankingRepository;
    }

    @Override
    public List<Ranking> getRankings() {
        return rankingRepository.findAll();
    }

    @Override
    public Ranking getRankingById(Long rankingId) throws EntityNotFoundException {
        Optional<Ranking> dbRanking = rankingRepository.findById(rankingId);
        if (dbRanking.isPresent()) {
            return dbRanking.get();
        } else {
            throw new EntityNotFoundException("The ranking with ID: " + rankingId + " cannot be found in DB", "Ranking");
        }
    }

    @Override
    public Ranking createRanking(Ranking newRanking) {
        return rankingRepository.save(newRanking);
    }

    @Override
    public Ranking saveRanking(Long rankingId, Ranking ranking) throws EntityNotFoundException {
        Optional<Ranking> dbRanking = rankingRepository.findById(rankingId);
        if (dbRanking.isPresent()) {
            return rankingRepository.save(ranking);
        } else {
            throw new EntityNotFoundException("The ranking with ID: " + rankingId + " cannot be found in DB", "Ranking");
        }
    }

    @Override
    public void deleteRanking(Long rankingId) {
        this.rankingRepository.deleteById(rankingId);
    }
}
