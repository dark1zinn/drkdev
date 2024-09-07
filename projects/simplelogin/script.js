// Is this working?
console.log("test")

// User credentials simulation
let user ={
    username: "drk",
    password: "try",
    isAdmin: true,
}

// This should bring me more easily what i want from the html
let loginElements ={
    fieldUsername: document.getElementById("field-username"),
    fieldPassword: document.getElementById("field-password"),
    btnLogin: document.getElementById("loginbtn"),
    result: document.getElementById("result"),
}

//This displays the <p> element then set its .textContent to the given string at `text`
function displayResult(text){
    loginElements.result.style.display = "block"
    loginElements.result.innerHTML = String(text)
    //sleep(2)
    //htmElements.result.innerHTML = String("")
    //htmElements.result.style.display = "none"
}

//This clear the .textContent of the given element id after the specified seconds in sleep()
//Edit: this was suposed to do that, since it is not a crucial thing to make it all work i just give up on this for now
async function clearResultText(seconds){
    if ((loginElements.fieldUsername.textContent).onchange != "" || (loginElements.fieldPassword.textContent).onchange != ""){
        await sleep(seconds)
        htmlElement.result.style.display = "none"
    }
}

//As its name, its a sleep() function similar to the Python time.sleep(), i didn't coded this, just copied from YouTube
// Same of the function above, will mess with this later, i guess
async function sleep(seconds){
    return new Promise((resolve) => setTimeout(resolve, seconds*1000));
}

//This will get the user input at the given element id's then check if its the same of the user.username and user.password
//then return states for it, 0 = username doesn't match, 1 = password doesn't match, 2 = one of the input fields is empty
//true = both username and password match
function checkLogin(self){
    if (loginElements.fieldUsername.textContent == "" || htmlElement.fieldPassword.textContent == ""){
        return 2
    }
    else{
        Check = (htmlElement.fieldUsername.textContent == user.username) ? true : 0;
        if (Check){
            Check = (htmlElement.fieldPassword.textContent == user.password) ? true : 1;
            return Check
        }
        else{
            return Check
        }
    }
}

//This will the the output from checkLogin() and do a simple recognization of state and return true if all good
//else it will trigger displayResult() with the following error
function validateLogin(loginState){
    switch (loginState){
        case 0:{
            displayResult("Invalid username!")
            return false
            break
        }
        case 1:{
            displayResult("Wrong password!")
            return false
            break
        }
        case 2:{
            displayResult("Please fill in the username and password")
            return false
            break
        }
        case true:{
            displayResult("Welcome!")
            return true
            break
        }
        case _:{
            displayResult("An unefined error happened.")
            return null
            break
        }
    }
}

//This trigger an block of code when the login button is clicked
loginElements.btnLogin.onclick;{
    //clearText(1);
    validateLogin(checkLogin());
}
console.log(validateLogin(checkLogin()))