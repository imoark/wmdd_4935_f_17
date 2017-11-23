# week 11 July 13 2017

## agenda

today:

- validating data with Joi
- authentication
  - bearer token
  - json web token

next week:

- quiz 03
- deployment and transitioning from development to production


## Joi

i have seen validation compared to flossing your teeth; no one wants to do it,
and sometimes we forget, but if you don't do it you will be in trouble later.

beyond any comparisons to personal hygiene, not only is validating important, but good,
clear validating is important. we have all probably written some data validation
logic like this `if (someVal !== 0)`. it works, but it is potentially unclear. 
Joi makes writing clean, easy to read data validation straightforward.

before writing about implementing a validation strategy with Joi, it is probably
a good idea to clarify what validation is. last week i suggested that you think
of it as a check list. if we are creating an app that allows new users to sign
up and create an account there are probably a few things that we need them to
provide: user name, name, password... maybe our app is a 'beer of the month club' and we need new 
users to also provide some form of proof indicating that they are of legal
drinking age in their province or state. for now let's stick to the basics. 
and create a checklist for a name, user name and email address.  
name: perhaps name can only contain letters, and should include at least one
space(if you want at least first and last in one field).  
user name: a user name should perhaps have a minimum and maximum number of
characters, and needs to be unique.  
email address: an email address needs to be well, an email address, @
.something... and it needs to be unique.  
validating is checking that a new user account has all of these and testing that
all of the criteria of each is met.

Joi is installed as a dependency with hapi, so in a hapi app you don't need to
install Joi, just require the module and you are ready to start validating.

to get started you can create a variable to test against.

`const userName = Joi.string().min(5).required()`

i imagine that the above example needs little explanation, but just in cases:
the above specifies that a new user name should be string, at least 5 characters long
and that it is required.

the above can be validated against a string like this:

`Joi.validate('doctorWho', userName)`

Joi.validate returns an object, `{error, value}`

most of the time you are going to be validating an object, a new user for
example, will probably have more information attached to them than just a user
name. creating a schema to validate objects is also pretty simple with Joi.

    const newUser = {
      name: userName,
      email: Joi.string().email().required()
    }

the Joi.validate() method can still be used to validate an object.

so far none of these examples require hapi, you can use Joi to validate objects
with a koa or express app just as easily. in hapi validating can be done
directly from within the configuration of a route, i have included a small
example of this that we will look at in class today.

[Joi API documentation](https://github.com/hapijs/joi/blob/v10.6.0/API.md)  
[hapi Joi tutorial](https://hapijs.com/tutorials/validation?lang=en_US)

## authentication

often when people talk about authentication, they are in fact talking about two
separate things, authentication and authorization.

authentication is a means of positively identifying a user.

authorization is what a user is allowed to access once they have been
identified.

authentication is yet another broad topic with many solutions. hapi has plugins
that allow you to implement a large number of authentication strategies, and of
course you aren't restricted to using plugins that already exist.

authentication in hapi is generally thought of in schemes and strategies

### schemes

a scheme is a general type of authentication, HTTP basic for example. Schemes
are often described as a template for authentication in hapi.

### strategies
a strategy is a specific configuration of an instance of a scheme. for example,
you could use Basic authentication for two schemes, one that checks a password
against one store in a database that belongs to a specific user, and another
that is a hardcoded value that anyone can use. a testing account for a web
application for example.

[hapi-auth-bearer-simple](https://github.com/Salesflare/hapi-auth-bearer-simple)  
[hapi-auth-bearer-token](https://github.com/johnbrett/hapi-auth-bearer-token)

[more about JWTs](https://jwt.io/)  
[jwt hapi tutorial](https://auth0.com/blog/hapijs-authentication-secure-your-api-with-json-web-tokens/)

### third party login Bell

[Bell plugin](https://github.com/hapijs/bell)
