import React,{useState} from 'react'

import './Servers.css'
function Servers(props) {
    let cls = ''
  if(props.class !== 'server'){
    cls = 'img-fluid server-root-img'
  }
  else{
      cls= 'img-fluid server-img'
  }
    return (
    
        <div class="d-flex main-server justify-content-center">
        <div class="bullet" style={{backgroundColor:'white',height:'10px',width:'10px'}}></div>
        <img src={props.url} className={cls}  width="50" />
        <div class="d-flex align-items-center pointers">
        <i class="fas fa-caret-left" style={{color:'black'}}></i>
        <div class="py-0 px-0" style={{backgroundColor:'black',display:"flex",alignItems:'center',justifyContent:'center'}}>
           <p class=" h6 py-2 px-3 m-0" style={{whiteSpace: 'nowrap',boxShadow:'0px 19px 33px -15px rgba(0,0,0,0.75)'}}> {props.channelname}</p>
        </div>
        </div>
        </div>
        
    )
    
} 

export default Servers
