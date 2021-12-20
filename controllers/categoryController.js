const { getCategoriesList } = require('../services/CategoryService')
const logger = require('../helpers/winston').logger('home.js')

const getCategories = async (req, res, next) => {
  try {
    const result = await getCategoriesList()
    res.json(result.rows)
  } catch (err) {
    logger.error(err.message)
    next(err)
  }
}

module.exports = {
  getCategories,
}
