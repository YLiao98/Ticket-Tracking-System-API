# Ticket-Tracking-System-API
### Overview
This is a complete full stack web application running locally. Specifically, this app has four functions: create a ticket, edit the ticket, view all current tickets and delete the ticket. This app uses a number of open soure projects to work properly:
* [React] - Javascript library for building UI!
* [MongoDB] - Our server for storing tickets
* [Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework 


### Backend
1. In the backend directory, run ```$ npm install ``` in terminal to install dependencies needed to run the server. Dependencies: 
   * body-parser
   * cors
   * express
   * mongoose
   * dotenv
   * nodemon
2. Before running the server, make sure you have a valid mongo connection url in a ```.env``` file.
3. Run ```$ npm start ``` to start running the server. Now server runs on ```localhost:4000```. 
4. There are five routes to handle different reqeust/response: 
   * view all added tickets on ```localhost:4000/tickets```
   * post a new ticket on ```localhost:4000/tickets/new```
   * view a specific ticket on ```localhost:4000/tickets/:id```
   * update a ticket information on ```localhost:4000/tickets/:id/edit```
   * delete a ticket on ```localhost:4000/tickets/:id/delete```

### React App
1. In tickets-client directory, run ```$ npm install ``` in terminal to install dependencies needed to run the server.
2. Run ```$ npm start ``` to start running the server. Now server runs on homepage ```localhost:3000```.
3. There are three components on the web page: ```createTicketComponent```, ```viewTicketsComponent```, and ```editTicketComponent```.
   * ```createTicketComponent```:
        * Redirects to  ```localhost:3000/create```
        * Renders a ticket form
        * Post the form to ```localhost:4000/tickets/new```
    * ```viewTicketsComponent```:
        * Gets all available tickets on the homepage ```localhost:3000``` from ```localhost:4000/tickets``` and renders the page
        * For each ticket, there are two actions available: 
            * Edit: redirects to  ```localhost:3000/:id/edit```
            * delete: send DELETE request to ```localhost:4000/tickets/:id/delete``` and update homepage.
    * ```editTicketComponent```:
        *  Redirects to ```localhost:3000/:id/edit``` and retrieve information that match the id from ```localhost:4000/tickets/:id```
        *  Update the form and send PUT request to ```localhost:4000/tickets/:id/edit```, update the ticket on backend.
        *  After updating, redirects to homepage.



[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [MongoDB]: <https://www.mongodb.com/>
   [node.js]: <http://nodejs.org>
   [Bootstrap]: <https://getbootstrap.com/>
   [express]: <http://expressjs.com>
   [React]: <https://reactjs.org/>
