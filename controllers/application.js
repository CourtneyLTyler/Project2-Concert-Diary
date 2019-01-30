const { Concert } = require("../models/Concert")
module.exports = {
    index: (req, res) => {
      Concert.find({})
      .sort({ createdAt: -1 })
      .limit(10)
      .populate("author")
      .then(concerts => {
        res.render("app/index", { concerts });
      })
    }
  };
