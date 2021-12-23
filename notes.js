const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {('Your notes...')}

const addNotes = (title, body) => {
    const notes = loadNotes()

    //const duplicateNotes = notes.filter(note => note.title === title)
    const duplicateNotes = notes.find(note => note.title === title)

    if(duplicateNotes){
        console.log(chalk.red.inverse('Note title taken!'))
        return
    } 

    notes.push({
        title: title,
        body: body
    })
    console.log(chalk.green.inverse('New note added!'))
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

const listNotes = () => {
    console.log(chalk.magenta.inverse('Your notes:'))

    const notes = loadNotes()
    notes.forEach(element => {
        console.log(element.title)
    })
}

const readNotes = (title) => {
    const notes = loadNotes()

    const searchNotes = notes.find(note => note.title === title)

    if(searchNotes){
        console.log(chalk.inverse.cyan(searchNotes.body))
    } else {
        console.log(chalk.red.inverse("Note doesn't exist"))
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes,
    saveNotes: saveNotes
}