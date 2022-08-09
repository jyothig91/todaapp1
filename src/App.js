
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
  e.preventDefault();
  setNotes((notes)=>[
  ...notes,
  {
    title,
    
  }
]);
setTitle("");
 };



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
         
          <button onClick= {addItemList} >submit </button>
        </div>
        < div className="container">
         
            {
              notes.map((value,index)=>{
                return (
                  
                < div className="item">
                
                <h3>{value.title}</h3><br></br>
                
                
                <button onClick={()=>removeTask(index)}>Delete</button>
                
                </div>

                );
            })
            }
          
        </div>
      </div>
      </header> 
      
    </div>
  )
}

export default App;
