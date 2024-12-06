const express = require('express');

const user = require('./controllers/user.controller');
const journalEntry = require('./controllers/journalEntry.controller');

const app = express();

app.use(express.json());

app.get('/users', user.getAll);
app.get('/user/:id', user.getById);
app.post('/user', user.create);
app.put('/user/:id', user.update);
app.delete('/user/:id', user.remove);
app.get('/journalEntry/:id', journalEntry.getById);
app.post('/journalEntry', journalEntry.create);
app.put('/journalEntry/:id', journalEntry.update);
app.delete('/journalEntry/:id', journalEntry.remove);

module.exports = app;
