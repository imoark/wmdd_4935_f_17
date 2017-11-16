# assignment 04, Book lending API

using tools that have been covered in class, hapi, Joi...

code an API with the described functionality below:

    /* description:
       you are coding the books routes for a book lending API
       this service keeps track of a small book lending operation, perhaps for a
       small, independent library such as one in a museum.
    */
    
    *books*

    books should include a minimum of:

    -- title
    -- _id (this can be an isbn, or mongodb id) this should be unique
    -- author
    -- genre
    -- publication information (date published, publisher... this should probably
       be an object)
    -- availability (is the book out, or reserved, this should be an object,
       this could also be part of copies object, libraries often have more than one
       copy. copies might include edition information. this should probably
       indicate who has the book if it is borrowed)

    /books

    GET, get a list of books this could include an optional limit(get the first
    5 books...)
    POST, add a book to your database

    elements: /books/{book id(isbn or unique id of some kind)}

    GET, get an individual book
    PUT/PATCH, update the information about a book
    DELETE, delete a book

    queries:
    -- genre get all books by genre genre=mystery
    -- title get all books with key words in a title title=the long goodbye (you
    can use a regular expression for this with your database and mongodb find, title: /the long
    goodbye/)
    -- author get all books by an author author=raymond chandler

    **authentication: as authentication is not a requirement of the assignment if
    you decide to add authentication it is up to you to come up with a logical
    authentication and authorization policy.


PUT and POST methods will need validation schemas in Joi.

you should be using contemporary JavaScript (ie es6 es7... features)

your code should be modular, (don't submit just an index.js, break your API up
logically)

The choice of database is up to you with one caveat: It needs to be a cloud
hosted database, not one locally installed. You can use firebase, mongodb(with
atlas), dynamoDB...

**ask any questions sooner rather later**

## hand in instructions:

please follow these carefully.

at least one team member should create a new github hosted repository for your
assignment. in your github repository include a README.md with a minimum of the
following information:
- team members names.
- everything i need to know to test your app locally.

please make sure to also include your package.json

if your API has been deployed provide documentation for how I can test it.

when your groups API is complete please inform me by email, in the
email include a link to your project on github. Please make the title of this email
assignment-04-API.

## Due date

### Saturday December 02, by the end of the day

## additional functionality

for students more advanced or students seeking to challenge themselves you can
consider adding one or more of the following.

authentication, any authentication should be appropriate for an API   

deployment using Now or Heroku (talk to me beforehand if you would like to use
another platform)

add users to your API.

    *users*

    users should have a minimum of:

    name
    _id (you can use the mongodb id) this should be unique
    email address
    books borrowed (this can be an object that contains due date information)
    books reserved
    late fees
    
    /users

    GET, get a list of all users
    POST, create a new user

    elements: /users/{id}

    GET, get an individual users
    PUT/PATCH, update a user
    DELETE, delete a user

    queries:
    -- late_fees  find all of the users with late fees

    users should probably be a separate collection inside of your database.

