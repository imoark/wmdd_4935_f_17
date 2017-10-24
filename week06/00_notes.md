# week 06 june 08 2017

## agenda

today

- intro to firebase
- CRUD
- httpie
- postman

next week

- working with firebase and JavaScript

## NoSQL

the term NoSQL as it is used today was first used in 2009, but NoSQL databases
have been around since the 1960s. NoSQL(not only SQL) is a general term that
includes databases such as key value stores and document databases. firebase is a
document database that has been around since 2007.

A document database, as the name implies, stores data in documents, firebase documents resemble are JSON.

a document for a user contact might look like this:

```JSON
{
  "name": "nathan",
  "email": ["nmcninch@email.com". "nmcninch@email2.com"],
  "phone": {
    "work": 555.555.5555,
    "home": 555.555.5556
  }
}
```

## BaaS backend as a service

a backend as a service is a tool such as push notifications, user
administration, and storage capabilities, services that are generally part of
the backend of app development. Because many of these services are necessary
components for most web and mobile apps some smart people started creating
flexible services that could be used for a variety of different apps. Many of
these service providers provide a suite of services with tools that perform a
variety of common backend services. This allows a development team to quickly
implement some of the backend APIs that they need for their app. Another
potential advantage to a BaaS is that hosting, management and often scaling are
handled by the BaaS provider.

## CRUD

previously I mentioned that we would be primarily focusing on four HTTP methods:
POST, DELETE, GET and PUT. I also mentioned that this is because these are the
most commonly used methods, corresponding with the actions commonly associated
with moving data to and from a database. CRUD, is an acronym for the four basic
functions of persistent storage, four functions that correspond to the four HTTP
methods that we will be focusing on.

CREATE  |  POST  
READ    |  GET  
UPDATE  |  PUT  
DELETE  |  DELETE  

### crud and firebase

a firebase datebase can be used as a RESTful API to handle your document
database needs. You don't have to do any special configuration to read/write to
your database using the http methods that we have been talking about for the
past two weeks.

[using firebase as a REST API](https://firebase.google.com/docs/reference/rest/database/)

## httpie postman curl

These are tools that can be used to help test an API.
[Curl](https://curl.haxx.se/) and [httpie](https://httpie.org/) are command line
tools. If you are using a Unix like operating system you may already have curl
on your system, but I find httpie has a few little features that make me prefer
it. If you prefer to use a GUI tool you may want to use [postman](https://www.getpostman.com/).

We are going to be testing APIs often throughout the remainder of this class, 
for today we are just going to use httpie to test our firebase datebase. If you
want to follow along or try this at home read the instructions on installing
httpie for your operating system. If you are using C9 you are using an Ubuntu
based operating system and you can install httpie with apt like this:

`sudo apt-get update` this updates the list of packages
`sudo apt-get install httpie` this installs httpie

If you have a newer version of Ubuntu(16.04 or later) on your own machine look
at using apt, instead of apt-get.
