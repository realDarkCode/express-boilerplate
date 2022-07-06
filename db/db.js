const mongoose = require("mongoose");
const error = require("../utils/error");
function connectDB(connectionUri) {
	if (!connectionUri) throw error("Connection URI is required");
	return mongoose.connect(connectionUri);
}

module.exports = connectDB;
