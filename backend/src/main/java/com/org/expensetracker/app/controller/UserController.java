package com.org.expensetracker.app.controller;

import com.org.app.dto.user.CreateUserRequestDTO;
import com.org.expensetracker.app.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/user")
public class UserController {
    private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/create")
    public void createUser(@RequestBody CreateUserRequestDTO requestDTO){
        LOGGER.info("Create user request: {}", requestDTO);
        this.userService.createUser(requestDTO);
    }
}
