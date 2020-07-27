import React, { useState } from 'react';
import Header from './NoteHeader';
import Footer from './NoteFooter';
import CreateNote from './NoteCreateNote';
import './keepNote.css';
import Note from './NoteNote';
let KeepNote = () => {
    let [noteList, setNoteList] = useState([])

    let addNote = (AddNote) => {
        setNoteList((pre) => {
            return ([
                ...pre,
                AddNote,
            ])
        });

    }

    let deleteNote = (id) => {
        setNoteList((preList) => {
            return (
                preList.filter((current, index) => {
                    return (index !== id);
                })
            )
        })
    }
    return (
        <>
            <Header />
            <CreateNote passNote={addNote} />

            <div className="container-fluid my-5">
                <div className="row">
                    {noteList.map((value, index) => {
                        return (

                            <Note key={index} id={index} note={value} delete={deleteNote} />
                        )
                    })}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default KeepNote;