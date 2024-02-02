const fs = require("fs");
const seedQuery = fs.readFileSync("./database/seed.sql", { encoding: "utf8" });

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "rakaminbsi",
  password: "Overflow55",
  port: 5432,
});

pool.query(seedQuery, (err, res) => {
  console.log(err, res);
  console.log("seeding completed!");
  pool.end();
});
