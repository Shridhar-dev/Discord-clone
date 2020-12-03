import React from 'react'
import logo from './Images/discord-logo.png'

function SplashScreen() {
    const quotes = 
        [
            "Wobbling to 299%","DISCORD REQUIRES MORE MINERALS","Untap, Upkeep, Draw","Traveling to Hanamura",
        "TIME'S UP - LET'S DO THIS!","This loading is a line","They see me loading, They waiting","Start your engines",
        "Skipping cutscenes","Shuffling the deck","Reviving dead memes","Returning the slab","Recombobulating Discombobulators",
        "now with scratch and sniff","Now with 100% more Screenshare!","Dropping in Pochinki","Looking for the power button",
        "Look behind you","Locating Wumpus","Loading your digital hug","Loading Simulation","Jumping to hyperspace",
        "Is this thing on?","Initiating launch sequence","Initializing socialization","If you are reading this, you can read",
        "I swear it's around here somewhere...","i need healing","how do i turn this thing on","Loading machine broke",
        "Get ready for a surprise!","Finishing this senta...","Dusting the cobwebs","Do you even notice these?",
        "Opening the loading bay doors","Discord is my city","Disconnecting from Reality","Charging spirit bomb",
        "Charging Limit Break","Calibrating flux capacitors","Buckle up!","Assembling Voltron","Are we there yet?",
        "A brawl is surely brewing!","LOADING 001: ARP 303 Saw","*Elevator Music Plays*","Researching cheat codes",
        "Wizard needs food badly","Decrypting Engrams","And now for something completely different","Stopping to smell the flowers",
        "Achieving Nirvana","Managing Inventory"

        ]
    return (
        <div style={{backgroundColor:'rgb(47,49,54)',height:'100vh',width:'100vw',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <img src={'https://icon-library.com/images/discord-white-icon/discord-white-icon-13.jpg'} class="img-fluid mt-4" width="85" />
            <p class="mt-5 mb-0" style={{fontSize:'0.7rem',fontWeight:'800',color: 'rgb(111,133,210)'}}>DID YOU KNOW</p>
            <h6 class="mt-2" style={{color:'white',fontWeight: '400'}}>{quotes[Math.floor(Math.random() * 54)]}</h6>
        </div>
    )
}

export default SplashScreen
