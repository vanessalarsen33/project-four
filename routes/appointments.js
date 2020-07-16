const router = require('express').Router();
const appointmentCtrl = require('../controllers/appointments');

router.get('/', checkAuth, appointmentCtrl.index);
router.post('/', checkAuth, appointmentCtrl.create);

function checkAuth(req, res, next) {
    if(req.user) return next();
    return res.status(501).json({msg: 'Not Authorized'});
}

module.exports = router;