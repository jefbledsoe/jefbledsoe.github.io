import { captureRejectionSymbol } from "events";

function scrollFunction() {
    console.log("scrollFunction doc", document.documentElement.scrollTop)
    let myWelcomeMessage = document.getElementById("welcome-message");
    myWelcomeMessage.style.transform = `translate(${document.documentElement.scrollTop*0.8}px,0)`;

    let profilePic = document.getElementById("profile-pic");
    profilePic.style.transform = `translate(-${document.documentElement.scrollTop*0.8}px,0)`;


    

}



export default scrollFunction;
