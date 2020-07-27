import React ,{useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
let CreateNote = (props) =>{
    const [AddNote,chgAddNote]=useState({
        title : '',
        text : '',
    });

    const [expand,setExpand] = useState(false);
  let ipEvent = (e)=>{
      var value = e.target.value;
      var name = e.target.name;
      chgAddNote((preValue)=>{
            return({
                ...preValue,
             [name]:value,
            })          
      })
  }

   let addNote = () =>{
       let {title,text} = AddNote;
       if(title!=''&& text!='')
       {
        props.passNote(AddNote);
        chgAddNote({
           title : '',
           text : '',
       });
       }
        
   }

   let expandIt =()=>{
       setExpand(true);
   }

   let expandOut =()=>{
    setExpand(false);
}

    return( 
        <>
        <div className=' container-fluid my-5 main_note' onDoubleClick={expandOut}>
            <form>
                {expand?<input type="text" autoComplete="off" name="title" placeholder="Title" onChange={ipEvent} value={AddNote.title}/>:null}
                <textarea name="text" placeholder="Write a note " onClick={expandIt} onChange={ipEvent} value={AddNote.text}>
                </textarea>
                {expand?<Button onClick={addNote} ><AddIcon className="plus_sign" /></Button>:null}
            </form>
        </div>

        </>
    )
}

export default CreateNote;
