const { Router } = require('express')
const mailController = require('../controllers/mailController')

const router = Router()

router.post('/sendMail', mailController.sendMail)

module.exports = router
