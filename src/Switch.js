import React, {useRef, useEffect, useState} from 'react';
import './switch.css'

const Switch = () => {
    const ref = useRef(null)
    const [chacked, chacking] = useState(false)

    function handleChange(event){
        console.log(ref.current.checked)
        chacking(ref.current.checked)

        if(ref.current.checked){
            document.body.classList.remove('is-light-mode')
            document.body.classList.add('is-dark-mode')
        }else{
            document.body.classList.remove('is-dark-mode')
            document.body.classList.add('is-light-mode')
        }
    }

    function changeMedia(mq){
        if (mq.matches) {
            chacking(mq.matches)
          }      
    }

    useEffect(()=>{
        const mq = window.matchMedia('(prefers-color-scheme: dark)')
        mq.addListener(changeMedia)
        if (mq.matches) {
            chacking(mq.matches)
          }    
    },[])








    return ( 
        <div className="dark-mode">
            <p className="dark-mode-title">Dark Mode</p>
            <input ref={ref} type="checkbox" className="checkbox" id="checkbox" onChange={handleChange} checked={chacked}/>
            <label className="switch" htmlFor="checkbox">
            </label>
        </div>
     );
}
 
export default Switch;