const buttton = document.getElementById('buttons')
const congo = document.getElementById('success')
const passward = document.getElementById('error')
const notUser = document.getElementById('invaild')
const message = document.getElementById('message')

// buttton.addEventListener('click', ()=>{
//     if(congo.innerHTML === "Success") {
//         let baby = document.createElement('div');
//         baby.innerHTML = "Congrats";
//         baby.classList = "sucess"
//         message.appendChild(baby)
//     }
//     else if(passward.innerHTML === "Errro") {
//         let baby = document.createElement('div');
//         baby.innerHTML = "Passwasrd is wromg";
//         baby.classList = "sucess"
//         message.appendChild(baby)
//     }
//     else if(notUser.innerHTML === "Invalid"){
//         let baby = document.createElement('div');
//         baby.innerHTML = "Your are nat a user";
//         baby.classList = "sucess"
//         message.appendChild(baby)
//     }
// })
let con = '<i class="fa-solid fa-circle-check"></i> Successful Login'
let users = '<i class="fa-solid fa-circle-exclamation"></i> You are not a user'
let pass = '<i class="fa-solid fa-lock"></i> Wrong PassWard'
congo.addEventListener('click', ()=>{
    let baby = document.createElement('div');
        baby.innerHTML = con;
        baby.classList = "sucess"
        message.appendChild(baby);

        if(con.includes("Login")){
            baby.classList.add('login')
        }
        setTimeout(()=>{
            baby.remove();
        }, 3000)
})
passward.addEventListener('click', ()=>{
    let baby = document.createElement('div');
        baby.innerHTML = pass;
        baby.classList = "sucess"
        message.appendChild(baby);

        if(pass.includes("PassWard")) {
            baby.classList.add('pass')
        }
        setTimeout(()=>{
            baby.remove();
        }, 3000)
})
notUser.addEventListener('click', ()=>{
    let baby = document.createElement('div');
        baby.innerHTML = users;
        baby.classList = "sucess"
        message.appendChild(baby);

        if(users.includes("user")){
            baby.classList.add('users')
        }
        setTimeout(()=>{
            baby.remove();
        }, 3000)
})