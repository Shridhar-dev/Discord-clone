import React from 'react'
import Avatar from './Avatar'
import './Chat.css'
function ChatItem() {
    return (
        <div style={{width:'100%',position:'relative'}} class=" my-4 d-flex align-items-center chat-item-div">
            <div class="mx-3">
                <Avatar imgUrl="https://cdn-www.bluestacks.com/bs-images/89cfc0bdd6e77f409b33c59d5289b155.png"/>
           </div>
            <div style={{color:'white'}}>
                <p class="m-0  p-0 text-left">DUSER</p>
                <p class="m-0  p-0 text-left">Hello everybody👋</p>
            </div>
            <div class="d-flex chat-options" style={{border:'1px solid rgba(0,0,0,0.3)',borderRadius:'5px',position:'absolute',backgroundColor:'rgb(54,57,63)',top:"-30%",right:'5%'}}>
           <div class="p-1 option" style={{position:'relative'}}> 
                <svg class="icon-3Gkjwa m-0 p-0" aria-hidden="false" width="20" height="20" viewBox="0 0 24 24"><path fill="rgb(185,187,190)" fill-rule="evenodd" clip-rule="evenodd" d="M12.2512 2.00309C12.1677 2.00104 12.084 2 12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 11.916 21.999 11.8323 21.9969 11.7488C21.3586 11.9128 20.6895 12 20 12C15.5817 12 12 8.41828 12 4C12 3.31052 12.0872 2.6414 12.2512 2.00309ZM10 8C10 6.896 9.104 6 8 6C6.896 6 6 6.896 6 8C6 9.105 6.896 10 8 10C9.104 10 10 9.105 10 8ZM12 19C15.14 19 18 16.617 18 14V13H6V14C6 16.617 8.86 19 12 19Z"></path><path d="M21 3V0H19V3H16V5H19V8H21V5H24V3H21Z" fill="rgb(185,187,190)"></path></svg>
                <div class="uppointer-op" style={{position:'absolute',top:'-40px',left:'-50px'}}>
                            <div style={{backgroundColor:'black',height:'2rem',borderRadius:'5px',boxShadow:'0px 19px 33px -15px rgba(0,0,0,0.75)'}} class="d-flex justify-content-center align-items-center"><h6 class="m-0 px-3" style={{whiteSpace:'nowrap',color:'white'}}>Add Reaction</h6></div>
                            <i class="fas fa-caret-down" style={{position:'relative',color:'black',top:'-10px'}}></i>
                            </div>
                </div>
            <div  class="p-1 option" style={{position:'relative'}}><svg class="icon-3Gkjwa m-0 p-0" width="20" height="20" viewBox="0 0 24 24"><path d="M10 8.26667V4L3 11.4667L10 18.9333V14.56C15 14.56 18.5 16.2667 21 20C20 14.6667 17 9.33333 10 8.26667Z" fill="rgb(185,187,190)"></path></svg>
            <div class="uppointer-op" style={{position:'absolute',top:'-40px',left:'-21px'}}>
                            <div style={{backgroundColor:'black',height:'2rem',borderRadius:'5px',boxShadow:'0px 19px 33px -15px rgba(0,0,0,0.75)'}} class="d-flex justify-content-center align-items-center"><h6 class="m-0 px-3" style={{whiteSpace:'nowrap',color:'white'}}>Reply</h6></div>
                            <i class="fas fa-caret-down" style={{position:'relative',color:'black',top:'-10px'}}></i>
                            </div>
           </div>
            <div  class="p-1 option" style={{position:'relative'}}
            ><svg class="icon-3Gkjwa m-0 p-0" aria-hidden="false" width="20" height="20" viewBox="0 0 24 24"><path fill="rgb(185,187,190)" fill-rule="evenodd" clip-rule="evenodd" d="M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z"></path></svg>
           <div class="uppointer-op" style={{position:'absolute',top:'-40px',left:'-22px'}}>
                            <div style={{backgroundColor:'black',height:'2rem',borderRadius:'5px',boxShadow:'0px 19px 33px -15px rgba(0,0,0,0.75)'}} class="d-flex justify-content-center align-items-center"><h6 class="m-0 px-3" style={{whiteSpace:'nowrap',color:'white'}}>More</h6></div>
                            <i class="fas fa-caret-down" style={{position:'relative',color:'black',top:'-10px'}}></i>
                            </div>
           </div>
            </div>
        </div>
    )
}

export default ChatItem
