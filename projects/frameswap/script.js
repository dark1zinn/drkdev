
// The elements i will be using soon
let nav1 = document.getElementById("nav-frame1");
let nav2 = document.getElementById("nav-farme2");
let nav3 = document.getElementById("nav-frame3");

let frameHome = document.getElementById("framehome")
let frame1 = document.getElementById("frame1");
let frame2 = document.getElementById("frame2");
let frame3 = document.getElementById("frame3");

//The idea here is to hide all the frames (divs) then show the specified (clicked) one 
function hideFrames(){
    frameHome.style.display = "none"
    frame1.style.display = "none"
    frame2.style.display = "none"
    frame3.style.display = "none"
}
function callFrame(id){
    switch (id){
        case 0:{
            hideFrames()
            frameHome.style.display = "flex"
            break
        }
        case 1:{
            hideFrames()
            frame1.style.display = "flex"
            break
        }
        case 2:{
            hideFrames()
            frame2.style.display = "flex"
            break
        }
        case 3:{
            hideFrames()
            frame3.style.display = "flex"
            break
        }
    }
}

//The event that will trigger some code
// This block down here doesn't work so ill left it commented

//nav1.onclick;{
//    callFrame(1)
//}
//nav2.onclick;{
//    callFrame(2)
//}
//nav3.onclick;{
//    callFrame(3)
//}

document.onload;{
    frameHome.style.display = "flex"
}
