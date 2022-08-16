var express = require('express');
const validations = require('../validator')
var hbs = require('hbs')
const quotes = require('../services/quotes');
var app = express()
app.set('views', 'hbs');

async function chart(req, res, next) {
    try {
        console.log("finction is called");
        await validations.user.validateChart(req)
        let data = await quotes.getMultiple(req.query.sitename, req.query.revenue, req.query.page);
        console.log("response date ===>",data);
        res.render('index', { title: JSON.stringify(data), listing: data });
    } catch (error) {
        next(error)
    }
}

async function connection(req, res, next) {
    try {
        await validations.user.validateConnection(req)
        let data = await quotes.getMultiple(req.query.sitename, req.query.revenue, req.query.page);
        res.json(data);
    } catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports = {
    chart,
    connection
}