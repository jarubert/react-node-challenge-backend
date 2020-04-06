const KoaRouter = require('koa-router');
const {
    wrappers: { http }
} = require('../../middleware');
const { getNotes } = require('../../controllers');

const router = KoaRouter();

router.get('/:meetingId', http((ctx) => getNotes(ctx.meetingId)));

module.exports = router;
