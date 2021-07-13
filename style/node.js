var unirest = require("unirest");

var req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/fixtures/live");

req.query({
	"timezone": "Europe/London"
});

req.headers({
	"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
	"x-rapidapi-key": "6cee04ae8emshad7ffabbedab90dp1cab87jsncb97ea21af51"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
