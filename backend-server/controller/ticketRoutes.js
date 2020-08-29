const express = require('express');
const ticketRoutes = express.Router();

let Ticket = require('../model/ticket.model')

ticketRoutes.route('/').get(function(req,res){
    Ticket.find(function(err,tickets){
        if(err){
            console.log(err);
        }else{
            res.json(tickets);
        }
    });
});

ticketRoutes.route('/:id').get(function(req,res){
    let id = req.params.id;
    Ticket.findById(id,function(err,ticket){
        if(err){
            console.log(err);
        }else{
            console.log(`params id is ${id}`);
            console.log(ticket)
            res.json(ticket);
        }
    });
});

ticketRoutes.route('/new').post(function(req,res){
    let ticket = new Ticket(req.body);
    ticket.save()
    .then(ticket =>{
        res.status(200).json({'ticket':'ticket added successfully!'});
    })
    .catch(err =>{
        res.status(400).send('adding new ticket failed');
    });
});

ticketRoutes.route('/:id/edit').put(function(req,res){
    Ticket.findByIdAndUpdate(req.params.id,{$set: req.body},{new: true},function(err,result){
        if(err){
            console.log('err in put');
            console.log(err);
        }
        console.log("RESULT: "+ result);
        res.json(result)
    });
});

ticketRoutes.route('/:id/edit').put(function(req,res){
    Ticket.findByIdAndRemove(req.params.id, function(err,ticket){
        if(err){
            return next(err);
        }
        res.send('Deleted Successfully!!!')
    });
});

module.exports = ticketRoutes;