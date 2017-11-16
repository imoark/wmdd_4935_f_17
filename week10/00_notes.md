# week 10 Nov 16 2017

## agenda 

today:

- hapi plugins
- static pages and templates with inert and vision

next week:

- intro to authentication and validation
- Joi plugin
- a look at a few authentication strategies

## hapi plugins

hapi plugins are a way of providing third party modules to extend a hapi app, we
are going to look at two today. hapi plugins can also be used to encapsulate
functionality within your own app. writing your own hapi plugin to separate your
code is very similar to using the commonjs module pattern to separate
functionality into multiple files. because this is an introductory server side scripting class, i am
going to recommend that for now you become more comfortable with the general
idea of separating your code, and start with the commonjs module pattern. this
can be used by any node app, including hapi. when you are comfortable with this
it will be far easier to create your own hapi plugins.

for now we are going to focus on making use of some of the great hapi plugins
that already exist.

for the curious i have included a link to a tutorial on writing your own plugins in hapi.

[hapi plugins tutorial](https://hapijs.com/tutorials/plugins)

## working with static content and templates

as previously mentioned hapi has a rich ecosystem of plugins to extend the
core functionality of the hapi framework. among these are [inert](https://github.com/hapijs/inert) 
a plugin for handling static content and [vision](https://github.com/hapijs/vision) for working with templates.

### inert

inert provides simplified static file and directory handling as well as a very
eloquent additional security layer. when specifying a directory to serve static
files from, often /public, only files from within that directory are available
on a given route. this prevents potential attackers from gaining access to files
like your app configuration file and other files that you don't want just anyone
to have access to. This type of attack is called a Directory Traversal Attack.

### vision

vision adds functionality for working with a variety of templating engines.
a templating engine is a tool designed to make it easier to add dynamic content
to your markup, think HTML that allows you to pass variables and may have some
form of loop or conditional. you can use pure javascript for this task, but many
people prefer a template engine. the [vision github](https://github.com/hapijs/vision) repo has examples of using
vision with several of the more popular template engines.
