package co.simplon.asctennisapi.repository;

import co.simplon.asctennisapi.model.Ranking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RankingRepository extends JpaRepository<Ranking, Long> {
}
