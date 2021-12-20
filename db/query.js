module.exports = {
  GET_USERS:
    'select userid, username, active from pos.usermst where active=true order by id desc',
  ADD_USER: 'INSERT into pos.usermst(username, pass) values ($1, $2)',
  UPDATE_USER: 'UPDATE pos.usermst SET username = $1 where userid = $2',
  DELETE_USER: 'UPDATE pos.usermst SET active = $1 where userid = $2',
  GET_USER_BY_NAME:
    'select username, pass from pos.usermst where username = $1',
  GET_ALL_EMP: 'select * from pos.usermst',
  GET_CATEGORIES: 'select * from pos.categorymst',
}
