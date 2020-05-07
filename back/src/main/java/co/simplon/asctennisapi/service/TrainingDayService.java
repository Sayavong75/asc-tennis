package co.simplon.asctennisapi.service;

import co.simplon.asctennisapi.exception.EntityNotFoundException;
import co.simplon.asctennisapi.model.TrainingDay;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TrainingDayService {

    /** Training day list retrieval */
    List<TrainingDay> getTrainingDays();

    /** Get one training day with its ID */
    TrainingDay getTrainingDayById(Long trainingDayId) throws EntityNotFoundException;

    /** Create a new training day */
    TrainingDay createTrainingDay(TrainingDay newTrainingDay);

    /** Save an existing training day */
    TrainingDay saveTrainingDay(Long trainingDayId, TrainingDay trainingDay);

    /** Delete a coach from the training days array */
    void deleteTrainingDay(Long trainingDayId);

}
