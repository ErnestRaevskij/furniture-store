require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const authRouter = require('./routers/authRouter.js');
const furnitureRouter = require('./routers/furnitureRouter.js');
const adminRequestsRouter = require('./routers/adminRequestsRouter.js');

const PORT =  process.env.PORT || '3000';

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true}));

app.use('/auth', authRouter);
app.use('/furniture', furnitureRouter);
//app.use('/admin', adminRequestsRouter); // Роутер для добавления/удаления ролей

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (error) {
        console.log(error.message);
    }
}

start();
