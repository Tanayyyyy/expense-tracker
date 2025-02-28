package com.org.expensetracker.app.facade;

import com.org.app.dto.user.UserEntity;
import com.org.expensetracker.app.dao.UserDAO;
import org.springframework.stereotype.Component;

@Component
public class UserFacade {
    private final UserDAO userDAO;

    public UserFacade(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    public void createUser(UserEntity userEntity) {
        this.userDAO.createUser(userEntity);
    }
}
