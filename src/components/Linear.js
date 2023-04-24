import React from 'react'
import { useState,useEffect } from 'react'
export default function Linear() {
    const [pointer, setpointer] = useState()
  const [found, setfound] = useState(false)
  const [postition, setpostition] = useState()
  const [amt, setamt] = useState()
  const [err, seterr] = useState(false)
  const [j, setj] = useState(0)
  const [refresh, setrefresh] = useState(0)
  const [duration, setduration] = useState()
  let count=-1
 let arr=[1,4,7,8,10,15,20,25,47,50,65,72,100,101,234,250,333]
 useEffect(() => {
    seterr(false)
    setfound(false)
    setj(0)
    setduration()
 }, [refresh])
 const handlechange=(e)=>{
    setamt(e.target.value)
    console.log(amt)
 }
 const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}
const search = async () => {
    if(refresh===0){
        setrefresh(1)
    }
    else{
        setrefresh(0)
    }
let i,j1=0
let start=Date.now()
  for (i =0; i < arr.length; i++) {
    await sleep(500)
    console.log(amt)
    if(arr[i]===+amt){
      setpointer(arr[i])
      setfound(true)
      setpostition(i)
      setj(1);
      j1=1
      break;
    }
    else{
      setpointer(arr[i])
    }
  }
  console.log(j)
  if(j1===0){
    setfound()
    seterr(true)
  }
  setduration(Date.now()-start)
}


  return (
    <div>
    <h1 className='flex3'>Linear Search</h1>
    <div className='flex2'>
    <input placeholder='Enter the number' value={amt} onChange={handlechange}/>
    <button onClick={search} type='submit' >Start Searching</button>
    </div>
    {found && <h1>Found at postition no. {postition} of the array</h1>}
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
  );
}
