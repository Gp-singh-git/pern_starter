const express = require("express");
const app = express();

app.use(express.json());

const cors = require("cors");
app.use(cors({
  origin: ["http://localhost:3000"],
}));

const logger = require('morgan')
app.use(logger('dev'));

const apiRoutes = require('./routes/apiRoutes');
const apiRouter = express.Router();
apiRoutes(apiRouter);
app.use("/api", apiRouter);

const resetRoute = require("./routes/resetRoute")
const resetRouter = express.Router();
resetRoute(resetRouter);
app.use("/reset", resetRouter)


const PORT = 3001;
app.listen(PORT,function() {
  console.log("Server is running");
})