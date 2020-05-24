package co.simplon.asctennisapi.service;

import co.simplon.asctennisapi.exception.EntityNotFoundException;
import co.simplon.asctennisapi.model.Ranking;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface RankingService {

    /**
     * Ranking list retrieval
     */
    List<Ranking> getRankings();

    /**
     * Get one ranking with its ID
     */
    Ranking getRankingById(Long rankingId) throws EntityNotFoundException;

    /**
     * Create a new ranking
     */
    Ranking createRanking(Ranking newRanking);

    /**
     * Save an existing ranking
     */
    Ranking saveRanking(Long rankingId, Ranking ranking);

    /**
     * Delete a ranking from the rankings array
     */
    void deleteRanking(Long rankingId);
}
