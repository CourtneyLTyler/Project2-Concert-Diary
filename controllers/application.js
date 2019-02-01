const { Concert } = require("../models/Concert")
module.exports = {
    index: (req, res) => {
      Concert.find({})
      .sort({ dateAttended: -1 })
      .populate("author")
      .then(concerts => {
        res.render("app/index", { concerts });
      })
    }
  };
