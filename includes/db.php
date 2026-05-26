<?php
// db.php — MySQL connection (PDO)
// Update these credentials in cPanel > MySQL Databases

define('DB_HOST', 'localhost');
define('DB_NAME', 'kalparuchi_db');
define('DB_USER', 'kalparuchi_user');
define('DB_PASS', 'CHANGE_ME');
define('DB_CHARSET', 'utf8mb4');

function get_pdo(): PDO {
    static $pdo = null;
    if ($pdo === null) {
        $dsn = sprintf('mysql:host=%s;dbname=%s;charset=%s', DB_HOST, DB_NAME, DB_CHARSET);
        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ];
        $pdo = new PDO($dsn, DB_USER, DB_PASS, $options);
    }
    return $pdo;
}

// ── Schema (run once in phpMyAdmin or cPanel SQL tab) ──────────────────────
/*
CREATE TABLE IF NOT EXISTS enquiries (
    id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name       VARCHAR(120)  NOT NULL,
    email      VARCHAR(200)  NOT NULL,
    company    VARCHAR(200)  DEFAULT NULL,
    phone      VARCHAR(40)   DEFAULT NULL,
    product    VARCHAR(120)  DEFAULT NULL,
    message    TEXT          NOT NULL,
    ip         VARCHAR(45)   DEFAULT NULL,
    created_at DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS newsletter (
    id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email      VARCHAR(200) NOT NULL UNIQUE,
    created_at DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
*/
