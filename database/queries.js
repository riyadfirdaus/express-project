const Pool = require("pq").Pool;
const pool = new Pool({
  user: "me",
  host: "localhost",
  database: "rakaminbsi",
  password: "Overflow55",
  port: 5432,
});

const getUser = (req, res) => {
  pool.query("SELECT");
};
