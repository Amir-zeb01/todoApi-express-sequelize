const express = require('express');
// var bodyParser = require('body-parser')
const cors = require('cors');

const app = express();

const corsOptions ={
    origin:'*', 
    credentials:true,
    optionSuccessStatus:200
 }

// middlewares
app.use(cors(corsOptions));
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
const router = require('./app/routes/todos.route');
app.use('/api', router);


// api connection message
app.get('/', (req, res) => {
    res.json({ message: 'Hello from node and express!' });
});


// server running on http
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
})