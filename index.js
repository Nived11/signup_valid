
document.getElementById("ph").addEventListener('keyup',(e)=>{
    res=phone(e.target.value)
    document.getElementById("phno").textContent=res?"*valid phone number":"*invalid phone number"
    document.getElementById("phno").style.color=res?"green":"red"
})

function phone(data){
    const pattern=/^[6-9]\d{9}$/
    return pattern.test(data);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("dob").addEventListener('keyup',(e)=>{
    date=dateOfBirth(e.target.value)
    document.getElementById("VorN").textContent=date?"*valid DOB" : "*invalid DOB"
    document.getElementById("VorN").style.color=date?"green" : "red"
})

function dateOfBirth(data){
const pattern=/^([0-2]\d||3[0-1])-([0]\d||1[0-2])-(\d{4})$/
return pattern.test(data);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("usrname").addEventListener('keyup',(e)=>{
    res=username(e.target.value)
    document.getElementById("usr").textContent=res?"*valid username":"*invalid username"
    document.getElementById("usr").style.color=res?"green":"red"
})

function username(data){
    const pattern=/^[a-z].{5}/
    return pattern.test(data);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("em").addEventListener('keyup',(e)=>{
    res=email(e.target.value)
    document.getElementById("email").textContent=res?"*valid email":"*invalid email"
    document.getElementById("email").style.color=res?"green":"red"
})

function email(data){
    const pattern=/.{4}(@gmail\.com)$/
    return pattern.test(data);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("pass").addEventListener('keyup',(e)=>{
    res=password(e.target.value)
    document.getElementById("pswd").textContent=res?"*valid password":"*invalid password"
    document.getElementById("pswd").style.color=res?"green":"red"
})

function password(data){
    const pattern=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/
    return pattern.test(data);
}