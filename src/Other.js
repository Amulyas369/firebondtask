import React, { useState } from 'react'

function Other() {
    const[arg,setArg]=useState([])
    const[state,setState]=useState("undefind")
    const[active,setActive]=useState(true)
    const[argdropdown,setArgDropdown]=useState([])
    const[argactive,setArgActive]=useState(false)
    const[inputvalue,setInputvalue]=useState();
    const[dropdownvalue,setDropdownvalue]=useState();
    const[andactive,setAndactive]=useState(false);
    const[andDropdown,setAndDropdown]=useState([])
    const[and,setand]=useState([])
    // const[selectvalue,setSelectvalue]=useState()
    // const[inputdropdown,setInputDropdown]=useState();

const handleAddargClick=()=>{
    setArg([...arg,""])
}

const handleInputValue=(e)=>{
    setInputvalue(e.target.value);
}

const handleargdropdownvalue=(e)=>{
    
    setDropdownvalue( e.target.value)
    
}
 const handleAddandClick=()=>{
    setAndDropdown([...andDropdown,''])
 }



 const onchangeTrueFalse=(e)=>{
    const result= e.target.value
    if(result==="true"){
        setState("True")
    }else if(result==="false"){
        setState("False")
    }
 }

const handleselectClick=(e,index)=>{
    
    const selectvalue=e.target.value

    if(selectvalue==="constant"){
        e.stopPropagation();
        setActive(false);
    }else if(selectvalue==="argument"){
        e.stopPropagation();
        setArgDropdown([...argdropdown,""])
        setArgActive(true)
    }else if(selectvalue==="and"){
        e.stopPropagation();
        setAndactive(true)
        setand([...and,''])
    }

}

const handleRemove=(event)=>{
    event.stopPropagation()
    if(active){
        setActive(false);
    }else{
        setActive(true);
    }
}

const handleargRemove=(event)=>{
    event.stopPropagation();
    setArgActive(false)
    setAndactive(false)
}

  return (
    <div>
        <div>
         <div>
            <input
            type='text'
            name='input'
            id='input'
            value="MY Arg"
            />
            <select onChange={e=>onchangeTrueFalse(e)}>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>
         </div>
         {
            arg.map((data,index)=>{
            return<div>
            <input
            type='text'
            name='input'
            id='input'
            placeholder='New Arg'
           onChange={(e)=>handleInputValue(e)}
            />
            <select onChange={e=>onchangeTrueFalse(e)}>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>
         </div>
            })
         }
          <div>
            <button type='button'onClick={handleAddargClick}>Add Arg</button>
          </div>
        </div>
       {andactive?<div>{ and.map((data,index)=>{
       return<div key={index}>
         <div>
        
        <select >
                <option value="and">and</option>
                <option value="or">or</option>
            </select>
            <button type='button' onClick={handleargRemove}>&#10060;</button>
            </div>
            <div>
        {argactive?<div>
        
        <select onChange={e=>handleargdropdownvalue(e)}>
                <option value="myarg">My Arg</option>
                <option value="x">x</option>
            </select>
            <button type='button' onClick={handleargRemove}>&#10060;</button>
            </div>:
            <div className='custom-select'>
               {  active?<select
                onChange={(e)=>handleselectClick(e,index)}
                >
                    <option value="0">select...</option>
                    <option value="constant">Constant</option>
                    <option value="argument">argument</option>
                    <option value="and">and</option>
                    <option value="or">or</option>
                </select>: <select onChange={e=>onchangeTrueFalse(e)}>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>}
                <button type='button' onClick={handleRemove}>&#10060;</button>
            </div>}
            </div>


             <div>
        {argactive?<div>
        
        <select onChange={e=>handleargdropdownvalue(e)}>
                <option value="myarg">My Arg</option>
                <option value="x">x</option>
            </select>
            <button type='button' onClick={handleargRemove}>&#10060;</button>
            </div>:
            <div className='custom-select'>
               {  active?<select
                onChange={(e)=>handleselectClick(e)}
                >
                    <option value="0">select...</option>
                    <option value="constant">Constant</option>
                    <option value="argument">argument</option>
                    <option value="and">and</option>
                    <option value="or">or</option>
                </select>: <select onChange={e=>onchangeTrueFalse(e)}>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>}
                <button type='button' onClick={handleRemove}>&#10060;</button>
            </div>}
            </div>


            {
                andDropdown.map((data,index)=>{
                    return  <div key={index}>
        {argactive?<div>
        
        <select onChange={e=>handleargdropdownvalue(e)}>
                <option value="myarg">My Arg</option>
                <option value="x">x</option>
            </select>
            <button type='button' onClick={handleargRemove}>&#10060;</button>
            </div>:
            <div className='custom-select'>
               {  active?<select
                onChange={(e)=>handleselectClick(e)}
                >
                    <option value="0">select...</option>
                    <option value="constant">Constant</option>
                    <option value="argument">argument</option>
                    <option value="and">and</option>
                    <option value="or">or</option>
                </select>: <select onChange={e=>onchangeTrueFalse(e)}>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>}
                <button type='button' onClick={handleRemove}>&#10060;</button>
            </div>}
            </div>
                })
            }
            

       </div>})}
       <div>
            <button type='button'onClick={handleAddandClick}>Add Arg</button>
          </div>
       </div>:<div>
        {argactive?<div>
        
        <select onChange={e=>handleargdropdownvalue(e)}>
                <option value="myarg">My Arg</option>
                <option value="x">x</option>
            </select>
            <button type='button' onClick={handleargRemove}>&#10060;</button>
            </div>:
            <div className='custom-select'>
               {  active?<select
                onChange={(e)=>handleselectClick(e)}
                >
                    <option value="0">select...</option>
                    <option value="constant">Constant</option>
                    <option value="argument">argument</option>
                    <option value="and">and</option>
                    <option value="or">or</option>
                </select>: <select onChange={e=>onchangeTrueFalse(e)}>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>}
                <button type='button' onClick={handleRemove}>&#10060;</button>
            </div>}
            </div>}
        <h3>Output: {state}</h3>
    </div>
  )
}

export default Other