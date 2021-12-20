const { GET_CATEGORIES } = require('../db/query')
const { executeQuery } = require('../helpers/utils')

const getCategoriesList = async () => {
  return await executeQuery(GET_CATEGORIES)
}

module.exports = {
  getCategoriesList,
}
