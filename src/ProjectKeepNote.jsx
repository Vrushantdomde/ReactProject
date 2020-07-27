import React from 'react';
import Header from './NoteHeader';
import Footer from './NoteFooter';
import CreateNote from './NoteCreateNote';
import './keepNote.css';
import Note from './NoteNote';
let KeepNote = () => {
    return (
      

        <>
            <Header />
            <CreateNote />

            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-3 my-3"><Note /></div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default KeepNote;