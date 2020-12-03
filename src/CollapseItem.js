import React from 'react'
import './Channels.css'
function CollapseItem(props) {
    let borderings;
if(props.borderb === 'yes'){
    borderings = '1px solid rgba(255,255,255,0.3)'
}
else{
    borderings = "0px solid rgba(255,255,255,0.3)"
}
    return (
        <div class="d-flex justify-content-between collapse-item align-items-center mx-4 py-2 my-3" style={{borderBottom:borderings,borderRadius:'2px'}} >
            <h6 class="m-0 ml-1 p-0 text-color" style={{color:props.textColor}}>{props.ctext}</h6>
            
            <div class="mr-1">{props.svgElement}</div>
                        
        </div>
    )
}
export default CollapseItem
