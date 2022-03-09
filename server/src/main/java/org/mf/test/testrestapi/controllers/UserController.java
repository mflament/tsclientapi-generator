package org.mf.test.testrestapi.controllers;

import com.github.javafaker.Faker;
import org.mf.test.testrestapi.api.Address;
import org.mf.test.testrestapi.api.User;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ConcurrentModificationException;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@RestController
@RequestMapping(path = "/user")
public class UserController {

    private final Map<String, User> users;

    public UserController() {
        this.users = mockUsers(20);
    }

    /**
     * Get all the users
     *
     * @return the users list
     */
    @GetMapping
    public List<User> getUsers() {
        return List.copyOf(users.values());
    }

    /**
     * Get the user with the given id.
     *
     * @param id the user id
     * @return the user with id id
     */
    @GetMapping("{id}")
    public User getUser(@PathVariable("id") @NotNull String id) {
        User user = users.get(id);
        if (user == null)
            throw new NoSuchElementException("User " + id + " not found");
        return user;
    }

    @PostMapping
    public User createUser(@RequestBody @Valid User user) {
        if (users.putIfAbsent(user.getId(), user) != null)
            throw new ConcurrentModificationException();
        return user;
    }

    @PutMapping("{id}")
    public User updateUser(@PathVariable("id") @NotNull String id, @RequestBody @Valid User user) {
        if (!users.containsKey(id))
            throw new NoSuchElementException("No user " + user.getId());
        validateId(id, user);
        users.put(id, user);
        return user;
    }

    @DeleteMapping("{id}")
    public void deleteUser(@PathVariable("id") @NotNull String id) {
        if (users.remove(id) == null)
            throw new NoSuchElementException("No user " + id);
    }

    @ResponseStatus(HttpStatus.NOT_FOUND)  // 404
    @ExceptionHandler(NoSuchElementException.class)
    public String handleNotFound(Exception e) {
        return e.getMessage();
    }

    @ResponseStatus(HttpStatus.CONFLICT)  // 409
    @ExceptionHandler(ConcurrentModificationException.class)
    public String handleConflict(Exception e) {
        return e.getMessage();
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)  // 400
    @ExceptionHandler(IllegalArgumentException.class)
    public String handleIllegalArgument(Exception e) {
        return e.getMessage();
    }

    private static void validateId(String id, User user) {
        if (!user.getId().equals(id))
            throw new IllegalArgumentException("Invalid user id " + user.getId() + ", expecting " + id);
    }

    private static Map<String, User> mockUsers(int count) {
        Faker faker = new Faker();
        return IntStream.range(0, count)
                .mapToObj(i -> randomUser(i + 1, faker))
                .collect(Collectors.toMap(User::getId, Function.identity()));
    }

    private static User randomUser(int id, Faker faker) {
        LocalDate birthDate = LocalDate.ofInstant(faker.date().birthday().toInstant(), ZoneId.systemDefault());
        return new User(Integer.toString(id), faker.name().firstName(), faker.name().lastName(),
                birthDate, randomAddress(faker));
    }

    private static Address randomAddress(Faker faker) {
        return new Address(faker.address().streetAddress(), faker.address().state(), faker.address().city(), faker.address().country());
    }
}
