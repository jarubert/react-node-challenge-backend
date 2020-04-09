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
        },
        order: [['updatedAt', 'DESC']]
    });
    return notes.map(note => note.get({ plain: true }));
}

/**
 * post a note for a meeting
 * @public
 * @returns {Promise<Object>} The note posted.
 */
async function postNote(body) {
    try {
        const note = await Note.create(body)
        return note;
    } catch (err) {
        console.log("there was an error creating the note");
        console.log(err);
    }
}

/**
 * delete a note
 * @public
 * @returns {Promise<Object>} The list of notes for a meeting.
 */
async function deleteNote(noteId) {
    try {
        const result = await Note.destroy({
            where: {
                id: noteId
            }
        });
        return result;
    } catch (err) {
        console.log("there was an error deleting note");
        console.log(err);
    }
}

/**
 * delete a note
 * @public
 * @returns {Promise<Object>} The list of notes for a meeting.
 */
async function updateNote(noteId, text) {
    try {
        const result = await Note.update(
            {text: text},
            {where: {
                id: noteId
            }}
        );
        return result;
    } catch (err) {
        console.log("there was an error updating your note");
        console.log(err);
    }
}

module.exports = {
    getNotes, postNote, deleteNote, updateNote
};
