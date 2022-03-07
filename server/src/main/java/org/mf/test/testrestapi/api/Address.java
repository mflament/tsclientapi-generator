package org.mf.test.testrestapi.api;

import com.fasterxml.jackson.annotation.JsonCreator;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

public class Address {

    @NotEmpty
    @Size(max = 256)
    private final String street;

    @NotEmpty
    @Size(max = 64)
    private final String state;

    @NotEmpty
    @Size(max = 96)
    private final String city;

    @NotEmpty
    @Size(max = 64)
    private final String country;

    @JsonCreator
    public Address(String street, String state, String city, String country) {
        this.street = street;
        this.state = state;
        this.city = city;
        this.country = country;
    }

    public String getStreet() {
        return street;
    }

    public String getState() {
        return state;
    }

    public String getCountry() {
        return country;
    }

    public String getCity() {
        return city;
    }

    @Override
    public String toString() {
        return "Address{" +
                "street='" + street + '\'' +
                ", state='" + state + '\'' +
                ", city='" + city + '\'' +
                ", country='" + country + '\'' +
                '}';
    }
}
