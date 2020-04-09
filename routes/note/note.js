const KoaRouter = require('koa-router');
const {
    wrappers: { http }
} = require('../../middleware');
const { getNotes, postNote, deleteNote, updateNote } = require('../../controllers');

const router = KoaRouter();

router.get('/:meetingId', http((body, params) => getNotes(params.meetingId)));
router.post('/', http((body) => postNote(body)));
router.del('/:noteId', http((body, params) => deleteNote(params.noteId)))
router.put('/:noteId', http((body, params) => updateNote(params.noteId, body.text)))

module.exports = router;
