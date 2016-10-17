const koa = require('koa');

const app = koa();

app.use(function *(){
	const reqString = this.request.url.substr(1);
	if (/%20/.test(reqString)) {
		const formattedString = reqString.replace(/%20/g, ' ');
	}
	const date = new Date(formattedString || reqString);
	const unix = date.getTime();
	const standard = date.toDateString();
	this.body = JSON.stringify({unix, standard});
});

app.listen(3000);
