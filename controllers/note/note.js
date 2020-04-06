const { Note } = require('../../models');

/**
 * Get the list of notes for a given meeting id from the DB.
 * @public
 * @returns {Promise<Array<Object>>} The list of notes for a meeting.
 */
async function getNotes(meetingId) {
    const notes = await Note.findAll({
        where: {
            meetingId: meetingId
        }
    });
    return notes.map(note => note.get({ plain: true }));
}

module.exports = {
    getNotes
};
