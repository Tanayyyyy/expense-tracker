package com.org.expensetracker.app.dao.impl;

import com.org.app.dto.user.UserEntity;
import com.org.expensetracker.app.dao.UserDAO;
import org.springframework.stereotype.Repository;

@Repository
public class UserDAOImpl implements UserDAO {

    @Override
    public void createUser(UserEntity userEntity) {
        //todo: make util for DB queries
    }
}
