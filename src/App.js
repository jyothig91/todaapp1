import React from 'react';
import './App.css';
import {useState,useEffect} from 'react'
import Myprofile from './components/myprofile';

function App(){

    const[title,setTitle]=useState("");
  
    const[notes,setNotes]=useState([])
   

  const onChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  
  
  
  const addItemList = (e )=>{
  if(title==='')
  {
    return alert("pls enter a text")
  }
  
    setNotes((oldItem)=>{
      return [...oldItem,title];
    });
  

setTitle("");
 };

function editTask(index){
  const newlist=[...notes];
  const arr=newlist.filter((val,i)=>{
    return(i===index)
  })
  setTitle(arr);
  const array=newlist.filter((val,i) => {
    return(i !== index)
  })
  setNotes(array)
}

  const removeTask =(a)=>{
    const finalData=notes.filter((curEle,index) => {
      return index !==a; 
    })
    setNotes(finalData)
  }

  

 useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
 }, [notes]);

 useEffect(() => {
   const data = JSON.parse(localStorage.getItem("Notes"));
   if (data) {
     setNotes(data);
   }
  }, []);

  return(
    <div className="App">
     <header className="App-header">
      <Myprofile/>
      <div className="wrapper">
        <div className="Input-wrapper">
        
          <input placeholder="Enter Title here " value={title} onChange={onChangeHandler}/><br></br><br></br>
         
          <button onClick= {addItemList} >Add </button>
        </div>
        <div div className="container">
         
            {
              notes.map((item,index)=>{
                return (
                  
              
               < div className="item" key={index} style={{color:"black"}}>{item} <button onClick={()=>editTask(index)}>Edit</button>
                <button  onClick={()=>removeTask(index)}>Delete</button>
                </div>
   ) }) 
            }
            
            
       
      </div>
      </div>
      </header> 
     </div> 
  
  );
}

export default App;
