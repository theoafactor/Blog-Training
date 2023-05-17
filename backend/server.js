const express = require("express")
const session = require("express-session")
const cors = require("cors");
require("dotenv").config()
const MongoSessionStore = require("connect-mongodb-session")(session)
const { MongoClient } = require("mongodb")

const client = new MongoClient(process.env.DB_URL)




//create server app
const server = express();

const store = new MongoSessionStore({
    uri: process.env.DB_URL,
    collection: process.env.SESSION_STORE
});

server.use(express.json())

server.use(cors())

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


server.post("/adminlogin", async (request, response) => {

    console.log("works")

    console.log(request.body)

    let username = request.body.username;
    let password = request.body.password;

    const result = await client.db(process.env.DB_NAME).collection("admins").findOne({"username": username, "password": password } );

    if(result){
        //login the user
        request.session.admin_logged_in = true;
        request.session.current_admin = result

        response.send({
            message: 'Admin logged in',
            code: "success",
            data: {
                current_admin: username,
                token: "token"
            }
        })
        
    }else{

        response.send({
            message: "Admin could not be found",
            code: "error",
            data: null
        })

    }



})


//listening
server.listen(process.env.PORT, () => console.log(`Server is running on http://localhost:${process.env.PORT}`))



