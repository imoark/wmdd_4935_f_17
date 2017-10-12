# week 5 Oct 12 2017

## agenda
today
- first api
  - query strings
  - more on HTTP methods
- routes
- REST

next week
- firebase
- CRUD
- httpie, curl and postman

## RESTful API

an API(Application Programming Interface) is a software to software interface, a
specification for how software exchanges data with other software. When you see
API, it usually refers to a web API that uses HTTP to exchange data between a
client and a server. When you buy something online, for example, an API (several different
APIs actually) is used to process your payment. It checks that your credit card
information is correct and lets the online retailer know that your information
is correct(or not).

A REST API is an API that makes use of an architectural style. It isn't a
standard or technology, really more like guidelines to follow when creating an
API.

REST, or RESTFful(Representational State Transfer) is an architectural style
designed by Roy fielding as part of his 2000 dissertation 
"Architectural Styles and the Design of Network-based Software Architectures". 
the core of what makes an API a REST API is its adherence to the six constraints of REST, 
most APIs commonly referred to as REST APIs don't strictly adhere to these
constraints.

### REST constraints

**1. Uniform Interface**  
Individual resources are identified using URLS. The resources (database) are themselves different from the representation (XML, JSON, HTML) sent to the client. The client can manipulate the resource through the representations provided they have the permissions. Each message sent between the client and the server is self-descriptive and includes enough information to describe how it is to be processed. The hypermedia that is hyperlinks and hypertext act as the engine for state transfer.

**2. Stateless Interactions**  
none of the clients context is to be stored on the server side between the request. All of the information necessary to service the request is contained in the URL, query parameters, body or headers.

**3. Cacheable**  
Clients can cache the responses. The responses must define themselves as cacheable or not to
prevent the client from sending the inappropriate data in response to further requests.

**4. Client-Server**  
The clients and the server are separated from each other thus the client is not concerned with the data storage thus the portability of the client code is improved while on the server side the server is not concerned with the client interference thus the server is simpler and easy to scale.

**5. Layered System**  
At any time client cannot tell if it is connected to the end server or to an intermediate. The  intermediate layer helps to enforce the security policies and improve the system scalability by enabling load-balancing

**6. Code on Demand**  
an optional constraint where the server temporarily extends the functionality of a client by the transfer of executable code.

constraint definitions from [rest principles explained](https://www.servage.net/blog/2013/04/08/rest-principles-explained/)

### REST alternatives

SOAP(Simple Object Access Protocol)

SOAP was defined around the same time as REST(late 90s/early 00s) and while not
nearly as popular and therefor considerably less likely to be implemented in new
APIs SOAP does still exist.

GraphQL and Falcor on the other hand are both quite recent and were created by
Facebook and Netflix respectively to address some of the issues that developers
face as reliance upon APIs and API complexity increase. GraphQL has become very
popular in the last year and I encourage you to at least look at both of the
links below.

[GraphQL](http://graphql.org/)

[Falcor](https://netflix.github.io/falcor/)

### additional resources

[simple what is an API](https://www.youtube.com/watch?v=s7wmiS2mSXY)

[what is rest](http://www.restapitutorial.com/lessons/whatisrest.html)

[roy fielding's dissertation](https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm)

## http methods in node

last week we looked at four HTTP methods, GET, PUT, POST and DELETE. We can make
use of these methods by programming node to send a different response for
different incoming HTTP methods.

`request.method == 'POST'`

## routes

routes indicate what resources should be returned and how they should be handled when a
client connects to a certain endpoint. for example `site.com` may be our home
page that a client requests and receives a response of an HTML, CSS, JavaScript
combination. but `site.com/api/financial` may require authentication and
responded with a JSON representation of some data on a database.

you can specify this with `request.url === '/about'` this would correspond to
`site.com/about`

## query strings

query strings are additional information passed into a URL, usually to, well
query an API. for example, if we are looking for all of people with birthdays in
June your query string might look like: `http://site.com/api?birthday=june` the
query string begins with the '?'

if documents in our database look something like this:
{
  name: 'Fargo',
  birthday: 'June',
  ...
}

we might get a json representation of the database with all June birthdays.

### querystring module

the querystring module provides functions for parsing and formatting URL query
strings.

`querystring.parse()` returns an object from a query string

`querystring.stringify()` returns a query string from an object

[nodejs docs](https://nodejs.org/api/querystring.html)

