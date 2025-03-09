const Pool = require('pg').Pool
const pool = new Pool({
      user: 'postgres',
      password: 'abu55abu',
      host: 'localhost',
      port: 5432,
      database: "instagram"
}
)


module.exports = pool