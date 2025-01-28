// let form = document.querySelector("form");

// let username = document.getElementById("uName");
// let password = document.getElementById("uPass");

// let gender = document.getElementsByName("gender");
// console.log(gender);    

// form.addEventListener("submit" , event=>{
//     event.preventDefault();
//     let un = username.value;
//     let up = password.value;
//     let gen = gender.value;

//     console.log(un , up , gen);
// }
// )

// for(let i=0;i<=gender.length-1;1++){
//     //console.log(gender[i].value);
//     //console.log(gender[i].checked);
//     if(gender[i].checked ==true){
//         gen =gender[i].value;
//     }
// }

// //console.log


// let form =document.querySelector("form");
// let username =document.getElementById("uName");
// let pass =document.getElementById("uPass");
// let gender =document.getElementsByName("Gender");

// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     let uname = username.value;
//     let psw = pass.value;
//     let gen ="";
//     for (let i=0; i<=gender.length-1;i++){
//         // console.log(gender.checked);
//         if(gender[i].checked == true){
//             gen =  gender[i].value;
//         }
//     }
//    let userDetails={
//     username:uname,
//     password:psw,
//     gender:gen
//    }
//     console.log(userDetails);
//     sessionStorage.setItem("userData", JSON.stringify(userDetails))
     
// })


// let username = document.getElementById("uName");
// let password = document.getElementById("uPass");
// let check = document.getElementById("check");
// let show = document.getElementById("show");

// let gender = document.getElementByName("gender");

// // ! hiding and showing the password values
// check.addEventListener("click",)

let form =document.querySelector("form");
let username =document.getElementById("uName");
let pass =document.getElementById("uPass");
let check =document.getElementById("check");
let show = document.getElementById("show")
let gender =document.getElementsByName("Gender");


check.addEventListener("click", event=>{
    if(event.target.checked == true){
        pass.setAttribute("type", "text");
        show.innerText = "hide password";
    }else{
        pass.setAttribute("type", "text");
        show.innerText = "show password";
    }
})
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let uname = username.value;
    let psw = pass.value;
    let gen ="";
    for (let i=0; i<=gender.length-1;i++){
        // console.log(gender.checked);
        if(gender[i].checked == true){
            gen =  gender[i].value;
        }
    }
   let userDetails={
    username:uname,
    password:psw,
    gender:gen
   }
    console.log(userDetails);
    sessionStorage.setItem("userData", JSON.stringify(userDetails))
     
})



