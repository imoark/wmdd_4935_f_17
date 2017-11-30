# week 12 Nov 29 2017

## agenda

this week:
- quiz 03
- now
  - deploying apps and static sites with now


## now

"now is a general solution for hosting and deploying internet services over the HTTP/2 protocol, 
with a focus on simplicity, speed, security and scale." -- zeit.co/now

now is one of the quickest, easiest ways to deploy a project that i have seen,
in terms of simplicity i really can't imagine how now could be made
easier to use. as the above description states 'now is a general solution for
hosting...' that means that you can use now for static sites, an app written in
Go, or Rust or any other language. because we have been working with node in this class, we are going to focus on
using now with apps and services written in JavaScript.

because now is itself a JavaScript app you can install now with npm,  
`npm install -g now`. the '-g' is for global, we have been focusing on installing
modules locally for projects, but sometimes it makes sense to install one copy
of a module and use that binary for all of your projects.

if `npm install -g now` complains about permission errors, [fix your npm
permission](https://docs.npmjs.com/getting-started/fixing-npm-permissions).

if you don't see any errors try `now --version` if you get a version number
everything should be ready to go.

the first time you use now you will be asked to provide an email address and now
will send you an email for verification. after you have verified your email
address you will have a '.now.json' file in your home directory with a token that will be used to verify
your account on subsequent uses.

now has documentation on deploying a node service, using docker with now and
static sites, i have included links to the docs below and i will leave it up to
you to read those.

because the now documentation node example uses zeit's(the team that created and maintains
now) *micro* tool there is one small change that will need to be made to use a
hapi app. now uses a 'start' script in the projects package.json to start your
app, the micro module includes a binary that allows you to start a micro project
with `micro`. in order to start another app we can use the same method that we
have been using all along, `node index.js`  in your package.json, instead of
`"start": "micro"` that is used in the documentation example add `"start": "node
index.js"` to your package.json.

now uses your package.json file to start your app and install any dependencies.

### now cli basics

in addition to the now command that is used to deploy an app or service now-cli
has a few other useful commands that you are likely to use often.

commands for listing all deployments, deleting a deployment, adding an alias...

we will look a few of these today.

[now cli](https://zeit.co/docs/features/now-cli)

### other now resources

[now](https://zeit.co/now)  
[now docs](https://zeit.co/docs)  
[awesome zeit](https://github.com/zeit/awesome-zeit)

### node_prune

remove unnecessary files from node_modules

[node_prune](https://github.com/tj/node-prune)
