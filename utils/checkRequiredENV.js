const error = require("./error");
function checkEnv() {
	const JWT_SIGNATURE = process.env.JWT_SIGNATURE;
	const PORT = process.env.PORT;
	const DATABASE_URI = process.env.DATABASE_URI;

	// Application Port to run on
	if (!PORT) {
		throw error("PORT not set in .env");
	} else if (Number.isNaN(Number(PORT))) {
		throw error("PORT must be a number");
	}
	// Mongodb connection URI to connect to MongoDB
	if (!DATABASE_URI) {
		throw error("DATABASE_URI not set in .env");
	} else if (
		/^(mongodb:(?:\/{2})?)((\w+?):(\w+?)@|:?@?)(\w+?):(\d+)\/(\w+?)$/.test(
			DATABASE_URI
		)
	) {
		throw error("DATABASE_URI is not a valid mongodb URI");
	}
	// JWT Signature to to be used for generating JTW tokens
	if (!JWT_SIGNATURE) {
		throw error("JWT_SIGNATURE not set in .env");
	} else if (typeof JWT_SIGNATURE !== "string") {
		throw error("JWT_SIGNATURE must be a string");
	} else if (JWT_SIGNATURE.length < 10) {
		throw error("JWT_SIGNATURE must be at least 10 characters long");
	}
}

module.exports = checkEnv;
