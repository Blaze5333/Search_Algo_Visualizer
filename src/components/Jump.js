import React from 'react'
import { useState,useEffect } from 'react'
import '../App.css'
export default function Jump() {
    const [amt, setamt] = useState()
    const [position, setposition] = useState()
    const [found, setfound] = useState()
    const [err, seterr] = useState()
    const [arr, setarr] = useState([1,4,6])
    const [j, setj] = useState(0)
    const [pointer, setpointer] = useState()
    const [refresh, setrefresh] = useState()
    const [duration, setduration] = useState()
    const [arrsize, setarrsize] = useState(3)
    const arrset=[1,4,6,7,9,20,21,24,29,35,42,50,71,100,101,110,150,159,167,178,180,200,211,271,300,353,553,622,632,789]
    let count=-1
    useEffect(() => {
        setj()
        setfound()
        seterr()
        setduration()
        setj(0)

    }, [refresh])
    const sleep = (time) => {
        return new Promise((resolve) => setTimeout(resolve, time))
      }
      const slider=(e)=>{
        setarrsize(e.target.value)
        let j=0,arr1=[]
        for(let i=0;i<+e.target.value;i++){
           arr1[i]=arrset[j]
           j++;
        }
        setarr(arr1)
      }
    const search=async()=>{ 
      if(refresh===0){
        setrefresh(1)
    }
    else{
        setrefresh(0)
    }
     const jump=Math.round(Math.sqrt(arr.length))
     let x=0
     setpointer(arr[0])
     let start=Date.now()
     while(x<arr.length+jump-1){
       await sleep(500)
       if(arr[x]===+amt){
        setpointer(arr[x])
        setj(1)
        setfound(true)
        setposition(x)
        break;
       }
       else if(+amt>arr[x])
       {
         if(x+jump<=arr.length-1){
         x+=jump;
         setpointer(arr[x])
       }
       else if(x===arr.length-1){
          seterr(true)
           break;
       }
       else{
        x=arr.length-1;
        setpointer(arr[x])
       }
    }
    else{
      let g=x-1,t1=0;
      setpointer(arr[g])
       while(amt<=arr[g]){
        await sleep(500) 
        
          if(+amt===arr[g]){
            t1=1;
            setj(1);
            setfound(true);
            setposition(g);
            break;
          }
          g--;
          setpointer(arr[g]);
            
             
          
       }
       if(t1===1){
         
          break;
       }
       else{
        seterr(true)
        break;
       }
    }
     }
     setduration(Date.now()-start)

    }
    const handlechange=(e)=>{
       setamt(e.target.value)
    }
  return (
    <div>
    <h1 className='flex3'>Jump Search</h1>
    <h3>Lenght of Array:</h3>
    <div className='flex4'>
    <input type='range' className='range' value={arrsize} onChange={slider} min={3} max={30}></input> 
    <h5>{arrsize}</h5>
    </div>
    <div className='flex2'>
    <input placeholder='Enter the number' className='btn' value={amt} onChange={handlechange}/>
    <button onClick={search} type='submit' className='btn' >Start Searching</button>
    </div>
    <h4>* In Jump search array should always be arranged in ascending or descending order</h4>
    {found && <h1>Found at postition no. {position} of the array</h1>}
    {err && <h1 style={{"color":"red"}}>Number Not Found</h1>}
    {duration&& <h2>Time taken is {duration} milliseconds</h2>}
    <div className='flex'>
    {arr&& arr.map((elem)=>{
      count++;
       return(<div className='flex1'>
     <div className={pointer===elem&&j===1?'block2':pointer===elem?"block1":"block"}>{elem}</div>
     <div>{count}</div>
     </div>)
    })}
    </div>
    
    </div>
  )
}

