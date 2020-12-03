import React from 'react'
import Channels from './Channels'
import Chat from './Chat'
import SideServers from './SideServers'

function Main() {
    return (
        <>

<div class="p-0 no-gutters" style={{height:'100vh',width:'100vw'}}>
<div class="row p-0 m-0" style={{height:'100vh',width:'100vw',overflow:'hidden'}}>
            <div class="col-3 col-md-1 col-xl-1 p-0 m-0" style={{backgroundColor:'rgb(32,34,37)',height:'100vh'}}>
                <SideServers class="m-1" />
            </div>
            <div class="col-0 d-none d-xl-block col-md-3 col-xl-3 p-0 m-0" style={{backgroundColor:'rgb(47,49,54)',height:'100vh'}}>
               <Channels />
            </div>
            <div class="col-9  col-md-11 col-xl-8 p-0 m-0" style={{backgroundColor:'rgb(54,57,63)',height:'100vh',overflowX:'auto'}}>
               <Chat />
            </div>
        </div>
</div>
</>
    )
}

export default Main
