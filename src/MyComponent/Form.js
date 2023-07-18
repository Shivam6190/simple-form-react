import React, { useEffect, useState } from 'react';
// import Setname from './Setname';

export default function Form() {
    
    const data = {name:"",email:"",password:""};
    const [inputdata,setInputdata] = useState(data);
    const [nam,setNam] = useState(inputdata.name);

    const [flag,setFlag] = useState(false);

    useEffect(()=>{
        console.log('Registered');
    
    },[flag])

    const handleData = (e) =>{
        setInputdata({...inputdata, [e.target.name]:e.target.value})
        console.log(inputdata)
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();

        if(!inputdata.name || !inputdata.email || !inputdata.password ){
            alert('All fields are mandatory :)')
        }
        else{
           setFlag(true);
           setNam(inputdata.name);

           inputdata.name="";
           inputdata.email="";
           inputdata.password="";

        // setInputdata({[e.target.name]:""})
        

    }
        
    }


    
    
    
    return (
    <>

    <pre>{flag?(<h1 className='ui-define'>Hello! {nam},You've have Successfully Registered</h1>):""}</pre>
    
    <form className="container" onSubmit={handleSubmit}>
        
        <div className="header">
            <h1>Registration Form</h1>
        </div>
        
        <div>
            <input type="text" placeholder='Enter your Name' value={inputdata.name} onChange={handleData} name='name' className='input' />
        </div>
        
        <div>
            <input type="email" placeholder='Enter your Email' value={inputdata.email} onChange={handleData} name='email' className='input' />
        </div>
        
        <div>
            <input type="password" placeholder='Password' value={inputdata.password} onChange={handleData} name='password' className='input' />
        </div>
        
        <div>
            <button type='submit'>Submit</button>
        </div>
    
    </form>
    
    </>
    )
}
