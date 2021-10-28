const fs = require('fs')

function getNotes(){
    return('Your notes...')
}

function addNotes(title, body){
    
    const notes = loadNotes()

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

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes
}