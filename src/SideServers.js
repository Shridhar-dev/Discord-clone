import React from 'react'
import Servers from './Servers'
import dt from './Images/discord-logot.png'
import plus from './Images/plus.png'
import './Servers.css'
function SideServers() {
    return (
        <div class="d-flex justify-content-center flex-column align-items-center mt-3">
            <Servers channelname="Home" class="server" url={dt}/>
            <div class="separator" ></div>
            <Servers channelname="Among Us @ASIA" class="server" url="https://cdn-www.bluestacks.com/bs-images/89cfc0bdd6e77f409b33c59d5289b155.png"/>
            <Servers channelname="Among Us @EUROPE" class="server" url="https://cdn-www.bluestacks.com/bs-images/89cfc0bdd6e77f409b33c59d5289b155.png"/>
            <Servers channelname="Among Us @NORTHAMERICA" class="server" url="https://cdn-www.bluestacks.com/bs-images/89cfc0bdd6e77f409b33c59d5289b155.png"/>
            
            <div class="d-flex main-server justify-content-center">
            <div class="bullet" style={{backgroundColor:'white',height:'10px',width:'10px'}}></div>
            <div class="server-root-img">
            <svg class="circleIcon-LvPL6c" aria-hidden="false" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path  d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"></path></svg>
            </div>
            <div class="d-flex align-items-center pointers">
            <i class="fas fa-caret-left" style={{color:'black'}}></i>
            <div class="py-0 px-0" style={{backgroundColor:'black',display:"flex",alignItems:'center',justifyContent:'center'}}>
            <p class=" h6 py-2 px-3 m-0" style={{whiteSpace: 'nowrap',boxShadow:'0px 19px 33px -15px rgba(0,0,0,0.75)'}}>Add a Server</p>
            </div>
            </div>
            </div>

            
            
            <div class="d-flex main-server justify-content-center">
            <div class="bullet" style={{backgroundColor:'white',height:'10px',width:'10px'}}></div>
            <div class="server-root-img">
            <svg aria-hidden="false" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path d="M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"></path></svg>
            </div>
            <div class="d-flex align-items-center pointers">
            <i class="fas fa-caret-left" style={{color:'black'}}></i>
            <div class="py-0 px-0" style={{backgroundColor:'black',display:"flex",alignItems:'center',justifyContent:'center'}}>
            <p class=" h6 py-2 px-3 m-0" style={{whiteSpace: 'nowrap',boxShadow:'0px 19px 33px -15px rgba(0,0,0,0.75)'}}>Explore Public Servers</p>
            </div>
            </div>
            </div>
            
            <div class="separator" ></div>
            
            <div class="d-flex main-server justify-content-center">
            <div class="bullet" style={{backgroundColor:'white',height:'10px',width:'10px'}}></div>
            <div class="server-root-img">
            <svg class="circleIcon-LvPL6c" aria-hidden="false" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path  fill-rule="evenodd" clip-rule="evenodd" d="M16.293 9.293L17.707 10.707L12 16.414L6.29297 10.707L7.70697 9.293L11 12.586V2H13V12.586L16.293 9.293ZM18 20V18H20V20C20 21.102 19.104 22 18 22H6C4.896 22 4 21.102 4 20V18H6V20H18Z"></path></svg>
            </div>
            <div class="d-flex align-items-center pointers">
            <i class="fas fa-caret-left" style={{color:'black'}}></i>
            <div class="py-0 px-0" style={{backgroundColor:'black',display:"flex",alignItems:'center',justifyContent:'center'}}>
            <p class=" h6 py-2 px-3 m-0" style={{whiteSpace: 'nowrap',boxShadow:'0px 19px 33px -15px rgba(0,0,0,0.75)'}}>Explore Public Servers</p>
            </div>
            </div>
            </div>
        </div>
    )
}

export default SideServers
