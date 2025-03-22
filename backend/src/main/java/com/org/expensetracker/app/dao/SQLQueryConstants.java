package com.org.expensetracker.app.dao;

public class SQLQueryConstants {

    //language=MySQL
    public static final String INSERT_USER = """
       INSERT INTO Users (id, email, username, password) values (?, ?, ?, ?);
       """;
}
