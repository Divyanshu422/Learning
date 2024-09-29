# Lecture 2:

- Promopt to open the Mysql client in the terminal:
  - `mysql -u root -p`: is used to log into the MySQL client using the root user account.
  - password: 123456789 in my case

![Meaning of the command](./Images/1.LoginCommand.png)

### Creating the schema in MySQL:

- `CREATE DATABSE ${Name_of_dataBase}`

### To use the database/schema we need the following command:

- `use ${Name_of_dataBase}`

### Other command:

- `SELECT USER()`: This command retrieves the username and hostname of the current MySQL user that is connected to the server. It returns a string in the format 'username@hostname'.
- `SELECT DATABASE()`: This command retrieves the name of the currently selected database (schema) in the session. It returns the name of the database if one is selected; otherwise, it returns NULL.

### Comments in the sql:

- In SQL, comments are used to add explanatory notes or annotations to your code. There are 2 type of comments:

  A. `Single line comments`: Single-line comments are used for brief notes. You can use two dashes (--) followed by your comment.
  B. `Multi-Line Comments`: Multi-line comments can span multiple lines and are enclosed within /* and */
