const app = require('./app');
const dotenv = require ('dotenv');
const mongoose = require ('mongoose');


mongoose.set('strictQuery',false); 

dotenv.config();

const port = process.env.PORT;
const host = process.env.HOST;

const startServer = () => app.listen(port);
Promise.all([startServer()]).then(()=>{
    console.log(`server is running at http://${host}:${port}`)
}).then((err) => console.log(err));