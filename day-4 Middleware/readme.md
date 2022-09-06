# DNS Server (Domain Name Server)
### Node. js dns module is used to do actual DNS lookup as well as to use underlying operating system name resolution functionalities. This module provides an asynchronous network wrapper and can be imported using the following syntax.

- The node:dns module enables name resolution. For example, use it to look up IP addresses of host names.

- Although named for the Domain Name System (DNS), it does not always use the DNS protocol for lookups. dns.lookup() uses the operating system facilities to perform name resolution. It may not need to perform any network communication. To perform name resolution the way other applications on the same system do, use dns.lookup().

-const dns = require('node:dns');
<code>
dns.lookup('example.org', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});
</code>


# Express Middleware 

- middleware is just a function which run between the request and response 

- Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.

- Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

- HOF any fuction that is passed to an argument to other function


## Types of middleware
1.custom middleware
2.express middleware
3.community middleware




## Custom middleware
``` javascript
const authenticationLogger = (req, res, next) => {
	if (req.query.name == "admin") {
		next();
	} else {
		res.send("not authenticated");
	}
};

// app.use(welcomeLogger);
app.use(express.json());

//? acefdb

app.get("/", (req, res) => {
	const result = fs.readFileSync("./random.txt", "utf-8");
	// console.log("result: ", result);
	res.send(result);
});
app.get("/about", authenticationLogger, (req, res) => {
	res.send("about");
});
```




## Express middleware
- Router middleware <br>
```javascript
const express = require('express')
const app = express()
const router = express.Router()

// a middleware function with no mount path. This code is executed for every request to the router
router.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path

router.use('/user/:id', (req, res, next) => {
  console.log('Request URL:', req.originalUrl)
  next()
}, (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
})

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/user/:id', (req, res, next) => {
  // if the user ID is 0, skip to the next router
  if (req.params.id === '0') next('route')
  // otherwise pass control to the next middleware function in this stack
  else next()
}, (req, res, next) => {
  // render a regular page
  res.render('regular')
})

// handler for the /user/:id path, which renders a special page
router.get('/user/:id', (req, res, next) => {
  console.log(req.params.id)
  res.render('special')
})

// mount the router on the app
app.use('/', router) 
```


## Community middleware
- CORS middleware

