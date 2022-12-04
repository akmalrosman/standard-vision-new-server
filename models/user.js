const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
	fullname: { type: String, required: true },
	email: { type: String, required: true },
	role: { type: String, require: true },
	password: { type: String, required: true },
	active: { type: String, required: true }
}, { timestamps: true } );

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		fullname: Joi.string().required().label("FullName"),
		email: Joi.string().email().required().label("Email"),
		role: Joi.string().required().label("Role"),
		password: passwordComplexity().required().label("Password"),
		active: Joi.string().required().label("Active"),
	});
	return schema.validate(data);
};

module.exports = { User, validate };