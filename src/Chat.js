import React,{useState} from 'react'
import AvaLine from './AvaLine';
import './Chat.css'
import ChatItem from './ChatItem';
let x = -1;
function Chat() {
    let emojis = ["😂","😎","😍","😜","😅","😆","😴","😲","😏","🙄","😠","😨","🤯","🧐"]
    const [emoji, setEmoji] = useState("😀")
    
    function changeEmoji(){
        x=x+1;
        if( x !== 14 ){
        setEmoji(emojis[x])
       console.log(x)
        }
        else{
            setEmoji("😀")
            x=0
        }
    }
    return (
        <div class="container py-0 m-0 " style={{height:'100vh',width:'100%',maxWidth:'100%'}}>
        <div class="d-flex  justify-content-between align-items-center  " style={{width:'100%',height:'10%',overflowX:'auto'}}>
            <hr style={{position:'absolute',color:'black',height:'2px',width:'67%',left:'33%',top:'7.3%'}}/>
        <div class="d-flex align-items-center">
        <svg width="2em" height="2em" viewBox="0 0 24 24" class=" mx-3  icon-1DeIlz"><path fill="rgba(185,187,190,0.5)" fill-rule="evenodd" clip-rule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"></path></svg>
            <h5 class="m-0" style={{color:'white'}}>general</h5>
        </div>
        <div class="d-flex align-items-center mr-3">
        <div class="ico-nav-div" style={{position:'relative'}}>
            <svg x="0" y="0" class="icon-22AiRD mx-2" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24" fill="none"><path  fill-rule="evenodd" clip-rule="evenodd" d="M18 9V14C18 15.657 19.344 17 21 17V18H3V17C4.656 17 6 15.657 6 14V9C6 5.686 8.686 3 12 3C15.314 3 18 5.686 18 9ZM11.9999 21C10.5239 21 9.24793 20.19 8.55493 19H15.4449C14.7519 20.19 13.4759 21 11.9999 21Z"></path></svg>
            <div class="uppointer-na" style={{position:'absolute',top:'15px',left:'-80px'}}>
            <i class="fas fa-caret-up" style={{position:'relative',color:'black',bottom:'-10px'}}></i>
            <div style={{backgroundColor:'black',height:'2rem',borderRadius:'5px',boxShadow:'0px 19px 33px -15px rgba(0,0,0,0.75)',width:'200px',height:'auto'}} class="d-flex justify-content-center align-items-center"><h6 class="m-0 p-3" style={{color:'white',fontSize:'0.8rem'}}>Muting a channel prevents unread indicators and notifications from appearing unless you are mentioned</h6></div>
            </div>
        </div>
        <div class="ico-nav-div" style={{position:'relative'}}>
        <svg x="0" y="0" class="icon-22AiRD mx-2" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path  d="M22 12L12.101 2.10101L10.686 3.51401L12.101 4.92901L7.15096 9.87801V9.88001L5.73596 8.46501L4.32196 9.88001L8.56496 14.122L2.90796 19.778L4.32196 21.192L9.97896 15.536L14.222 19.778L15.636 18.364L14.222 16.95L19.171 12H19.172L20.586 13.414L22 12Z"></path></svg>
        <div class="uppointer-na" style={{position:'absolute',top:'15px',left:'-45px'}}>
            <i class="fas fa-caret-up" style={{position:'relative',color:'black',bottom:'-10px'}}></i>
            <div style={{backgroundColor:'black',height:'2rem',borderRadius:'5px',boxShadow:'0px 19px 33px -15px rgba(0,0,0,0.75)',width:'130px',height:'auto'}} class="d-flex justify-content-center align-items-center"><h6 class="m-0 p-2" style={{color:'white',fontSize:'0.8rem'}}>Pinned Messages</h6></div>
            </div>
        </div>
        <div  class="ico-nav-div" style={{position:'relative'}}> 
        <svg x="0" y="0" class="icon-22AiRD-a mx-2" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path  fill-rule="evenodd" clip-rule="evenodd" d="M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"></path><path  fill-rule="evenodd" clip-rule="evenodd" d="M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"></path><path d="M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"></path><path  d="M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"></path></svg>
        <div class="uppointer-na" style={{position:'absolute',top:'15px',left:'-35px'}}>
            <i class="fas fa-caret-up" style={{position:'relative',color:'black',bottom:'-10px'}}></i>
            <div style={{backgroundColor:'black',height:'2rem',borderRadius:'5px',boxShadow:'0px 19px 33px -15px rgba(0,0,0,0.75)',width:'110px',height:'auto'}} class="d-flex justify-content-center align-items-center"><h6 class="m-0 p-2" style={{color:'white',fontSize:'0.8rem'}}>Member List</h6></div>
            </div>
        </div>
        <div class="d-flex justify-content-between align-items-center" style={{width:'150px',height:'25px',backgroundColor:'rgb(32,34,37)',borderRadius:'5px',color:'rgba(255,255,255,0.5)'}}><p class=" m-0 ml-2" style={{fontSize:'0.8rem'}}>Search</p><svg class="mr-2 icon-3cZ1F_ visible-3V0mGj" aria-hidden="false" width="0.9rem" height="0.9rem" viewBox="0 0 24 24"><path fill="currentColor" d="M21.707 20.293L16.314 14.9C17.403 13.504 18 11.799 18 10C18 7.863 17.167 5.854 15.656 4.344C14.146 2.832 12.137 2 10 2C7.863 2 5.854 2.832 4.344 4.344C2.833 5.854 2 7.863 2 10C2 12.137 2.833 14.146 4.344 15.656C5.854 17.168 7.863 18 10 18C11.799 18 13.504 17.404 14.9 16.314L20.293 21.706L21.707 20.293ZM10 16C8.397 16 6.891 15.376 5.758 14.243C4.624 13.11 4 11.603 4 10C4 8.398 4.624 6.891 5.758 5.758C6.891 4.624 8.397 4 10 4C11.603 4 13.109 4.624 14.242 5.758C15.376 6.891 16 8.398 16 10C16 11.603 15.376 13.11 14.242 14.243C13.109 15.376 11.603 16 10 16Z"></path></svg></div>
        <div style={{position:'relative'}}>
        </div>
        <div  class="ico-nav-div" style={{position:'relative'}}>
        <svg x="0" y="0" class="icon-22AiRD mx-2" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z" ></path></svg>
        <div class="uppointer-na" style={{position:'absolute',top:'15px',left:'-5px'}}>
            <i class="fas fa-caret-up" style={{position:'relative',color:'black',bottom:'-10px'}}></i>
            <div style={{backgroundColor:'black',height:'2rem',borderRadius:'5px',boxShadow:'0px 19px 33px -15px rgba(0,0,0,0.75)',width:'50px',height:'auto'}} class="d-flex justify-content-center align-items-center"><h6 class="m-0 p-2" style={{color:'white',fontSize:'0.8rem'}}>Inbox</h6></div>
            </div>
        </div>
        <div  class="ico-nav-div" style={{position:'relative'}}>
        <svg x="0" y="0" class="icon-22AiRD mx-2" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path  d="M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"></path></svg>
        <div class="uppointer-na" style={{position:'absolute',top:'15px',left:'-5px'}}>
            <i class="fas fa-caret-up" style={{position:'relative',color:'black',bottom:'-10px'}}></i>
            <div style={{backgroundColor:'black',height:'2rem',borderRadius:'5px',boxShadow:'0px 19px 33px -15px rgba(0,0,0,0.75)',width:'50px',height:'auto'}} class="d-flex justify-content-center align-items-center"><h6 class="m-0 p-2" style={{color:'white',fontSize:'0.8rem'}}>Help</h6></div>
            </div>
        </div>
        </div>
        </div>
        <div class="row" style={{height:'90%'}}>
            <div class="col-12 col-md-9 col-xl-9 p-0 m-0" style={{height:'100%'}}>

            <div class="d-flex flex-column justify-content-between" style={{height:'100%',overflowX:'visible'}}>
          
          <div style={{height:'100%',width:'100%',backgroundColor:'rgb(54,57,63)',overflowY:'scroll'}} class="channels-list chan-list p-0 m-0">
                <ChatItem />
                <ChatItem />
                <ChatItem />
                <ChatItem />
                <ChatItem />
                <ChatItem />
                <ChatItem />
                <ChatItem />
                <ChatItem />
           </div>
          
           <div class="d-flex justify-content-center align-items-start p-0 m-0" style={{height:'60px',width:'100%',backgroundColor:'rgb(54,57,63)',position:'relative'}}>
            <div class="d-flex align-items-center justify-content-between" style={{width:'95%',backgroundColor:'rgb(64,68,75)',height:'80%',borderRadius:'8px'}}>
            <div class="d-flex align-items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" class="mx-3 ico-input"><path class="attachButtonPlus-jWVFah"  d="M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"></path></svg>
                <p style={{color:'rgba(255,255,255,0.2)'}} class="m-0">Message #general</p>
            </div>
            <div class="d-flex align-items-center p-0 m-0">
                <div class="gift" style={{position:'relative'}} >
            <svg class="mx-2 ico-input p-0 my-0" width="24" height="24" aria-hidden="false" viewBox="0 0 24 24"><path  fill-rule="evenodd" clip-rule="evenodd" d="M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"></path></svg>
            <div class="uppointer-gift" style={{position:'absolute',top:'-350%',left:'-200%'}}>
            <div style={{backgroundColor:'black',height:'2rem',borderRadius:'5px',width:'200px',height:'auto'}} class="d-flex justify-content-center align-items-center"><h6 class="m-0 p-3" style={{color:'white',fontSize:'0.8rem'}}>Upgrade your friends! Gift them awesome chat perks with nitro</h6></div>                            <i class="fas fa-caret-down" style={{position:'relative',color:'black',top:'-10px'}}></i>
                            </div>
            </div>
            <div>
            <svg  width="24" height="24" class="icon-3D60ES mx-2 ico-input p-0 my-0" aria-hidden="false" viewBox="0 0 24 24"><path  d="M2 2C0.895431 2 0 2.89543 0 4V20C0 21.1046 0.89543 22 2 22H22C23.1046 22 24 21.1046 24 20V4C24 2.89543 23.1046 2 22 2H2ZM9.76445 11.448V15.48C8.90045 16.044 7.88045 16.356 6.74045 16.356C4.11245 16.356 2.66045 14.628 2.66045 12.072C2.66045 9.504 4.23245 7.764 6.78845 7.764C7.80845 7.764 8.66045 8.004 9.32045 8.376L9.04445 10.164C8.42045 9.768 7.68845 9.456 6.83645 9.456C5.40845 9.456 4.71245 10.512 4.71245 12.06C4.71245 13.62 5.43245 14.712 6.86045 14.712C7.31645 14.712 7.64045 14.616 7.97645 14.448V12.972H6.42845V11.448H9.76445ZM11.5481 7.92H13.6001V16.2H11.5481V7.92ZM20.4724 7.92V9.636H17.5564V11.328H19.8604V13.044H17.5564V16.2H15.5164V7.92H20.4724Z"></path></svg>
            </div>
            <div class="ico-input-emoji mx-2 p-0 my-0" onMouseEnter={()=>changeEmoji()}>{emoji}</div>
            </div>
            </div>
              
           </div>
      

                
            </div>
            </div>
            <div class="col-12 col-md-3 col-xl-3"  style={{height:'100%'}} style={{backgroundColor:'rgb(47,49,54)'}}>
                <div class="">
                    <div>
                        <p class="text-left mt-3 p-0" style={{color:'rgba(255,255,255,0.5)',fontSize:'0.9rem',fontWeight:'500'}}>ONLINE--3</p>
                        <div class="online-div my-2 d-flex align-items-center" style={{height:'2.5rem'}}>
                        <AvaLine offon="online" imgUrl={'https://cdn-www.bluestacks.com/bs-images/89cfc0bdd6e77f409b33c59d5289b155.png'} username="White"/>
                        </div>
                        <div class="online-div my-2 d-flex align-items-center" style={{height:'2.5rem'}}>
                        <AvaLine offon="online" imgUrl={'data:image/jpeg;base64,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'} username="Blue"/>
                        </div>
                        <div class="online-div my-2 d-flex align-items-center" style={{height:'2.5rem'}}>
                        <AvaLine offon="online" imgUrl={'https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} username="Orange"/>
                        </div>
                        <div class="online-div my-2 d-flex align-items-center" style={{height:'2.5rem'}}>
                        <AvaLine offon="online" imgUrl={'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616__340.jpg'} username="Brown"/>
                        </div>
                    </div>
                    <div>
                    <div class="">
                        <p class="text-left mt-3 p-0" style={{color:'rgba(255,255,255,0.5)',fontSize:'0.9rem',fontWeight:'500'}}>OFFLINE--3</p>
                        <div class="offline-div d-flex align-items-center" style={{height:'2.5rem'}}>
                        <AvaLine imgUrl={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'} username="Red"/>
                        </div>
                       
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Chat
