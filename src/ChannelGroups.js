import React from 'react'
import './Channels.css'
function ChannelGroups(props) {
    return (
        <div class="d-flex mt-3 main-ch-group justify-content-between align-items-center" style={{position:'static'}} >
            <div  class=" ch-text d-flex align-items-center">
            <svg class="arrow-gKvcEx icon-2yIBmh mx-2" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"></path></svg>
    <h1 style={{fontSize:'0.8em'}} class="p-0 m-0">{props.name}</h1>
            </div>
            <div class="plus-div" style={{color:'#8e9297',position:'relative'}}>
                <div class="px-3  hto">
            <svg class="circleIcon-LvPL6c  plus-ch" aria-hidden="false" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"></path></svg>
            </div>
            <div class="uppointer-ch" style={{position:'absolute',top:'-30px',left:'-45px',zIndex:'1000'}}>
                            <div style={{backgroundColor:'black',height:'2rem',borderRadius:'5px',boxShadow:'0px 19px 33px -15px rgba(0,0,0,0.75)'}} class="d-flex justify-content-center align-items-center"><h6 class="m-0 px-3" style={{whiteSpace:'nowrap',color:'white'}}>Create Channel</h6></div>
                            <i class="fas fa-caret-down" style={{position:'relative',color:'black',top:'-10px'}}></i>
                            </div>
            </div>
        </div>
    )
}

export default ChannelGroups
