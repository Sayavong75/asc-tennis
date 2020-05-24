package co.simplon.asctennisapi.controllers;

import co.simplon.asctennisapi.model.Series;
import co.simplon.asctennisapi.service.SeriesService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/series")
@CrossOrigin("http://localhost:4200")
public class SeriesController {

    private SeriesService seriesService;

    public SeriesController(SeriesService seriesService) {
        this.seriesService = seriesService;
    }

    /**
     * Series list retrieval
     */
    @GetMapping
    public List<Series> getSeries() {
        return seriesService.getSeries();
    }

    /**
     * Get one series with its ID
     */
    @GetMapping("/{seriesId}")
    public Series getSeriesById(@PathVariable Long seriesId) {
        return seriesService.getSeriesById(seriesId);
    }

    /**
     * Create a new series
     */
    @PostMapping
    public Series createSeries(@RequestBody @Valid Series newSeries) {
        return seriesService.createSeries(newSeries);
    }

    /**
     * Save an existing series
     */
    @PutMapping("/{seriesId}")
    public ResponseEntity<Series> saveSeries(@PathVariable Long seriesId, @RequestBody Series series) {
        try {
            return ResponseEntity.ok(this.seriesService.saveSeries(seriesId, series));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    /**
     * Delete a series from the series array
     */
    @DeleteMapping("/{seriesId}")
    public void deleteSeries(@PathVariable Long seriesId) {
        seriesService.deleteSeries(seriesId);
    }
}
