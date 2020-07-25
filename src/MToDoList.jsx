import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import './ToDoListCSS.css'
import MToDoTask from './MToDoTask';
 var MToDoList = ()=>{
    let [item,chgItem]=useState('');
    let ipEvent =(e)=>{
        chgItem(e.target.value);
    }
    

    let [itemList,chgItemList] = useState([]);
    let AddItem = () =>{
        if(item!='')
        {
        chgItemList((prelist)=>{
            return([
                ...prelist,
                item,
            ])
        })
        chgItem('');
       }
      

    }


     return(
         <>
          <div className="main_div ">
              <div className="center_div ">
                  <h1 className="Heading ">ToDo List</h1>
                  <br/>
                <input className="ipItem" placeholder="Add a Item" type="text" onChange={ipEvent} value={item}></input>
                <Button onClick={AddItem} className="AddBtn"><AddIcon/></Button>
                <ol>
                {itemList.map((value,index)=>{
                      return( <>
                          <MToDoTask Key={index} text={value}/>
                       </>)
                    })}
                </ol>
              </div>
          </div>

         </>
     )
 }

 export default MToDoList;