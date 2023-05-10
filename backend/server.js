const express = require("express")
const session = require("express-session")
const MongoSessionStore = require("connect-mongodb-session")(session)
const { MongoClient } = require("mongodb")

const client = new MongoClient(process.env.DB_URL)


require("dotenv").config()

//create server app
const server = express();

const store = new MongoSessionStore({
    uri: process.env.DB_URL,
    collection: process.env.SESSION_STORE
});

//set the session as middleware
server.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: store
}))


//set up the endpoints
server.get("/", (request, response) => {
    request.session.isLoggedIn = true
    request.session.current_user = {
        firstname: "James",
        lastname: "John"
    }

    console.log(request.session)
    response.send({
        message: "API working fine"
    })

})

server.post("/login", (request, response) => {
    //
    request.session.isLoggedIn = true
    console.log(request.session)
    response.send({})

})


//listening
server.listen(process.env.PORT, () => console.log(`Server is running on http://localhost:${process.env.PORT}`))



