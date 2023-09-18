const express = require('express');
const morgan = require('morgan');
const app = express();

//settings
app.set('port',3000);


// middlewares
app.use(morgan('combined'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// starting the server

app.listen(app.get, () => {
    console.log(`Server on post ${app.get('port')}`);
});
