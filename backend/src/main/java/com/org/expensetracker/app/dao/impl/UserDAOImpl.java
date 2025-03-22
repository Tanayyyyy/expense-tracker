package com.org.expensetracker.app.dao.impl;

import java.util.UUID;

import com.org.app.dto.user.UserEntity;
import com.org.expensetracker.app.dao.SQLQueryConstants;
import com.org.expensetracker.app.dao.UserDAO;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class UserDAOImpl implements UserDAO {

    private final JdbcTemplate jdbcTemplate;

    public UserDAOImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public void createUser(UserEntity userEntity) {
        //todo: make util for DB queries
        this.jdbcTemplate.update(SQLQueryConstants.INSERT_USER, UUID.randomUUID().toString(), userEntity.getEmail(), userEntity.getUserName(), userEntity.getPasswordHash());
    }
}
