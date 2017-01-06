const http = require('http');
const router = require('./modules/router');
var server = http.createServer((request,response)=>{
	router.doService(request,response);
}).listen(4000);

console.log("server is running at 4000...");