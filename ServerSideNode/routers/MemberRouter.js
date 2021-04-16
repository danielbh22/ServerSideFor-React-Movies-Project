const express = require('express');
const membersBL = require('../models/membersBL');

const router = express.Router();
const { protect } = require("../middleware/auth");


router.route('/')
    .get(protect,async function(req,resp)
    {
        let members = await membersBL.getAllMembers();
        return resp.json(members)
    })

router.route('/:id')
    .get(protect,async function(req,resp)
    {
        let memberid = req.params.id;

        let member = await membersBL.getMember(memberid);
        return resp.json(member)
    })

router.route('/')
    .post(protect,async function(req,resp)
    {
        let obj = req.body
        let status = await membersBL.addMember(obj);
        return resp.json(status)
    })

router.route('/:id')
    .put(protect,async function(req,resp)
    {
        let memberid = req.params.id;
        let obj = req.body;
        let status = await membersBL.updateMember(memberid,obj);
        return resp.json(status)
    })

router.route('/:id')
    .delete(protect,async function(req,resp)
    {
        let memberid = req.params.id;

        let status = await membersBL.deleteMember(memberid);
        return resp.json(status)
    })



module.exports = router;