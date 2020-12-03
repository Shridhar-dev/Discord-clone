import React,{useState} from 'react'
import CardItems from './CardItems'
import ChannelGroups from './ChannelGroups'
import Avatar from './Avatar'
import './Channels.css'
import CollapseItem from './CollapseItem'
function Channels() {
    const [disp, setDisp] = useState(false)
    return (
      
      <div style={{height:'100vh',position:'relative'}}>
        <div class="d-flex  justify-content-between align-items-center ch-nav" style={{borderBottom:'2px solid rgb(37,39,41)',weight:'100%',height:'10%'}}>
            
            <h4 class="ml-3 m-0" style={{color:'white'}}>Discord</h4>
            <h6 class="mr-3 m-0" style={{color:'white',position:'relative'}}><i class="fas fa-chevron-down" onClick={()=>{setDisp(!disp)}}></i></h6>
        </div>
        {disp?<div style={{backgroundColor:'black',height:'300px',width:'280px',position:'absolute',top:'12%',left:'10%',zIndex:'100'}}>
            <CollapseItem borderb="yes" ctext="Server Boost" textColor="white" svgElement={<svg class="svg-fill icon-LYJorE " aria-hidden="false" width="24" height="24" viewBox="0 0 8 12"><path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill={'rgb(255,115,250)'}></path><path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill={'rgb(255,115,250)'}></path></svg>}/>
            <CollapseItem borderb="yes" ctext="Invite People" textColor="rgb(103,123,196)" svgElement={<svg class="svg-fill icon-LYJorE" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path fill="rgb(103,123,196)" fill-rule="evenodd" clip-rule="evenodd" d="M21 3H24V5H21V8H19V5H16V3H19V0H21V3ZM10 12C12.205 12 14 10.205 14 8C14 5.795 12.205 4 10 4C7.795 4 6 5.795 6 8C6 10.205 7.795 12 10 12ZM10 13C5.289 13 2 15.467 2 19V20H18V19C18 15.467 14.711 13 10 13Z"></path></svg>} />
            <CollapseItem borderb="no" ctext="Notifications Settings" textColor="white" svgElement={<svg class="svg-fill icon-LYJorE" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill="white" fill-rule="evenodd" clip-rule="evenodd" d="M18 9V14C18 15.657 19.344 17 21 17V18H3V17C4.656 17 6 15.657 6 14V9C6 5.686 8.686 3 12 3C15.314 3 18 5.686 18 9ZM11.9999 21C10.5239 21 9.24793 20.19 8.55493 19H15.4449C14.7519 20.19 13.4759 21 11.9999 21Z"></path></svg>}/>
            <CollapseItem borderb="yes" ctext="Privacy Settings" textColor="white" svgElement={<svg class="svg-fill icon-LYJorE" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M19 6.00001C15.56 6.00001 12.826 2.43501 12.799 2.39801C12.421 1.89801 11.579 1.89801 11.201 2.39801C11.174 2.43501 8.44 6.00001 5 6.00001C4.447 6.00001 4 6.44801 4 7.00001V14C4 17.807 10.764 21.478 11.534 21.884C11.68 21.961 11.84 21.998 12 21.998C12.16 21.998 12.32 21.96 12.466 21.884C13.236 21.478 20 17.807 20 14V7.00001C20 6.44801 19.553 6.00001 19 6.00001ZM15 16L12 14L9 16L10 13L8 11H11L12 8.00001L13 11H16L14 13L15 16Z"></path></svg>}/>
            <div class="d-flex justify-content-between collapse-item-ls align-items-center mx-4 py-2 my-3" >
            <h6 class="m-0 p-0 text-color-ls" style={{color:'rgb(240,71,71)'}}>Leave Server</h6>
            <svg class="svg-fill-ls icon-LYJorE" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path fill="rgb(240,71,71)" d="M10.418 13L12.708 15.294L11.292 16.706L6.586 11.991L11.294 7.292L12.707 8.708L10.41 11H21.949C21.446 5.955 17.177 2 12 2C6.486 2 2 6.487 2 12C2 17.513 6.486 22 12 22C17.177 22 21.446 18.046 21.949 13H10.418Z"></path></svg>             
        </div>
        </div>:<></>}
        <div class="d-flex flex-column justify-content-between" style={{height:'90%',overflowX:'visible'}}>
          
               <div style={{height:'80%',width:'100%'}} class="channels-list chan-list">
                <ChannelGroups name="TEXT CHANNELS"/>
                <CardItems name="general" hdis="active" ch="text"/>
                <CardItems name="test" ch="text"/>
                <ChannelGroups name="VOICE CHANNELS" />
                <CardItems name="General"/>
                </div>
               
                <div class="d-flex justify-content-between align-items-center" style={{height:'60px',width:'100%',backgroundColor:'rgb(41,43,47)',position:'relative'}}>
                    <div class="d-flex ml-2 align-items-center">
                        <Avatar offon="online-user" imgUrl="https://cdn-www.bluestacks.com/bs-images/89cfc0bdd6e77f409b33c59d5289b155.png"/>
                        <div class="d-flex flex-column align-items-start ml-2">
                            <p class="m-0 p-0" style={{fontSize:'1rem',color:'white'}}><strong>SDK</strong></p>
                            <p class="m-0 p-0 text-left" style={{fontSize:'0.8rem',color:'rgba(255,255,255,0.6)',fontWeight:'100'}}>#7822</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center mr-2">
                        <div class="mx-1  ico-acc-div" style={{position:'relative'}}>
                            <svg class="ico-acc" aria-hidden="false" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path d="M6.7 11H5C5 12.19 5.34 13.3 5.9 14.28L7.13 13.05C6.86 12.43 6.7 11.74 6.7 11Z" ></path><path d="M9.01 11.085C9.015 11.1125 9.02 11.14 9.02 11.17L15 5.18V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 11.03 9.005 11.0575 9.01 11.085Z"></path><path d="M11.7237 16.0927L10.9632 16.8531L10.2533 17.5688C10.4978 17.633 10.747 17.6839 11 17.72V22H13V17.72C16.28 17.23 19 14.41 19 11H17.3C17.3 14 14.76 16.1 12 16.1C11.9076 16.1 11.8155 16.0975 11.7237 16.0927Z" ></path><path d="M21 4.27L19.73 3L3 19.73L4.27 21L8.46 16.82L9.69 15.58L11.35 13.92L14.99 10.28L21 4.27Z" class="strikethrough-1n4ekb" ></path></svg>
                            <div class="uppointer-ia" style={{position:'absolute',top:'-40px',left:'-27px'}}>
                            <div style={{backgroundColor:'black',height:'2rem',borderRadius:'5px',boxShadow:'0px 19px 33px -15px rgba(0,0,0,0.75)'}} class="d-flex justify-content-center align-items-center"><h6 class="m-0 px-3" style={{whiteSpace:'nowrap',color:'white'}}>Unmute</h6></div>
                            <i class="fas fa-caret-down" style={{position:'relative',color:'black',top:'-10px'}}></i>
                            </div>
                        </div>
                        <div  class="mx-1  ico-acc-div" style={{position:'relative'}}>
                            <svg class="ico-acc"aria-hidden="false" width="1.4em" height="1.4em" viewBox="0 0 24 24"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.00305C6.486 2.00305 2 6.48805 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.896 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.48805 17.514 2.00305 12 2.00305Z" ></path></svg></svg>
                            <div class="uppointer-ia" style={{position:'absolute',top:'-40px',left:'-25px'}}>
                            <div style={{backgroundColor:'black',height:'2rem',borderRadius:'5px',boxShadow:'0px 19px 33px -15px rgba(0,0,0,0.75)'}} class="d-flex justify-content-center align-items-center"><h6 class="m-0 px-3" style={{whiteSpace:'nowrap',color:'white'}}>Deafen</h6></div>
                            <i class="fas fa-caret-down" style={{position:'relative',color:'black',top:'-10px'}}></i>
                            </div>
                        </div>
                        <div  class="mx-1  ico-acc-div" style={{position:'relative'}}>
                            <svg class="ico-acc" aria-hidden="false" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path  fill-rule="evenodd" clip-rule="evenodd" d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"></path></svg>
                            <div class="uppointer-ia" style={{position:'absolute',top:'-40px',left:'-47px'}}>
                            <div style={{backgroundColor:'black',height:'2rem',borderRadius:'5px',boxShadow:'0px 19px 33px -15px rgba(0,0,0,0.75)'}} class="d-flex justify-content-center align-items-center"><h6 class="m-0 px-3" style={{whiteSpace:'nowrap',color:'white'}}>User Settings</h6></div>
                            <i class="fas fa-caret-down" style={{position:'relative',color:'black',top:'-10px'}}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Channels
