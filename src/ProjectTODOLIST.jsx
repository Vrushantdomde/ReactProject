import React, { useState } from 'react';
import ToDoTask from './ToDoTask';
import './ToDoListCSS.css'
var ToDoList = () =>{
    var [item,chgItem] = useState('');
    
    var inputEvent=(e)=>{
          chgItem(e.target.value);

    }
    
    var [itemList,chgItemList] = useState([])
    var AddItem=()=>{
        if(item!="")
         {
          chgItemList((preList)=>{
                return([...preList,
                item,
                ]);
          });
          chgItem('');
        }
    }

    var   DeleteItem = (id)=>{
        console.log("Delete");
        chgItemList(
         itemList.filter((value,index)=>{
                return id!=index
            }));
        
    }

    return(
        <>
          <div className="main_div">
              <div className="center_div">
                  <h1 className="Heading">ToDoList</h1>
                  <br/>
                  <input className="ipItem" type="text" placeholder="Add a item" onChange={inputEvent} value={item} />
                  <button onClick={AddItem} className="AddBtn"> + </button>
                  <br/>
                  <ol>
                  {itemList.map((value,index)=>{
                      return(<ToDoTask Key={index} id={index} text={value} OnSelect={DeleteItem}/>)
                  })}
                  </ol>
              </div>
          </div>
        </>
    )
}

export default ToDoList;