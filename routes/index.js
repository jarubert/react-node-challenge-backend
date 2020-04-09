const KoaRouter = require('koa-router');
const meeting = require('./meeting');
const note = require('./note');

const router = KoaRouter();
router.use('/meetings', meeting.routes());
router.use('/notes', note.routes());

// Sanity check route
router.get('/', ctx => (ctx.body = 'Hello World!'));

module.exports = router;
