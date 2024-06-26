// 1, import json server library
const jsonServer = require('json-server')

// 2, create path for db.json file using router method --for storing data
const router = jsonServer.router('db.json')

// 3, create middleware to convert JSON to JS - defaults()

const middleware = jsonServer.defaults()

// 4, Create json server 
const mediaPlayerServer = jsonServer.create()

// 5, Server should use middleware and router
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

// 6, Set port for the server
const PORT = 3000 || process.env.PORT /* choose the available ports other than 3000 */

// 7, to run server in the above port 
mediaPlayerServer.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})