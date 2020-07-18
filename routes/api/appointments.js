const express = require('express');
const router = express.Router();
const appointmentCtrl = require('../../controllers/appointments');

router.use(require('../../config/auth'));
router.get('/', checkAuth, appointmentCtrl.index);
router.post('/create', checkAuth, appointmentCtrl.create);

function checkAuth(req, res, next) {
    if(req.user) return next();
    return res.status(501).json({msg: 'Not Authorized'});
}

module.exports = router;