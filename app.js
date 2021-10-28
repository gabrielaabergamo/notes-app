const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')
const { demandOption } = require('yargs')

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'add new note',
    builder: {
        title:{  
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },

    handler: function(argv){
        notes.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title:{  
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'listing notes',
    handler: function(){
        console.log('listed notes')
    }
})

yargs.command({
    command: 'read',
    describe: 'reading notes',
    handler: function(){
        console.log('reading the notes')
    }
})
yargs.parse()
// console.log(yargs.argv)