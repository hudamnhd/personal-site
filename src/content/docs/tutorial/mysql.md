---
title: Cara Instalasi MySql di Debian
description: Cara Instalasi berdasar dokumentasi MySql
---

## Cara Instalasi berdasar dokumentasi MySql

<https://dev.mysql.com/doc/refman/8.4/en/linux-installation-apt-repo.html>

## Daftar Perintah umum

- **Show databases:**

  ```sql
  SHOW DATABASES;
  ```
- **Login:**

  ```sql
  mysql -u root -p;
  ```

- **Set or Change Password:**

  ```sql
  ALTER USER 'user_name'@'localhost' IDENTIFIED BY 'new_password';
  ```

  ```sql
  ALTER USER 'root'@'localhost' IDENTIFIED BY '12345678';
  ```

- **Create Database:**

  ```sql
  CREATE DATABASE nama_database;
  ```

- **Use Database:**

  ```sql
  USE nama_database;
  ```

- **Create Tabel:**

  ```sql
  CREATE TABLE nama_tabel (
      kolom1 tipe_data1,
      kolom2 tipe_data2,
      ...
  );
  ```

- **Get Data:**

  ```sql
  SELECT kolom1, kolom2 FROM nama_tabel WHERE kondisi;
  SELECT * FROM nama_tabel;
  SELECT col2 FROM tb1
  ```

- **Add New Data:**

  ```sql
  INSERT INTO nama_tabel (kolom1, kolom2) VALUES (nilai1, nilai2);
  ```

- **Update Data:**

  ```sql
  UPDATE nama_tabel SET kolom1 = nilai1 WHERE kondisi;
  ```

- **Delete Data:**

  ```sql
  DELETE FROM nama_tabel WHERE kondisi;
  ```

- **Delete Tabel:**

  ```sql
  DROP TABLE nama_tabel;
  ```

- **Delete Database:**

  ```sql
  DROP DATABASE nama_database;
  ```

- **Join Data:**

  ```sql
  SELECT kolom1, kolom2 FROM tabel1
  JOIN tabel2 ON tabel1.kolom_id = tabel2.kolom_id;
  ```

- **Describe Tabel:**

  ```sql
  DESCRIBE nama_tabel;
  ```

- **Rename Tabel:**

  ```sql
  RENAME TABLE nama_tabel_lama TO nama_tabel_baru;
  ```

- **Export Database:**

  ```sql
  mysqldump -u username -p nama_database > nama_file_backup.sql
  ```

- **Import Database:**

  ```sql
  mysql -u username -p nama_database < nama_file_backup.sql
  ```
