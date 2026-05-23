require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");

connectDB();

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//DB URL:mongodb+srv://annontechie_db_user:0Iq2u7xUzHJ7e23b@cluster0.7rbqirb.mongodb.net/?appName=Cluster0
