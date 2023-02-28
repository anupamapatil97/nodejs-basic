const http= require('http')
const route= require("./routes")

const port =3000

const server = http.createServer(route)

server.listen(port)