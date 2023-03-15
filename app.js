//creating an instance of express server
const express  = require('express');
const app = express();

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const createBlog = require('./src/routes/blogRoutes.js');
const fetchBlog = require('./src/routes/blogRoutes.js');
const fetchSingleBlog = require('./src/routes/blogRoutes.js');
const deleteBlog = require('./src/routes/blogRoutes.js');
const findBlog = require('./src/routes/blogRoutes.js');

const myRouter = require('./myRouter');
app.use('/api', myRouter);

//User login
// app.use(
//     cookieSession({
//         name: "IFezaaJolie",

//     })

//setup environment of variables
dotenv.config();


app.use(cors());
app.use(bodyparser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());

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
app.use('/myAPI',createBlog)
app.use('/myAPI',fetchBlog)
app.use('/myAPI',fetchSingleBlog)
app.use('myAPI',deleteBlog)
app.use('myAPI',findBlog)
module.exports = app;

