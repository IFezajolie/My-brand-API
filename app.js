const express  = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');



//setup environment of variables
dotenv.config();

//creating an instance of express server
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//defining Home routes
app.get("/", (req, res) => {
  res.status(200).send(``);
});

// Connect to MongoDB database
mongoose.set('strictQuery', false); // Allow for more flexible queries
let con = null;
if (process.env.NODE_ENV === "test") {
    con = mongoose.connect(process.env.MONGODB_URL_TEST, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
} else {
    con = mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}
if (con) {
    console.log('Database has been connected')
}

export default app;