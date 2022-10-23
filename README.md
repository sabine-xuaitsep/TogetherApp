# TogetherApp

CRUD SPA with Vue.js & GraphQL [only READ for now]  
Activity-based networking application


## Setup

**Server**  
GraphQL API with Apollo Server, Sequelize, MySQL  

**Client**  
SPA with Vue.js, Apollo Client, GraphQL  


## Getting Started

### Prerequisite

* Install [Node.js](https://nodejs.org/en/)
* Install a MySQL server ([MAMP](https://www.mamp.info/en/downloads/), [Laragon](https://laragon.org/download/) or another)


### Installing

* Clone the project
* Start your MySQL server
* Create a database
* In the `server` directory, rename `.env.example` file to `.env` 
* Add your configuration to the `.env` file in the `server` directory (DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD)
* In the `client` directory, rename `.env.example` file to `.env` 
* Open a terminal, navigate to the `server` directory and run `npm install`
* Open another terminal, navigate to the `client` directory and run `npm install`


### Fill database

In the terminal at the root of the `server` directory:  
* Run `npx sequelize db:migrate`  
* Then run `npx sequelize db:seed:all`


### Executing program

In each terminal:  
* Run `node index.js` in the root of the `server` directory 
* Run `npm run dev` in the root of the `client` directory 


### Build the app

#### Server
* Copy the DB to your hosting
* Configure your `.env` file
* Copy the `server` directory to your hosting (except for `node_modules` folder & `package-lock.json` file)
* Create, configure & run a `Node.js app` based on these files, with `index.js` as entry point
* Get the URL of your API

#### Client
* Configure the API URL in the `.env` file (VITE_APOLLO_URL)
* Run `npm run build` in the root of the `client` directory
* Copy on your hosting the content of the `dist` directory just created
* Add an .htaccess file to the root as :
```
    <IfModule mod_negotiation.c>
        Options -MultiViews
    </IfModule>
    <IfModule mod_rewrite.c>
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </IfModule>
```


## Authors

[sabine-xuaitsep](https://github.com/sabine-xuaitsep)


## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE.md](https://github.com/sabine-xuaitsep/TogetherApp/blob/main/LICENSE.md) file for details