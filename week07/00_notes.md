# week 07 Oct 26 2017

## agenda

today  
    - working with firebase and JavaScript

next week  
    - intro to Hapi

## getting started

the below snippet is the minimum you need to start interacting with a firebase
real-time database using JavaScript. The last line of code specifies that we
want to enter new data as children of the people node, which will be created
when we first push some data to the database.

```JavaScript
const firebase = require('firebase')

firebase.initializeApp({
  databaseURL: <your database url>
})

const dbRef = firebase.database().ref('people')
```

### about the code examples

Rules(you can find rules in the firebase web console) for our database are set
to 'true' so that anyone can read and write to our database. While this makes
testing out firebase a little easier, don't ever do this in production!

I am using the [firebase module](https://www.npmjs.com/package/firebase) in the
code samples.

## firebase read/write

[read and write docs](https://firebase.google.com/docs/database/web/read-and-write?authuser=0)

## firebase filtering data

[filter and order docs](https://firebase.google.com/docs/database/web/lists-of-data?authuser=0)
