import React, {useRef, useEffect} from 'react';
import './switch.css'

const Switch = () => {
    const ref = useRef(null)

    function handleChange(event){
        console.log(ref.current.checked)
        if(ref.current.checked){
            document.body.classList.remove('is-light-mode')
            document.body.classList.add('is-dark-mode')
        }else{
            document.body.classList.remove('is-dark-mode')
            document.body.classList.add('is-light-mode')
        }
    }

    useEffect(()=>{
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            ref.current.setAttribute('checked', true)
          }    
    },[ref])







    return ( 
        <div className="dark-mode">
            <p className="dark-mode-title">Dark Mode</p>
            <input ref={ref} type="checkbox" className="checkbox" id="checkbox" onChange={handleChange}/>
            <label className="switch" htmlFor="checkbox">
            </label>
        </div>
     );
}
 
export default Switch;