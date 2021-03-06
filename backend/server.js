const express = require('express');
const mongoose = require('mongoose');
const {
    data
} = require('./data');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');
const dotenv = require('dotenv');

dotenv.config();

const app = express()
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazona', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use((err, req, res, next) => {
    res.status(500).send({
        message: err.message
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});