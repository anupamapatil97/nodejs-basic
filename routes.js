
const requestHandler=(req, res)=>{
    const url= req.url
    const method= req.method
    const body=[]
    if(url==="/"){
        res.write(`
        <html>
        <head><title>Assignment 1</title></head>
        <body>
        <div><h1>Welcome to node js first assignment</h1>
        <form action="/create-user" method="POST">
        <input type="text" name="username" placeholder="Enter Username"/>
        <button type="submit">Submit</button>
        </form>
        </div>
        </body>
        </html>
        `)
        res.end()
    }

    if(url==="/users"){
        res.write(`
        <html>
        <head><title>Assignment 1</title></head>
        <body>
        <div><ul>
        <li>User 1</li>
        <li>User 2</li>
        </ul></div>
        </body>
        </html>
        `)
        res.end()
    }
    if(url==="/create-user"){

        req.on("data",(chunk)=>{
            body.push(chunk)
        })
         req.on('end',()=>{
            const parsedBody= Buffer.concat(body).toString()
            console.log(parsedBody.split("=")[1])
           
        })
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
}

module.exports= requestHandler