# week 9 example notes

## before getting started

you may want to look at the [monk](https://automattic.github.io/monk/) and
[dotenv](https://www.npmjs.com/package/dotenv) docs first. if you haven't seen
promises or async await in javascript, you may want to read up on them as well. 

## get examples and dependencies

clone the repository with git and run `npm install` from within the example directory.

## dotenv

create a '.env' file.

in the .env add `DBURL=the mongodb url provided by mongodb atlas`

add a document to your database for testing.

    {
      _id: 123,
      name: 'your favorite tv or movie robot',
      grades: [78],
      classes: ['french']
    }

now you can run the example with `node app.js`

