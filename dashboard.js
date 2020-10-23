function showUserInfo(){
    let userLogin = JSON.parse(localStorage.getItem("loginUserInfo"));
    console.log(userLogin[0].name);
    document.getElementById("user-name").innerHTML = userLogin[0].name;
    document.getElementById("full-name").innerHTML = userLogin[0].name;
    
    document.getElementById("email").innerHTML = userLogin[0].email;
    
    
}
showUserInfo();