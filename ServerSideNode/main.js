require("dotenv").config({ path: "./config.env" });
const express = require('express');
//const bodyParser = require('body-parser');
var cors = require('cors');

const errorHandler = require('./middleware/error');

let app = express();

app.use(cors())
app.use(express.urlencoded({extended : true}))
app.use(express.json());

app.use(errorHandler);

const jwt = require('jsonwebtoken');

const moviesRouter = require('./routers/movieRouter');
const memberRouter = require('./routers/MemberRouter');
const subscriptionRouter = require('./routers/SubscriptionRouter');
const authRouter = require('./routers/auth');


require('./configs/database');




app.use('/api/movies',moviesRouter)
app.use('/api/subscriptions',subscriptionRouter)
app.use('/api/members',memberRouter)
app.use('/api/auth',authRouter)


app.listen(8000);