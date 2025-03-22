CREATE TABLE IF NOT EXISTS Users
(
    id              VARCHAR(100)         PRIMARY KEY,
    username        VARCHAR(100)         NOT NULL,
    email           VARCHAR(100)         NOT NULL UNIQUE,
    password        VARCHAR(100)         NOT NULL,
    deleted         BOOLEAN              DEFAULT FALSE NOT NULL,
    created_ts      TIMESTAMP(6)         DEFAULT CURRENT_TIMESTAMP(6) NOT NULL,
    update_ts       TIMESTAMP(6)         DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6) NOT NULL
);
