// home page controller - shows all posted concerts

const { Concert } = require("../models/Concert")

module.exports = {
	index: (req, res) => {
		Concert.find({})
			.sort({ createdAt: -1 })
			.populate("author")
			.then(concerts => {
				res.render("app/index", { concerts })
			})
	}
}