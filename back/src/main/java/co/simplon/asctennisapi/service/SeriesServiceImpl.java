package co.simplon.asctennisapi.service;

import co.simplon.asctennisapi.exception.EntityNotFoundException;
import co.simplon.asctennisapi.model.Series;
import co.simplon.asctennisapi.repository.SeriesRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SeriesServiceImpl implements SeriesService {

    private SeriesRepository seriesRepository;

    public SeriesServiceImpl(SeriesRepository seriesRepository) {
        this.seriesRepository = seriesRepository;
    }

    @Override
    public List<Series> getSeries() {
        return seriesRepository.findAll();
    }

    @Override
    public Series getSeriesById(Long seriesId) throws EntityNotFoundException {
        Optional<Series> dbSeries = seriesRepository.findById(seriesId);
        if (dbSeries.isPresent()) {
            return dbSeries.get();
        } else {
            throw new EntityNotFoundException("The series with ID: " + seriesId + " cannot be found in DB", "Series");
        }
    }

    @Override
    public Series createSeries(Series newSeries) {
        return seriesRepository.save(newSeries);
    }

    @Override
    public Series saveSeries(Long seriesId, Series series) throws EntityNotFoundException {
        Optional<Series> dbSeries = seriesRepository.findById(seriesId);
        if (dbSeries.isPresent()) {
            return seriesRepository.save(series);
        } else {
            throw new EntityNotFoundException("The series group with ID: " + seriesId + " cannot be found in DB", "Series");
        }
    }

    @Override
    public void deleteSeries(Long seriesId) {
        this.seriesRepository.deleteById(seriesId);
    }

}
