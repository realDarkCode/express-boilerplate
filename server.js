require("dotenv").config();
const http = require("http");
const app = require("./app/app");
const connectDb = require("./db/db");
const checkENV = require("./utils/checkRequiredENV");
const server = http.createServer(app);

// Check if all required ENV variables are set
checkENV();

const PORT = process.env.PORT;
const DATABASE_URI = process.env.DATABASE_URI;

// Connect to MongoDB
connectDb(DATABASE_URI)
	.then(() => {
		console.log("Database Connected Successfully.");
		// Start the server
		server.listen(PORT, () => {
			console.log(`Server Listening on PORT ${PORT}.`);
		});
	})
	.catch((error) => {
		console.log("App couldn't start due to database connection error");
		console.log(error);
	});
