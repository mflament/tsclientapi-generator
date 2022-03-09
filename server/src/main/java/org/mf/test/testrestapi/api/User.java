package org.mf.test.testrestapi.api;

import com.fasterxml.jackson.annotation.JsonCreator;

import javax.validation.Valid;
import javax.validation.constraints.*;
import java.time.LocalDate;

public class User {

    @NotEmpty
    @Size(max = 9)
    private final String id;

    @NotEmpty
    @Size(max = 128)
    private final String firstName;

    @NotEmpty
    @Size(max = 128)
    private final String lastName;

    @NotNull
    @Past
    private final LocalDate birthDate;

    @NotNull
    @Valid
    private final Address address;

    @JsonCreator
    public User(String id, String firstName, String lastName, LocalDate birthDate, Address address) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.address = address;
    }

    /**
     * @return the user id
     */
    public String getId() {
        return id;
    }

    /**
     * blah blah blah
     * @return the user first name
     */
    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public Address getAddress() {
        return address;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", birthDate=" + birthDate +
                ", address=" + address +
                '}';
    }

    public static Builder builder() {
        return new Builder();
    }

    public static final class Builder {

        private String id;
        private String firstName;
        private String lastName;
        private LocalDate birthDate;

        private String alacon;

        private Address address;

        private Builder() {
        }

        private Builder(User user) {
            id = user.id;
            firstName = user.firstName;
            lastName = user.lastName;
            birthDate = user.birthDate;
            address = user.address;
        }

        public Builder withId(String id) {
            this.id = id;
            return this;
        }

        public Builder withFirstName(String firstName) {
            this.firstName = firstName;
            return this;
        }

        public Builder withLastName(String lastName) {
            this.lastName = lastName;
            return this;
        }

        public Builder withBirthDate(LocalDate birthDate) {
            this.birthDate = birthDate;
            return this;
        }

        public Builder withAddress(Address address) {
            this.address = address;
            return this;
        }

        public User build() {
            return new User(id, firstName, lastName, birthDate, address);
        }
    }
}
