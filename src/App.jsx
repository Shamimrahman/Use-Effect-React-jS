import React,{useState,useEffect} from 'react'

function App() {

    const [state, setstate] = useState(0)

    

    useEffect(()=>{

           document.title=`you clicked ${state}`
        

    })
        

    let inc=()=>{

        setstate(state+1)
    }

    let dec=()=>{
        if(state>0){
            return(
                setstate(state-1)
            )
        }

        else{
            return(
                alert("limit over")
            )
        }
    }

    

    
    return (
        <div>

        <h1>{state}</h1>

        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>

        <br></br>

            
        </div>
    )
}

export default App
