const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const indexRouter = require('./routes/router');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`)});
