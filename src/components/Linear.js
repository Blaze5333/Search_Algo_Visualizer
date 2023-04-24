import React from 'react'
import { useState,useEffect } from 'react'
import 'toolcool-range-slider';
import ReactSlider from 'react-slider';
export default function Linear() {
    const [pointer, setpointer] = useState()
  const [found, setfound] = useState(false)
  const [postition, setpostition] = useState()
  const [amt, setamt] = useState()
  const [err, seterr] = useState(false)
  const [j, setj] = useState(0)
  const [refresh, setrefresh] = useState(0)
  const [duration, setduration] = useState()
  const [arrsize, setarrsize] = useState(3)
  const [arr, setarr] = useState([1,4,7])
  let count=-1
 const arrset=[1,4,6,7,9,20,21,24,29,35,50,42,71,100,101,110,150,159,167,178,180,200,211,271,300,353,553,622,632,789]
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
const slider=async(e)=>{
    setarrsize(e.target.value)
    let j=0,arr1=[]
    for(let i=0;i<+e.target.value;i++){
       arr1[i]=arrset[j]
       j++;
    }
    setarr(arr1)
  }
  const p=()=>{
   console.log(arrsize)
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
    <h3>Lenght of Array:</h3>
    <div className='flex4'>
    <input type='range' className='range' value={arrsize} onChange={slider} min={3} max={30}></input> 
    <h5>{arrsize}</h5>
    </div>
    <div className='flex2'>
    <input placeholder='Enter the number' className='btn' value={amt} onChange={handlechange}/>
    <button onClick={search} type='submit' className='btn' >Start Searching</button>
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
