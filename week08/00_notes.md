# week 07 june 15 2017

## agenda

today:  
- introduction to hapi
  - routes
  - handlers

next week:  
- API planning

## web frameworks

simply put a web framework is a collection of libraries that together add functionality that aide a developer
in making web apps. 

now that we have looked at using javascript with node alone
for a few weeks you can imagine how complex it would be to write even a simple
web app. common tasks like serving a single static html page with a css file for
style might require that you read files and pass their contents to a response, or better yet use streams then you need
to program routes so that you can have more than one static page and all of that
code and you have only accomplished two simple parts of your app. some of
you may be thinking, do we even need dynamic content and APIs? 

web frameworks provide simplified methods for performing most of the tasks that are commonly associated
with web app development such as handling requests and incorporating a templating
language. web frameworks exist for most languages that you might use to make a
web app and even some that you probably wouldn't use. most languages, JavaScript
included, even have several options for you to chose from and they range from very
minimal, [koa](http://koajs.com/), to larger [sails](http://sailsjs.com/). By
larger and smaller I am referring to functionality. the larger frameworks, a
complete [MVC](https://medium.freecodecamp.com/model-view-controller-mvc-explained-through-ordering-drinks-at-the-bar-efcba6255053)
will usually incorporate additional tools for other common tasks like working with a database, while the more minimal leave 
selecting a third party library for working with a database up to you. larger
frameworks with more functionality are often referred to as *monolithic* and
the more minimal variety as *micro* frameworks.

deciding on a framework depends on what it is you are building as well as the preferences
of your team. if you aren't going to use most of the tools in an
opinionated(this often refers to the fact that the developers of this framework
have made decisions for you, ie it is their opinion that you should do things a
certain way) MVC you might be better of with a smaller framework.

## hapi

> hapi is a simple to use configuration-centric framework with built-in support for input validation, caching, authentication, and other essential facilities for building web and services applications. hapi enables developers to focus on writing reusable application logic in a highly modular and prescriptive approach.
>> [hapi github readme](https://github.com/hapijs/hapi)

this idea of 'configuration-centric' is something that you will encounter in
most descriptions of hapi, it is also one of the reasons that I picked hapi over
[express](https://expressjs.com/) or another framework for this class. we will
come back to this when we start looking at some code.

hapi takes a different approach to the two extremes, *micro* and *monolithic*
mentioned previously. hapi has a small core, with extensive plugins available
for many features often found in monolithic frameworks. if you need them you can
install them as modules with NPM just like any other javascript module. you are
also free to use any other module if you already have one that you prefer.

hapi and many of the available plugins are documented on the hapi site, as
always i encourage you to take a look at some of the docs and tutorials
provided there.

### hapi routes and handlers

a hapi route listens for requests that correspond to an HTTP method (verb) and a
path. a hapi route is a method that takes an object that defines the routes
parameters. this example below is also an example of how hapi is
'configuration-centric'.

```javascript
server.route({
    method: 'GET',
    path:'/hello',
    handler: function (request, reply) {

        return reply('hello world')
    }
})
```

as i mentioned above this 'configuration over code' approach is one of the
reasons that i think hapi is a good fit for teaching and learning a web
framework. the above example is very clear, with even a basic understanding of
HTTP and how web servers work you should have no trouble figuring out what this
example does.

as clear as the above example is, you may have noticed that a few things are missing
from what would be the pure node version. there is no header section that
declares content-type or status code. most of the time hapi takes care of this,
in the above example the reply is a string, so hapi returns a payload with a
content type of text/html. likewise the status code is 200 ok.

if you pass an object the content type is automatically set to application/json.

if you need to specify content type and status code you can do so like this:

`reply('reply').type('text/plain').code(200)`

#### routing table

in part because hapi uses this configuration model for creating routes it is
very easy to create numerous different routes, hapi was made to handle large
complex services. hapi categorizes routes and adds them to a data structure
called the routing table. this is handy when you are working on a large project
as part of a team where different people may be working on different routes. the
order that the routes are added doesn't matter to hapi. hapi also won't allow
you to create conflicting routes.


```javascript
server.route({
  method: 'GET',
  path:'/',
  handler: function (request, reply) {
    return reply('hello world')
  }
})

server.route({
  method: 'GET',
  path:'/',
  handler: function (request, reply) {
    return reply('hello world')
  }
})
```

the example above will return an error. 

so hapi is great for learning a web framework, but it is also extremely powerful
and great for working on a large project as part of team.

### multiple methods

sometimes you need your route to work with more than one HTTP method, this is
very easy in hapi.

`method: ['GET', 'POST']`

### paramaterized strings

when making an API you often need a variable path. for a todo list for example,
perhaps you only want to get specific todo.

`path: '/todos/{todo}'`

there is of course a whole lot more that you can do with hapi routes, we won't
have time to cover everything this term, but we will look at few more things in
later classes.

### handlers

handlers are where you code the response to a matching route. getting, or
sending information to a database for example.

for today we are just going to look at some introductory examples but in future
classes we will look at working with a database as well as static content and
templates.

`handler: function() {}`

## reminder about labs

if you haven't already done so I would start the hapi lab exercises
this week. remember not to leave them until the last week!

## more info on hapi

[official hapi site](https://hapijs.com/)

[hapi tutorials](https://hapijs.com/tutorials)

if you are interested learning more about the origins of hapi [this](https://www.youtube.com/watch?v=Recv7vR8ZlA) presentation 
by hapi creator Eran Hammer is pretty good.
