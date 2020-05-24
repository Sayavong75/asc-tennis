package co.simplon.asctennisapi.service;

import co.simplon.asctennisapi.exception.EntityNotFoundException;
import co.simplon.asctennisapi.model.TrainingGroup;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TrainingGroupService {

    /**
     * Training group list retrieval
     */
    List<TrainingGroup> getTrainingGroups();

    /**
     * Get one training group with its ID
     */
    TrainingGroup getTrainingGroupById(Long trainingGroupId) throws EntityNotFoundException;

    /**
     * Create a new training group
     */
    TrainingGroup createTrainingGroup(TrainingGroup newTrainingGroup);

    /**
     * Save an existing training group
     */
    TrainingGroup saveTrainingGroup(Long trainingGroupId, TrainingGroup trainingGroup);

    /**
     * Delete a coach from the training groups array
     */
    void deleteTrainingGroup(Long trainingGroupId);
}
