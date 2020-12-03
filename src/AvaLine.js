import React from 'react'
import Avatar from './Avatar'

function AvaLine(props) {
    return (
        <div class="d-flex align-items-center m-2 my-4 mr-5">
            <Avatar offon={props.offon} imgUrl={props.imgUrl}/>
            <h5 class="m-0 ml-3 " style={{color:'rgba(255,255,255,0.5)'}}>{props.username}</h5>
        </div>
    )
}

export default AvaLine
