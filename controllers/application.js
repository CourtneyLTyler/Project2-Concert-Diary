const { Concert } = require("../models/Concert")

module.exports = {
	index: (req, res) => {
		Concert.find({})
			.populate("author")
			.then(concerts => {
				res.render("index", { concerts })
			})
	}
}