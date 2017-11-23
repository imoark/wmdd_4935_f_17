# bearer token authentication example

## bearer token plugin

there are two currently developed bearer token plugins for hapi, i am using
[this one](https://github.com/johnbrett/hapi-auth-bearer-token) in the example.

## testing
unfortunately a plugin is needed to test bearer token authentication with httpie, one exists, but we can 
also test this with [postman](https://www.getpostman.com/). since i have used
httpie a few times now i am going to use postman for this.

to test the authenticated route in postman a header needs to be added, click on
the 'headers' menu and add 'Authorization' as the key and 'Bearer secret' as the
value, just like the image below.

![postman image](./pman.png)


after adding the header click SEND, and if everything works you should see the
isAuthenticated: yes object like the image.
