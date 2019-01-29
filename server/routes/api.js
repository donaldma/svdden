'use strict'

const express = require('express')
const router = express.Router()
const db = require('../database/db')

router.get('/ping', async (req, res, next) => {
  try {
    res.json({ status: 200 })
  } catch (err) {
    next(err)
  }
})

router.post('/activity', async (req, res, next) => {
  try {
    const response = await db.addActivity(req.connection.remoteAddress)
    res.json(response[0])
  } catch (err) {
    next(err)
  }
})

module.exports = router
