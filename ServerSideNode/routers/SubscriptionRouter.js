const express = require('express');
const subscriptionsBL = require('../models/subscriptionsBL');

const router = express.Router();

const { protect } = require("../middleware/auth");

router.route('/')
    .get(protect, async function(req,resp)
    {
        let subscriptions = await subscriptionsBL.getAllSubscriptions();
        return resp.json(subscriptions)
    })

router.route('/:id')
    .get(protect,async function(req,resp)
    {
        let subscriptionid = req.params.id;

        let subscription = await subscriptionsBL.getSubscription(subscriptionid);
        return resp.json(subscription)
    })

router.route('/')
    .post(protect,async function(req,resp)
    {
        let obj = req.body
        let status = await subscriptionsBL.addSubscription(obj);
        return resp.json(status)
    })

router.route('/:id')
    .put(protect,async function(req,resp)
    {
        let subscriptionid = req.params.id;
        let obj = req.body;
        let status = await subscriptionsBL.updateSubscription(subscriptionid,obj);
        return resp.json(status)
    })

router.route('/:id')
    .delete(protect,async function(req,resp)
    {
        let subscriptionid = req.params.id;

        let status = await subscriptionsBL.deleteSubscription(subscriptionid);
        return resp.json(status)
    })



module.exports = router;