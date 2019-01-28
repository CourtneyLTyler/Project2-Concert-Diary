// this will be the homepage, index is only controller action needed

module.exports = {
    index: (req, res) => {
      res.send('show this string')
      res.render('index', { page: 'homepage' })
    }
  }