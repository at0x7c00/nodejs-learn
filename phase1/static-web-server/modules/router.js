const url = require('url');
const fs = require('fs');
const indexPage = 'index.html';
module.exports = {
	doService : (req,res)=>{
		var requestInfo = url.parse(req.url);
		var pathName = requestInfo.pathname;
		if(pathName=='/'){
			pathName = '/' + indexPage;
		}
		fs.readFile('./webapp' + pathName,'binary',(err,data)=>{
			
			if(err){
				res.writeHead(404,{'Content-type':'text/html'});
				res.end('<h1>404 Not Found</h1><hr/>' + pathName);
			}else{
				res.write(data,'binary');
				res.end('');
			}
		});
		
		//res.writeHead(200,{'Content-type':'text/html'});
		//res.end('');
	}
}