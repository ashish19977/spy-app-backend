const mongoose = require("mongoose")

const AppSchema = new mongoose.Schema(
	{
		name: String,
        apps: [{}],
		time: Date,
		ip: String,
		host: String,
		androidVer: String,
	}
)

const AppModel = mongoose.model('App', AppSchema, 'apps')

module.exports = { AppModel }