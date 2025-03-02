package com.org.expensetracker.app.dao.impl;

import com.org.app.dto.user.UserEntity;
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
        this.jdbcTemplate.execute("""
        UPDATE User SET id = '1';
        """);
    }
}
