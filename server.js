const koa = require('koa');

const app = koa();

app.use(function *(){
	let date;
	let formattedString;
	const reqString = this.request.url.substr(1);
	if (/%20/.test(reqString)) {
		formattedString = reqString.replace(/%20/g, ' ');
	}

	(reqString == +reqString) ? date = new Date(+reqString) : date = new Date(formattedString);

	const validDate = Object.prototype.toString.call(date) === "[object Date]" && isNaN(date.getTime());
	const unix = date.getTime() || null;
	const standard = validDate ? null : date.toDateString();
	this.body = JSON.stringify({unix, standard});
});

app.listen(3000);
