import React,{useState} from 'react'
import './CardItems.css'
function CardItems(props) {
    let cla =""
    let icoC;
    if(props.hdis === "active"){
        cla='d-flex mt-1 main-ch-group-a justify-content-between align-items-center py-1 mx-2'
    }
    else{
        cla='d-flex mt-1 main-ch-group-b justify-content-between align-items-center py-1 mx-2'
    }
    if(props.ch === "text"){
        icoC= <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" class=" ml-4 mr-2 icon-1DeIlz"><path fill="rgb(185,187,190)" fill-rule="evenodd" clip-rule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"></path></svg>

    }
    else{
        icoC=<svg class="ml-4 mr-2 icon-1DeIlz" aria-hidden="false" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z"></path></svg>
    }
    return (
<div class={cla} style={{position:'static',borderRadius:'5px'}} >            
<div  class="ch-text d-flex align-items-center">
        {icoC}
    <h1 style={{fontSize:'1em',fontWeight:'700',color:'white'}} class="p-0 m-0">{props.name}</h1>
            </div>
            <div class="d-flex">
            <div class="invite-div mx-1" style={{color:'rgb(185,187,190)',position:'relative'}}>
            <svg class="actionIcon-PgcMM2 invite mr-2" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"></path><path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"></path><path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"></path></svg>
            <div class="uppointer" style={{position:'absolute',top:'-30px',left:'-55px',zIndex:'1000'}}>
            <div style={{backgroundColor:'black',height:'2rem',borderRadius:'5px',boxShadow:'0px 19px 33px -15px rgba(0,0,0,0.75)'}} class="d-flex justify-content-center align-items-center"><h6 class="m-0 px-3" style={{whiteSpace:'nowrap'}}>Create Invite</h6></div>
            <i class="fas fa-caret-down" style={{position:'relative',color:'black',top:'-10px'}}></i>
            </div>
            </div>

            <div class="settings-div mx-1" style={{color:'rgb(185,187,190)',position:'relative'}}>
            <svg class="actionIcon-PgcMM2 settings mr-2" aria-hidden="false" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"></path></svg>
            <div class="uppointer2" style={{position:'absolute',top:'-30px',left:'-54px',zIndex:'1000'}}>
            <div style={{backgroundColor:'black',height:'2rem',borderRadius:'5px',boxShadow:'0px 19px 33px -15px rgba(0,0,0,0.75)'}} class="d-flex justify-content-center align-items-center"><h6 class="m-0 px-3" style={{whiteSpace:'nowrap'}}>Edit Channel</h6></div>
            <i class="fas fa-caret-down" style={{position:'relative',color:'black',top:'-10px'}}></i>
            </div>
            </div>
</div>

        </div>
    )
}

export default CardItems