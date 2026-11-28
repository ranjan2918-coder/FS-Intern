// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout finished");
// }, 2000)

// setImmediate(() => {
//   console.log("Immediate finished");
// },0)

// Promise.resolve().then(() => {
//   console.log("Promise finished");
// })

// console.log("end");

// const os = require("os");
// console.log(os);

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.totalmem());

// const fs = require("fs");
// fs.writeFile("test.txt", "Hello World", (err) => {
//   if (err) throw err;
//   console.log("File created");

//   fs.appendFile("test.txt", "Hello World", (err) => {
//     if (err) throw err;
//     console.log("File updated");

    // fs.readFile("test.txt", "utf8", (err, data) => {
    //   if (err) throw err;
    //   console.log(data);
    // });
//   });
// });

// fs.unlink("test.txt", (err) => {
//   if (err) throw err;
//   console.log("File deleted");
// })

const http = require("http");
const PORT = 5000;
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");

    if(req.url === "/home") {
        res.end("<h1>Welcome to Home Page</h1>");
    }else if(req.url === "/contact") {
        res.end("<h1>Welcome to Contact Page</h1>");
    }else if(req.url === "/about") {
        res.end("<h1>Welcome to About Page</h1>");
    }else if(req.url === "/products") {
        res.writeHead(200, { "Content-Type": "application/json" });
        const products = [
            { id: 1, name: "Product 1", price: 100 },
            { id: 2, name: "Product 2", price: 200 }
        ];
        res.end("Display Products: " + JSON.stringify(products));
    } else {
        res.statusCode = 404;
        res.end("<h1>404 - Page Not Found</h1>");
    }
  
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});