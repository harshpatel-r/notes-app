//****** */
// const fs = require('fs');
// fs.writeFileSync('notes.txt' , 'hello ! my name is harsh.');
// fs.appendFileSync('notes.txt' , 'i am nodejs devloper.')
//******* */
// const name = require('./utils.js');
// // let note = getNotes();
// console.log(name)
// const n = require('./notes');

// let name = 'harsh';
// console.log(n.name);

//********* */

// const validator = require('validator');

// console.log(validator.isEmail('princepatel@xyz.com')); //=> true
// console.log(validator.isURL('princepatelxyz@xyz.xyz')); //=> true

//********* */

// import chalk from 'chalk';

// console.log(chalk.red.bold('Error'));
// //******** */

// console.log(process.argv);
/*
console.log( process.argv)
const command = process.argv[2];
if(command === 'add'){
    console.log("adding notes..");
}else if(command === "remove"){
    console.log("removing notes..");
}
*/
/*
let arr = Array.from(process.argv[2]);

function sorting(arr){
    return arr.sort((a,b)=>a-b);
}
let ans = sorting(arr);
console.log(ans);
*/
///********* */
// const { number } = require('yargs');

const yargs = require('yargs');
const notes = require('./notes.js')


//add , remove , read , list 
//add

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'notes title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "notes body",
            demandOption: true,
            type: 'string'

        },
    },

    handler(argv) {
        // console.log('adding a new notes',argv)
        // console.log("Title : " + argv.title);
        // console.log("Body : " + argv.body);
        notes.addNote(argv.title, argv.body)
    }
});

//remove
yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder: {
        title: {
            describe: 'notes title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // console.log(argv.title)
        notes.removeNote(argv.title)
    }
});

//list
yargs.command({
    command: 'list',
    describe: 'list your note',
    handler() {
        // console.log('listing out all notes');
        notes.listNotes();
    }
});

//read
yargs.command({
    command: 'read',
    describe: 'reading a  note',
    builder: {
        title: {
            describe: 'notes title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // console.log(argv.title);
        notes.readNotes(argv.title);

    }
});

yargs.parse();
// console.log(yargs.argv); // ==> yargs.parse()
