const fs = require('fs');
const { debuglog } = require('util');
const { array } = require('yargs');

let addNote = (title, body) => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter((note)=>note.title === title);
    const duplicateNotes = notes.find((note) => note.title === title)
    if (!duplicateNotes) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log("new notes added!");
    } else {
        console.log("notes title taken!");
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notes.length > notesToKeep.length) {
        // console.log(console.log(chalk.green.inverse("note removed!")));
        console.log("note removed!");
    } else {
        // console.log(console.log(chalk.red.inverse("no note found!")));
        console.log("no note found!");
    }

    saveNotes(notesToKeep);
}

const listNotes = () => {
    const notes = loadNotes();
    console.log("notes title");
    notes.forEach(note => console.log(note.title));
}

const readNotes = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title)
    if (note) {
        console.log(note.title);
        console.log(note.body);
    } else {
        console.log("Could not find any notes!!");
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)
}

let loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}