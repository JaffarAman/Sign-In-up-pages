///////////Sign in box//////////////
let email = document.getElementById('email')
let password = document.getElementById('password')
let lock = document.getElementById('lock')
let emailerror = document.getElementById("emailerror")
let passerror = document.getElementById("passerror")

//////////SignUp Box/////////////
let fullName = document.getElementById("fullName")
let nameError = document.getElementById('nameError')

let emailup = document.getElementById("emailup")
let emailUpError = document.getElementById("emailUpError")
var emailup_validation = /^[a-zA-Z0-9_.]{1,}[@]{1}[a-z]{1,}[.]{1}[a-z]{1,}$/

let passup = document.getElementById("passup")
let lock1 = document.getElementById("lock1")
let passupError = document.getElementById("passupError")

let cnfrmpassup = document.getElementById('cnfrmpassup')
let lock2 = document.getElementById("lock2")
let cnfrmpassupError = document.getElementById('cnfrmpassupError')

// let Emailvalidation = emailup.match(emailup_validation)
///////////SignUp factionality ///////

let createAccount = () => {

    if (fullName.value === "") {
        fullName.style.borderBottom = '1px solid red'
        nameError.innerHTML = "Please Fill Your Full Name"
    }
    if (fullName.value !== "") {
        fullName.style.borderBottom = '1px solid lightgreen'
        nameError.innerHTML = ""
    }
    if (emailup.value === "") {
        emailup.style.borderBottom = '1px solid red'
        emailUpError.innerHTML = "Please Enter A Email Address"
    }
    if (emailup.value !== "") {
        if (!emailup.value.match(emailup_validation)) {
            emailup.style.borderBottom = '1px solid red'
            emailUpError.innerHTML = "Please Enter A Correct Email Address"

        }

        else {
            emailup.style.borderBottom = '1px solid lightgreen'
            emailUpError.innerHTML = ""

        }
    }

    if (passup.value === "") {
        passup.style.borderBottom = "1px solid red"
        passupError.innerHTML = "Please Enter Password!"
    }

    if (passup.value !== "") {
        passup.style.borderBottom = "1px solid lightgreen"
        passupError.innerHTML = ""
    }


    if (cnfrmpassup.value === "") {
        cnfrmpassup.style.borderBottom = "1px solid red"
        cnfrmpassupError.innerHTML = "Please Enter Confirm Password!"
    }

    if (cnfrmpassup.value !== "") {
        if (cnfrmpassup.value !== passup.value) {
            cnfrmpassup.style.borderBottom = "1px solid red"
            cnfrmpassupError.innerHTML = "Your Password is Not match"

        }
        else {
            cnfrmpassup.style.borderBottom = "1px solid lightgreen"
            cnfrmpassupError.innerHTML = ""
        }
    }
    // if (fullName.value !== "" && emailup !== "" && (passup.value !== "" && cnfrmpassup.value !== "")) {

    //     fullName.style.borderBottom = '1px solid lightgreen'
    //     nameError.innerHTML = ""
    //     if(emailup.value.match(emailup_validation)){
    //         emailup.style.borderBottom = '1px solid lightgreen'
    //         emailUpError.innerHTML = ""

    //     }
    //     else{
    //         emailup.style.borderBottom = '1px solid red'
    //         emailUpError.innerHTML = "Please Enter A Correct Email Address"

    //     }
    //     if(cnfrmpassup.value.match(passup.value)){
    //         cnfrmpassup.style.borderBottom = "1px solid orange"
    //         cnfrmpassupError.innerHTML = ""

    //     }
    //     else{
    //         cnfrmpassup.style.borderBottom = "1px solid purple"
    //         cnfrmpassupError.innerHTML = "Your Password is Not match"


    //     }

    if (fullName.style.borderBottom === "1px solid lightgreen" && emailup.style.borderBottom === "1px solid lightgreen" &&
        passup.style.borderBottom === "1px solid lightgreen" && cnfrmpassup.style.borderBottom === "1px solid lightgreen") {

            // fullName.value = ""
            // emailup.value  = ""
            // passup.value = ""
            // cnfrmpassup.value = ""

                window.open("signupdone.html")


    }

    // if(passup.value.match(cnfrmpassup.value)){
    //     // alert("your Password is not mathc")
    //     cnfrmpassupError.innerHTML = "Your Password is not Match"
    // }

}

let upcry = () => {
    if (lock1.className === "fas fa-lock") {
        lock1.className = "fas fa-lock-open"
        passup.setAttribute('type', 'text')
    }
    else {
        lock1.className = "fas fa-lock"
        passup.setAttribute('type', 'password')

    }


}

let upcry2 = () => {
    if (lock2.className === "fas fa-lock") {
        lock2.className = "fas fa-lock-open"
        cnfrmpassup.setAttribute('type', 'text')
    }
    else {
        lock2.className = "fas fa-lock"
        cnfrmpassup.setAttribute('type', 'password')

    }


}

let passcryt = () => {

    // console.log(lock.className)
    if (lock.className === "fas fa-lock") {
        lock.className = "fas fa-lock-open"
        password.setAttribute('type', "text")
    }
    else {
        lock.className = "fas fa-lock"
        password.setAttribute('type', "password")

    }
}

let submit = () => {
    // emailerror.innerHTML = "Please Enter A Email Address"
    // passerror.innerHTML = "Please Enter A Password "

    var email_validation = /^[a-zA-Z0-9_.]{1,}[@]{1}[a-z]{1,}[.]{1}[a-z]{1,}$/


    if (email.value === "" || password.value === "") {
        email.style.borderBottom = "1px solid red"
        password.style.borderBottom = "1px solid red"
        emailerror.innerHTML = "Please Enter A Email Address"
        passerror.innerHTML = "Please Enter A Password "
    }
    if (email.value !== "" && password.value === "") {
        if (!email.value.match(email_validation)) {

            email.style.borderBottom = "1px solid red"
            password.style.borderBottom = "1px solid white"
            passerror.innerHTML = "Please Enter A Password"
            emailerror.innerHTML = "Enter A Correct Email Address"
        }
        else {
            email.style.borderBottom = "1px solid white"
            password.style.borderBottom = "1px solid red"
            passerror.innerHTML = "Please Enter A Password"
            emailerror.innerHTML = ""

        }

    }
    if (email.value === "" && password.value !== "") {


        email.style.borderBottom = "1px solid red"
        password.style.borderBottom = "1px solid white"
        emailerror.innerHTML = "Please Enter A Email Address"
        passerror.innerHTML = ""

    }
    if (email.value.match !== "" && password.value !== "") {
        if (!email.value.match(email_validation)) {

            email.style.borderBottom = "1px solid red"
            password.style.borderBottom = "1px solid white"
            passerror.innerHTML = ""
            emailerror.innerHTML = "Enter A Correct Email Address"


        }

        else {
            email.style.borderBottom = "1px solid green"
            password.style.borderBottom = "1px solid green"
            passerror.innerHTML = ""
            emailerror.innerHTML = ""

        }

    }


}