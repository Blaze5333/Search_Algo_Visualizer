import React from 'react'
import { useState,useEffect } from 'react'
export default function Binary() {
    const [found, setfound] = useState()
    const [position, setposition] = useState()
    const [start, setstart] = useState()
    const [end, setend] = useState()
    const [mid, setmid] = useState()
    const [err, seterr] = useState()
    const [val, setval] = useState()
    const [point, setpoint] = useState()
    const [refresh, setrefresh] = useState(0)
    const [j, setj] = useState(0)
    const [arr, setarr] = useState([1,4,7,8,10,15,20,25,47,50,65,72,100,101,234,250,333])
    const [duration, setduration] = useState()
    let count=-1
     useEffect(() => {
      setstart()
      setend()
      seterr()
      setfound()
      setmid()
      setposition()
      setpoint()
      setj(0)
      setduration()
     }, [refresh])
    const sleep = (time) => {
        return new Promise((resolve) => setTimeout(resolve, time))
      }
      const handlechange=(e)=>{
        setval(e.target.value)
      }
      const changeArray=(g,l)=>{
        let arr1=[],j1=0
        console.log(g,l)
        for(let i=g;i<=l;i++){
            arr1[j1]=arr[i]
            j1++;
        }
        console.log(arr1)
        setarr(arr1)
       }
    const search=async()=>{
        if(refresh===0){
            setrefresh(1)
        }
        else{
            setrefresh(0)
        }
        let t=0,midposition,startpos,endpos
        endpos=arr.length-1
        startpos=0
        let start=Date.now()
        while(endpos>=startpos){ 
         
            await sleep(500)
             setstart(arr[Math.floor(startpos)])
           setend(arr[Math.floor(endpos)])
           setmid((arr[Math.floor((startpos+endpos)/2)]))
            midposition=Math.floor((startpos+endpos)/2)
            if(arr[midposition]===+val){
            setfound(true)
            setmid(arr[midposition])
            // setstart(arr[startpos])
            // setend(arr[endpos])
            setposition(arr[midposition])
            setpoint(midposition)
            setj(1)
            t=1
            break;
            }
            else if (arr[midposition]>(+val)){
            endpos=midposition-1
            }

            else{
              startpos=midposition+1
            }
            // changeArray(startpos,endpos)
        }
        if(t===0){
            seterr(true)
        }
        setduration(Date.now()-start)

    }
  return (
    <div> 
    <h1 className='flex3'>Binary Search</h1>
     <div className='flex2'>
    <input placeholder='Enter the number' className='btn' value={val} onChange={handlechange}/>
    <button onClick={search} className='btn' >Start Searching</button>
    </div>
    <h4>* In binary search array should always be arranged in ascending or descending order</h4>
    {found && <h1>Found at postition no. {point} of the array</h1>}
    {err && <h1 style={{"color":"red"}}>Number Not Found</h1>}
    {duration&& <h2>Time taken is {duration} milliseconds</h2>}
    <div className='flex'>
    {arr&& arr.map((elem)=>{
       count++;
       return(<div className='flex1'>
     <div className={elem===mid &&j===1?"block2":elem===mid?"block3":elem>=start&&elem<=end?"block1":"block"}>{elem}</div>
     <div>{count}</div>
  
     </div>)
    })}
    </div>
      
    </div>
  )
}
