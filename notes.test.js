const { addNotes, readNotes } = require("./notes")
const { saveNotes } = require("./notes")
const fs = require('fs')

test("testing the addNotes function", () =>{
    addNotes("teste", "teste")

    const data = fs.readFileSync('notes.json')
    const notes = JSON.parse(data)
    const testnote= notes.find(note => note.title === "teste")

    expect(testnote).toStrictEqual({"body": "teste", "title": "teste"})
})

test("testing the saveNotes function", () =>{
    saveNotes([{"body": "teste2", "title": "teste2"}, {"body": "teste", "title": "teste"}])

    const data = fs.readFileSync('notes.json')
    const notes = JSON.parse(data)
    const testnote= notes.find(note => note.title === "teste2")

    expect(testnote).toStrictEqual({"body": "teste2", "title": "teste2"})
})

test("testing the readNotes function", () =>{
    addNotes("teste", "teste")

    readNotes("teste")
    const data = fs.readFileSync('notes.json')
    const notes = JSON.parse(data)
    const searchNotes = notes.find(note => note.title === "teste")
    expect(searchNotes).toStrictEqual({"body": "teste", "title": "teste"})
})
