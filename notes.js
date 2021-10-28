const fs = require('fs')
const chalk = require('chalk')

function getNotes(){
    return('Your notes...')
}

function addNotes(title, body){
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => {return note.title === title})

    if(duplicateNotes.length !== 0){
        console.log('Note title taken!')
        return
    }

    notes.push({
        title: title,
        body: body
    })

    saveNotes(notes)
}

function saveNotes(notes){
    const aux = JSON.stringify(notes)
    fs.writeFileSync('notes.json', aux)
}

function loadNotes(){
    try{
        const data = fs.readFileSync('notes.json')
        return JSON.parse(data)
    } catch(e){
        return []
    }  
}

function removeNotes(title){
    const notes = loadNotes()

    const searchNotes = notes.filter((note) => {return note.title !== title})

    if(searchNotes.length === notes.length)
        console.log(chalk.red.inverse('No note found!'))
    else
        console.log(chalk.green.inverse('Note removed!'))
        
    saveNotes(searchNotes)
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes
}