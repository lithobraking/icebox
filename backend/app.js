const createError = require('http-errors');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const knex = require('./database/knex');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const users = require('./routes/users');
const index = require('./routes/index');
const posts = require('./routes/posts');
const orgs = require('./routes/orgs');
const actions = require('./routes/actions');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/api/v1/users', users);
app.use('/api/v1/posts', posts);
app.use('/api/v1/orgs', orgs);
app.use('/api/v1/actions', actions);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}.`);
});

module.exports = app;
