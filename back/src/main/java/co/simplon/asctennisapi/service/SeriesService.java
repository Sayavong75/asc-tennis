package co.simplon.asctennisapi.service;

import co.simplon.asctennisapi.exception.EntityNotFoundException;
import co.simplon.asctennisapi.model.Series;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface SeriesService {

    /** Series list retrieval */
    List<Series> getSeries();

    /** Get one series with its ID */
    Series getSeriesById(Long seriesId) throws EntityNotFoundException;

    /** Create a new series */
    Series createSeries(Series newSeries);

    /** Save an existing series */
    Series saveSeries(Long seriesId, Series series);

    /** Delete a series from the series array */
    void deleteSeries(Long seriesId);
}
