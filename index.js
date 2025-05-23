const navMenu=document.getElementById("nav_menu")
const navToggle=document.getElementById("nav_toggle")
const navClose=document.querySelector(".nav_close")

if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add("show-menu")
    })
}
if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove("show-menu")
    })
}





const modalViews = document.querySelectorAll(".services_modal"),
      modalBtns=document.querySelectorAll(".services_button")
      modalCloses=document.querySelectorAll(".services_modal-close")

let modal=function(modalclick){
    modalViews[modalclick].classList.add("active-modal")
}

modalBtns.forEach((modalBtns,i)=>{
    modalBtns.addEventListener("click",()=>{
        modal(i)
    })
})

modalCloses.forEach((e)=>{
    e.addEventListener("click",()=>{
        modalViews.forEach((el)=>{
            el.classList.remove("active-modal")
        })
    })
})



var form=document.getElementById('form')
form.addEventListener('click',function(e){
     e.preventDefault()
    var name=document.getElementById("name").value
    var email=document.getElementById("email").value
    var projects=document.getElementById("projects").value
    var textarea=document.getElementById("textarea").value

    //url for post
    fetch("process.env.SLACK_WEBHOOK_URL",{
        method:'POST',
        body:JSON.stringify({
            name:name,
            email:email,
            projects:projects,
            textarea:textarea
        }),
        headers:{
            "Content-type":"application/json; charset=UTF-8",
            "Access-Control-Allow-Origin": "https://endearing-granita-3c7496.netlify.app",

            "Access-Control-Allow-Methods": "*"
        }
    })
    .then((res)=>{
        return res.json()
    })
    .then(data=>{
        console.log(data)
    })
    alert("Your form submitted!")
})
