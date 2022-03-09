package org.mf.test.testrestapi.controllers;

import org.mf.test.testrestapi.api.Planet;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Nullable;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/planet")
public class PlanetController {

    private final List<Planet> planets = createPlanets();

    @GetMapping
    public List<Planet> getPlanets(@RequestParam(name = "name", required = false) @Nullable String namePrefix) {
        if (namePrefix != null)
            return planets.stream().filter(p -> p.getName().startsWith(namePrefix)).collect(Collectors.toList());
        return planets;
    }

    private static List<Planet> createPlanets() {
        return List.of(
                new Planet("Mercury", 4880, 57910000L),
                new Planet("Venus", 12104, 108200000L),
                new Planet("Earth", 12756, 149600000L),
                new Planet("Mars", 6794, 227940000L),
                new Planet("Jupiter", 142984, 778330000L),
                new Planet("Saturn", 120536, 1429400000L),
                new Planet("Uranus", 51118, 2870990000L),
                new Planet("Neptune", 49532, 4504000000L));
    }


}
