const router = require('express').Router();
const controller = require('controller');

router.get('/:id', controller.show);
router.get('/', controller.index);
router.get('/new', controller.new);
router.get('/:id/update', controller.update);


module.exports = router;
