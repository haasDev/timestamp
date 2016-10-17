const koa = require('koa');

const app = koa();

app.use(function *(){
	const reqString = this.request.url.substr(1);
	const formattedString = reqString.replace(/%20/g, ' ');
	this.body = JSON.stringify({formattedString});
});

app.listen(3000);
