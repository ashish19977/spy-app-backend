const mongoose = require("mongoose")

const AppSchema = new mongoose.Schema(
	{
		name: String,
        apps: [{}],
	}
)

const AppModel = mongoose.model('App', AppSchema, 'apps')

module.exports = { AppModel }