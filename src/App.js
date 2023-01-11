import React, { useState } from "react";

function App() {

  const [price,setPrice]=useState([{name:""}])
  const [name,setName]=useState()
  const [update,setUpdate]=useState("")

  console.log(price,"given array")
 const add=()=>{
 let addValue=[...price]
 addValue.push({name:name})
 console.log(addValue,"add")
 setPrice(addValue)
  }



 const onEdit= (index,items)=>{
 setName(items.name)
 console.log(price,"edit");
 setUpdate(index)
 
  
 }
  const upDate=()=>{
    let updateval=[...price];
    updateval[update]={name:name};
    setPrice(updateval);
    console.log(updateval,"update");

  }

 const onDelete = (index) =>{
  let delValue = [...price];
  delValue.splice(index,1);
  setPrice(delValue)
  console.log(price,"deli")
   } 

  return (
    <div className="App">
      <input
          type="text"
          name="name"
          placeholder="Enter price"
          value={name}
          onChange={(e)=>setName(e.target.value)}/>

 <button onClick={add} >ADD</button>
 
    {price.map((items,index)=>{
    return(  
    <>
    <p index={index} key={items}>{items.name}</p>
    <button onClick={()=>onEdit(index,items)} >EDIT</button>
    <button onClick={()=>onDelete(index)} >DELETE</button>
    <button onClick={()=>upDate(index,items)} >UPDATE</button>
    </>
    );
    })}   
    {console.log(price,"price")}
    </div>
  );
}

export default App;
