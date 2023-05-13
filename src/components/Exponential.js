import React, { useEffect } from 'react'
import { useState } from 'react';
export default function Exponential() {
  const [pointer, setpointer] = useState()
  const [found, setfound] = useState(false)
  const [amt, setamt] = useState()
  const [err, seterr] = useState(false)
  const [j, setj] = useState(0)
  const [refresh, setrefresh] = useState(0)
  const [duration, setduration] = useState()
  const [arrsize, setarrsize] = useState(3)
  const [arr, setarr] = useState([1,4,6])
  const [start, setstart] = useState()
  const [end, setend] = useState()
  const [mid, setmid] = useState()
  const [position, setposition] = useState()
  let count=-1
 const arrset=[1,4,6,7,9,20,21,24,29,35,42,50,71,100,101,110,150,159,167,178,180,200,211,271,300,353,553,622,632,789]
 useEffect(() => {
  setend()
  setstart()
  setmid()
  setfound()
  setj()
  seterr()
  setpointer()
 }, [refresh])
 const search=async()=>{
  refresh===0?setrefresh(1):setrefresh(0);
  let c=0;
  let check=0;
    if(arr[0]===+amt){
      check=1;
      setfound(true)
      setj(1)
      setpointer(arr[0])
      setposition(0)
      c=1;
    }
    else{
      let i=1;
      setpointer(arr[1])
      while(i<arr.length&&arr[i]<=+amt){
       setpointer(arr[i])
          await sleep(500)
        if(arr[i]===+amt){
          check=1;
           setpointer(arr[i])
           setj(1);
           setposition(i)
           setfound(true)
           c=1;
          break;
        }
        i=i*2
        
      }
      
      if(c===0){
        setpointer()
        setj(0)
        let startpos=i/2;
      let endpos=Math.min(i,arr.length-1)
       let midposition
       setpointer(arr[endpos])
      while(endpos>=startpos){
        await sleep(500)
        setpointer()
      setstart(arr[startpos])
      setend(arr[endpos])
      setmid(arr[Math.floor((startpos+endpos)/2)])
       midposition=Math.floor((startpos+endpos)/2)
       if(arr[midposition]===+amt){
       setfound(true)
       check=1;
       setmid(arr[midposition])
       // setstart(arr[startpos])
       // setend(arr[endpos])
       setposition(midposition)
       setj(1)
      //  t=1
       break;
       }
       else if (arr[midposition]>(+amt)){
       endpos=midposition-1
       }

       else{
         startpos=midposition+1
       }
      }
    }
    if(check===0){
      seterr(true)
    }
    }
 }
 const handlechange=(e)=>{
  setamt(e.target.value)
  console.log(amt)
}
const sleep = (time) => {
return new Promise((resolve) => setTimeout(resolve, time))
} 
const slider=async(e)=>{
  setarrsize(e.target.value)
  let j=0,arr1=[]
  for(let i=0;i<+e.target.value;i++){
     arr1[i]=arrset[j]
     j++;
  }
  setarr(arr1)
}
  return (
    <div>
      <h1 className='flex3'>Exponential Search</h1>
    <h3>Lenght of Array:</h3>
    <div className='flex4'>
    <input type='range' className='range' value={arrsize} onChange={slider} min={3} max={30}></input> 
    <h5>{arrsize}</h5>
    </div>
    <div className='flex2'>
    <input placeholder='Enter the number' className='btn' value={amt} onChange={handlechange}/>
    <button onClick={search} type='submit' className='btn' >Start Searching</button>
    </div>
    <h4>* In binary search array should always be arranged in ascending or descending order</h4>
    {found && <h1>Found at postition no. {position} of the array</h1>}
    {err && <h1 style={{"color":"red"}}>Number Not Found</h1>}
    {duration&& <h2>Time taken is {duration} milliseconds</h2>}
    <div className='flex'>
    {arr&& arr.map((elem)=>{
      count++;
       return(<div className='flex1'>
     <div className={elem===mid &&j===1?"block2":elem===mid?"block3":elem>=start&&elem<=end?"block1":pointer===elem&&j===1?'block2':pointer===elem?"block1":"block"}>{elem}</div>
     <div>{count}</div>
     </div>)
    })}
    </div>
    </div>
  )
}
