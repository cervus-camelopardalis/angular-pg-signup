## Connect Sign up component with PostgreSQL

A user can sign up and his/her data (i.e., e-mail and password) is inserted into PostgreSQL.

---

## Setup

1. Clone the repo: `git clone https://github.com/cervus-camelopardalis/angular-pg-signup.git`
2. Create PostgreSQL database (see `database.sql` file)
3. Insert your database user and password (edit `db.js` file)
4. Install Express modules: `C:\Users\xxxxx\xxxxx\xxxxx\express-server>npm i`
5. Install Angular modules: `C:\Users\xxxxx\xxxxx\xxxxx\angular-client>npm i`
6. Start Express server: `C:\Users\xxxxx\xxxxx\xxxxx\express-server>nodemon server`
7. Run Angular app: `C:\Users\xxxxx\xxxxx\xxxxx\angular-client>ng serve -o`

---

## Screenshots

Test API via Thunder Client:

![Test API](https://github.com/cervus-camelopardalis/angular-pg-signup/blob/main/01-screenshot-test-api.png?raw=true)

Data inserted successfully:

![Success 1](https://github.com/cervus-camelopardalis/angular-pg-signup/blob/main/02-screenshot-test-api-postgres.png?raw=true)

Bob signs up:

![Bob signs up](https://github.com/cervus-camelopardalis/angular-pg-signup/blob/main/03-screenshot-bob-signs-up.png?raw=true)

Alice signs up:

![Alice signs up](https://github.com/cervus-camelopardalis/angular-pg-signup/blob/main/04-screenshot-alice-signs-up.png?raw=true)

Data inserted successfully:

![Success 2](https://github.com/cervus-camelopardalis/angular-pg-signup/blob/main/05-screenshot-postgres.png?raw=true)