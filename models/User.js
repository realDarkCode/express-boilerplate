const { Schema, model } = require("mongoose");

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required"],
			minlength: [3, "Name must be at least 3 characters long"],
			maxlength: [32, "Name must be at most 32 characters long"],
			trim: true,
			lowercase: true,
			validate: {
				validator: function (v) {
					return /^(?:([a-zA-Z]{2,4}\.){0,1} ?([a-zA-Z]{2,24})) ([a-zA-Z]{1,1}\. ){0,1}([a-zA-Z]{2,24} ){0,2}([A-Za-z']{2,24})((?:, ([a-zA-Z]{2,5}\.?)){0,4}?)$/.test(
						v
					);
				},
				message: (props) => `${props.value} is not a valid name`,
			},
		},
		email: {
			type: String,
			trim: true,
			lowercase: true,
			required: [true, "Email is required"],
			unique: [true, "Email already exists"],
			validate: {
				validator: function (v) {
					return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
				},
				message: (props) => `${props.value} is not a valid email`,
			},
		},
		password: {
			type: String,
			required: [true, "Password is required"],
			minlength: [8, "Password must be at least 8 characters long"],
		},
	},
	{ timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
