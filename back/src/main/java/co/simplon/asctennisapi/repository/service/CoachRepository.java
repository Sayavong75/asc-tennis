package co.simplon.asctennisapi.repository.service;

import co.simplon.asctennisapi.model.Coach;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CoachRepository extends JpaRepository<Coach, Long> {
}
