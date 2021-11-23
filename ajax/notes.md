Async vs Sync

/---------------------------------------------

Synchronous
> executed line by line in the execution thread
> each line of code waits for previous line to finish
> long-running operations block code execution

Code Example:
const p = document.querySelector('p');
p.textContent = 'My name is Jonas';
alert('Text set!')
p.style.color = 'red';

/---------------------------------------------

Asynchronous
> code is executed after a task that runs in the background finishes
> async code is non-blocking
> execution doesn't wait for asynchronous task to finish its work
> callback will run after timer
> callback does not automatically make code async
> addEventListener does NOT automatically make code asynchronous

Code Example:
const p = document.querySelector('p');
setTimeout(function () {
    p.textContent = 'My name is Jonas'
}, 5000)
p.style.color = 'red'

Code Example: setting img source attribute
> setting a images source attribute is asynchronous because you don't wait until
  the image is loading

const img = document.querySelector('dog')
img.src = 'dog.jpg'
img.addEventListener('load', function () {
    img.classList.add('fadeIn')
})
p.style.width = '300px'

/---------------------------------------------

AJAX: Asynchronous Javascript and XML
> allows us to communicate with remote web servers in an asynchronous way
> with AJAX calls we can request data from web servers dynamically
                "Asking for data"
Request-response model or Client-server architecture
Client ------------ Request -------------> Web Server (usually a web API)
Client <------------ Response ------------ Web Server

https://restcountries.com/rest/v2/alpha/PT
Protocol: HTTP or HTTPS
Domain name: restcountries.com (DNS converts domain to the real IP address)
Resource: /rest/v2/alpha/PT

https://104.27.142.889:443
Protocol: HTTP or HTTPS
IP Address: 104.27.142.889
Port Number: Default 443 for HTTPs || 80 for HTTP

> Client makes a request to the server for the real IP address through the DNS
> a TCP / IP socket connection is made with the Client and the Web Server
> TCP: transmission control protocol
   > breaks request and responses down to chunks called packets
   > once packets have arrived TCP will resemble the packets
> IP: Information protocol
   > its job is to send and route the packets through the internet
> TCP / IP set rules
> Client then makes a HTTP request to the server
    > Example HTTP Request Message
    GET /rest/v2/alpha/PT HTTP/1.1 :
    - Start line: HTTP method + request target + HTTP version

   - HTTP request headers -
    HTTP version
    Host: www.google.com
    User-Agent: Mozilla/5.0
  - Accept-Language: en-US -

    <BODY> : Request body (only when sending data to server e.g. POST)

    > Example HTTP Response Message
    HTTP/1.1 200 OK 404 not okay
    - Start line: HTTP version + status code + status message

    - HTTP response headers -
    Date: Fri, 18 Jan 2021
    Content-Type: text/html
    Transfer-Encoding: chunked

    <BODY>   Response body

> index.html is the first to be loaded
> scanned for assets: JS, CSS, images
> process is repeated for each file

DNS: Domain name server
RESTful API
> stands for representational state transfer
## Criteria for an API to be considered RESTful
> client-server architecture made up of clients, servers, and resources, with
   requests managed through HTTP
> stateless client-server communication meaning no client information is stored
  between get requests and each request is separate and unconnected
> cacheable data
/---------------------------------------------

Application Programming Interface (API):
> piece of software that can be used by another piece of software in order to
 allow applications to talk to each other
> There are many types of APIs in web development
    > DOM API
    > Geolocation API
    > Own Class API
    > "Online" API

"Online" API: application running on a server that recieves requests for data, and sends data back as response

Own APIS: requires backend development (e.g. node) or use 3rd party APIs
Examples of 3rd Party APIS
> weather data
> data about countries
> flights data
> currency conversion data
> APIs for sending email or SMS
> Google maps

/---------------------------------------------

Callback Hell

