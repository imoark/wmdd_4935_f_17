# week 09 Nov 09 2017

## agenda

today:

- go over last weeks quiz
- dotenv
- hapi and working with a database

next week:

- more hapi and a database
- hapi plugins vision and inert

## databases and hapijs

there isn't really a trick to working with a database using hapi, handler
functions within routes simply contain functions that read, write... to a
database.

## dotenv

[dotenv](https://www.npmjs.com/package/dotenv) is a module that allows you to
store environment variables in a separate .env file. this is a good practice for
isolating more sensitive data from your application code.

