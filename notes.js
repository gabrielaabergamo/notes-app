const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {('Your notes...')}

const addNotes = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(note => note.title === title)

    if(duplicateNotes.length !== 0){
        console.log(chalk.red.inverse('Note title taken!'))
        return
    } else {
        console.log(chalk.green.inverse('New note added!'))
    }

    notes.push({
        title: title,
        body: body
    })

    saveNotes(notes)
}

const saveNotes = (notes) =>{
    const aux = JSON.stringify(notes)
    fs.writeFileSync('notes.json', aux)
}

const loadNotes = () => {
    try{
        const data = fs.readFileSync('notes.json')
        return JSON.parse(data)
    } catch(e){
        return []
    }  
}

const removeNotes = (title) => {
    const notes = loadNotes()

    const searchNotes = notes.filter(note => note.title !== title)

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