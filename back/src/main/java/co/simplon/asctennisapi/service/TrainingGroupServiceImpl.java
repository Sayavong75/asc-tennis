package co.simplon.asctennisapi.service;

import co.simplon.asctennisapi.exception.EntityNotFoundException;
import co.simplon.asctennisapi.model.TrainingGroup;
import co.simplon.asctennisapi.repository.TrainingGroupRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TrainingGroupServiceImpl implements TrainingGroupService {

    private TrainingGroupRepository trainingGroupRepository;

    public TrainingGroupServiceImpl(TrainingGroupRepository trainingGroupRepository) {
        this.trainingGroupRepository = trainingGroupRepository;
    }

    @Override
    public List<TrainingGroup> getTrainingGroups() {
        return trainingGroupRepository.findAll();
    }

    @Override
    public TrainingGroup getTrainingGroupById(Long trainingGroupId) throws EntityNotFoundException {
        Optional<TrainingGroup> dbTrainingGroup = trainingGroupRepository.findById(trainingGroupId);
        if (dbTrainingGroup.isPresent()) {
            return dbTrainingGroup.get();
        } else {
            throw new EntityNotFoundException("The training group with ID: " + trainingGroupId + " cannot be found in DB", "TrainingGroup");
        }
    }

    @Override
    public TrainingGroup createTrainingGroup(TrainingGroup newTrainingGroup) {
        return trainingGroupRepository.save(newTrainingGroup);
    }

    @Override
    public TrainingGroup saveTrainingGroup(Long trainingGroupId, TrainingGroup trainingGroup) throws EntityNotFoundException {
        Optional<TrainingGroup> dbTrainingGroup = trainingGroupRepository.findById(trainingGroupId);
        if (dbTrainingGroup.isPresent()) {
            return trainingGroupRepository.save(trainingGroup);
        } else {
            throw new EntityNotFoundException("The training group with ID: " + trainingGroupId + " cannot be found in DB", "TrainingGroup");
        }
    }

    @Override
    public void deleteTrainingGroup(Long trainingGroupId) {
        this.trainingGroupRepository.deleteById(trainingGroupId);
    }
}
