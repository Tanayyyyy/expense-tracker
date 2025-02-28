package com.org.expensetracker.app.service;

import com.org.app.dto.user.CreateUserRequestDTO;

public interface UserService {
    void createUser(CreateUserRequestDTO requestDTO);
}
