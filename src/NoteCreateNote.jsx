import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
let CreateNote = () =>{
    return( 
        <>
        <div className=' container-fluid my-5 main_note'>
            <form>
                <input type="text" placeholder="Title"/>
                <textarea placeholder="Write a note">
                </textarea>
                <Button ><AddIcon className="plus_sign" /></Button>
            </form>
        </div>

        </>
    )
}

export default CreateNote;