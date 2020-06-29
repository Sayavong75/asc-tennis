package co.simplon.asctennisapi.service;

import co.simplon.asctennisapi.exception.EntityNotFoundException;
import co.simplon.asctennisapi.model.TrainingDay;
import co.simplon.asctennisapi.repository.TrainingDayRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TrainingDayServiceImpl implements TrainingDayService {

    private TrainingDayRepository trainingDayRepository;

    public TrainingDayServiceImpl(TrainingDayRepository trainingDayRepository) {
        this.trainingDayRepository = trainingDayRepository;
    }

    @Override
    public List<TrainingDay> getTrainingDays() {
        return trainingDayRepository.findAll();
    }

    @Override
    public TrainingDay getTrainingDayById(Long trainingDayId) throws EntityNotFoundException {
        Optional<TrainingDay> dbTrainingDay = trainingDayRepository.findById(trainingDayId);
        if (dbTrainingDay.isPresent()) {
            return dbTrainingDay.get();
        } else {
            throw new EntityNotFoundException("The training day with ID: " + trainingDayId + " cannot be found in DB", "TrainingDay");
        }
    }

    @Override
    public TrainingDay createTrainingDay(TrainingDay newTrainingDay) {
        return trainingDayRepository.save(newTrainingDay);
    }

    @Override
    public TrainingDay saveTrainingDay(Long trainingDayId, TrainingDay trainingDay) throws EntityNotFoundException {
        Optional<TrainingDay> dbTrainingDay = trainingDayRepository.findById(trainingDayId);
        if (dbTrainingDay.isPresent() && trainingDay.getId().equals(trainingDayId)) {
            return trainingDayRepository.save(trainingDay);
        } else {
            throw new EntityNotFoundException("The training day with ID: " + trainingDayId + " cannot be found in DB", "TrainingDay");
        }
    }

    @Override
    public void deleteTrainingDay(Long trainingDayId) {
        this.trainingDayRepository.deleteById(trainingDayId);
    }
}
