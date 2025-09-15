// Budget API

const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// Import budget-data.json
const budget = require("./budget-data.json");

app.use(cors());

// const budget = {
//   myBudget: [
//     {
//       title: "Eat out",
//       budget: 25,
//     },
//     {
//       title: "Rent",
//       budget: 275,
//     },
//     {
//       title: "Grocery",
//       budget: 110,
//     },
//   ],
// };

app.use("/", express.static("public"));

// Passing budget data to the frontend
app.get("/budget", (req, res) => {
  res.json(budget);
});

app.listen(port, () => {
  console.log(`API served at http://localhost:${port}`);
});
