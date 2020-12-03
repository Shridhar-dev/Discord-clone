import React from 'react'
import Channels from './Channels'
import Chat from './Chat'
import SideServers from './SideServers'

function Main() {
    return (
        <>

<div class="container-fluid p-0 no-gutters" style={{background:'blue',margin:0}}>
        <div class="row p-0 m-0">
            <div class="col-3 col-md-1 col-xl-1 p-0" style={{backgroundColor:'rgb(32,34,37)',height:'100vh'}}>
                <SideServers style={{marginTop:'30px'}} />
            </div>
            <div class="col-0 d-none d-xl-block col-md-3 col-xl-3 p-0 m-0" style={{backgroundColor:'rgb(47,49,54)',height:'100vh'}}>
               <Channels />
            </div>
            <div class="col-9  col-md-11 col-xl-8 p-0 m-0" style={{backgroundColor:'rgb(54,57,63)',height:'100vh',overflowX:'auto'}}>
               <div class="p-0 m-0" style={{width:'100%'}}>
               <Chat />
               </div>
            </div>
        </div>
</div>
</>
    )
}

export default Main
