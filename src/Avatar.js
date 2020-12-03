import React from 'react'
import "./Avatar.css"
function Avatar(props) {
    let x;
    let y;
    if(props.offon === "online"){
        x =  <div class="status-badge" style={{backgroundColor:'rgb(67,181,129)',border:'4px solid rgb(41,43,47)',height:'1.2rem',width:'1.2rem',borderRadius:'50%',position:'absolute',top:'60%',left:'55%'}}>
                <div class="uppointer-sb" style={{position:'absolute',top:'-40px',left:'-27px'}}>
        <div style={{backgroundColor:'black',height:'2rem',borderRadius:'5px',boxShadow:'0px 19px 33px -15px rgba(0,0,0,0.75)'}} class="d-flex justify-content-center align-items-center"><h6 class="m-0 px-2" style={{whiteSpace:'nowrap',color:'white'}}>Online</h6></div>
        <i class="fas fa-caret-down" style={{position:'relative',color:'black',top:'-10px'}}></i>
        </div>

        </div>
    }
    else if (props.offon === "online-user"){
        x =  <div class="status-badge" style={{backgroundColor:'rgb(67,181,129)',border:'4px solid rgb(41,43,47)',height:'1.2rem',width:'1.2rem',borderRadius:'50%',position:'absolute',top:'60%',left:'55%'}}></div>
    }
    else{
        x = null;
    }
    return (
        <div class="" style={{position:'relative'}}>
            {x}
            {y}
            <img  style={{borderRadius:'50%'}} width="40px" height="40px" src={props.imgUrl} />
        </div>
    )
}

export default Avatar
