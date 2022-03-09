package org.mf.test.testrestapi.api;

import javax.validation.constraints.NotNull;

public class Planet {
    private final String name;
    private final int diameterKms;
    private final long averageDistanceToSun;

    public Planet(String name, int diameterKms, long averageDistanceToSun) {
        this.name = name;
        this.diameterKms = diameterKms;
        this.averageDistanceToSun = averageDistanceToSun;
    }

    public String getName() {
        return name;
    }

    public int getDiameterKms() {
        return diameterKms;
    }

    public long getAverageDistanceToSun() {
        return averageDistanceToSun;
    }

}
