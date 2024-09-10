let all_data
const msgwrap=document.querySelector(".message-wrapper")
let msgwdth=msgwrap.offsetHeight
const theme=document.querySelector(".theme")
window.addEventListener("resize",()=>{
    msgwdth=msgwrap.offsetHeight
    document.documentElement.style.setProperty("--pour",`${eval(msgwdth + 15)}px`)
})
let nums=[]

const customers_msg=localStorage.getItem("customers_msg")
document.querySelector(".text-data").innerHTML=customers_msg
document.documentElement.style.setProperty("--pour",`${eval(msgwdth + 15)}px`)
// for (let i = 0; i < all_data.length; i++) {
//     // generating a random hex color code
//     let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
//     randomHex = `#${randomHex.padStart(6, "0")}`;
    
//     all_data[i].style.background=randomHex
//     all_data[i].innerHTML=`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="rgba(0,0,0,.4)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`
// }

async function fetch_data(){
    
    try {
         const request=await fetch("https://smsprovider-1.onrender.com/api/v1/customers/all",{
             headers:{
                 Accept: 'application/json'
             }
         })
        const response=await request
        const data=await response.json()
        const data_list=data.msg
        if (response.ok){
            if(data_list.length===0){
                document.querySelector(".body").innerHTML=`<p class="n-c">No contacts added</p>`
            }else{
                document.querySelector(".body").innerHTML=`<ul class="data_list_hold"></ul>`
                for(let i=0; i<data_list.length; i++){
                let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
                randomHex = `#${randomHex.padStart(6, "0")}`;
                
                
                    document.querySelector(".data_list_hold").innerHTML+=`<li class="items" key="${data_list[i].name}0${data_list[i].phoneNumber.slice(4,data_list[i].phoneNumber.length-0)}">
                    <div class="photo">
    
                    </div>
                    <div class="details">
                        <span class="user">${data_list[i].name}</span>
                        <span class="user">0${data_list[i].phoneNumber.slice(4,data_list[i].phoneNumber.length-0)}</span>
                        <div class="ooptn">
                            <div class="a" onclick='delete_customer("${data_list[i].phoneNumber}","${data_list[i].name}",${i})'>
                                
                            </div>
                        </div>
                    </div>
                </li>`
                all_data=document.querySelectorAll(".items .photo")
                all_data[i].innerHTML=`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="rgba(0,0,0,.4)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`
                nums.push(data_list[i].phoneNumber)
                all_data[i].style.background=randomHex
                }
            }
            
        }
    } catch (errr) {
         console.log(errr)
    }
 }


async function fetch_waller_balance(){
    try {
        const request=await fetch("https://smsprovider-1.onrender.com/api/v1/wallet",{
            headers:{
                Accept: 'application/json'
            }
        })
       const response=await request
       const data=await response.json()
       document.querySelector(".logo").innerHTML=`Balance :N${data.msg.balance}`
    }
    catch(error){
        console.log(error)
    }
}

fetch_waller_balance()

async function fetch_contacts(){
    try {
        const request=await fetch("https://smsprovider-1.onrender.com/api/v1/customers/all",{
            headers:{
                Accept: 'application/json'
            }
        })
       const response=await request
       const data=await response.json()
       const data_list=data.msg
       console.table(data_list)
       if (response.ok){
            if(data_list.length===0){
                document.querySelector(".contacts2").innerHTML=`<p class="n-c">No contacts added</p>`
            }else{
                document.querySelector(".contacts2").innerHTML=`<div class="each_contacts"><button class="snd" disabled>Send</button></div>`
            for(let i=0; i<data_list.length; i++){
            let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
                randomHex = `#${randomHex.padStart(6, "0")}`;
                
                    
                document.querySelector(".each_contacts").innerHTML+=`<div class="contact_item" key="${data_list[i].name}0${data_list[i].phoneNumber.slice(4,data_list[i].phoneNumber.length-0)}">
                    <div class="photo">

                    </div>
                    <div class="details">
                        <span class="user">${data_list[i].name}</span>
                        <span class="user">0${data_list[i].phoneNumber.slice(4,data_list[i].phoneNumber.length-0)}</span>
                        <div class="ooptn">
                            <div class="checker">
                                <input type="checkbox" />
                            </div>
                            </div>
                    </div>
                </div>`

                const all_data2=document.querySelectorAll(".contact_item .photo")
                all_data2[i].innerHTML=`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="rgba(0,0,0,.4)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`
                // nums.push(data_list[i].phoneNumber)
                all_data2[i].style.background=randomHex
                let senders_number=[]
                const cnts=document.querySelectorAll(".contact_item")
                cnts.forEach((item,index)=>{
                    item.addEventListener("click",()=>{
                        document.querySelectorAll(".checker input")[index].toggleAttribute("checked")
                        item.classList.toggle("selected")
                        
                        if (senders_number.includes(parseFloat(data_list[index].phoneNumber))){
                            senders_number = senders_number.filter(item => !data_list[index].phoneNumber.includes(item))
                        }else{
                            senders_number.push(parseFloat(data_list[index].phoneNumber))
                        }
                        console.log(senders_number)
                        senders_number.length<1? document.querySelector(".snd").setAttribute("disabled","true"): document.querySelector(".snd").removeAttribute("disabled")
                        document.querySelector("button.snd").addEventListener("click",()=>{
                            if (senders_number.length===1){
                                sendSingleSms(senders_number[0])
                            }else{
                                sendBulkSms(senders_number)
                            }
                        })
                    })
                })
            }
            }
           
       }
   } catch (errr) {
        console.log(errr) 
   }
} 
 fetch_data()
theme.addEventListener("click",()=>{
    document.body.classList.toggle("dark")
    if (document.body.classList.contains("dark")){
        theme.innerHTML=`<svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <circle fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff" cx="32.003" cy="32.005" r="16.001"></circle> <path fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff" d="M12.001,31.997c0-2.211-1.789-4-4-4H4c-2.211,0-4,1.789-4,4 s1.789,4,4,4h4C10.212,35.997,12.001,34.208,12.001,31.997z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff" d="M12.204,46.139l-2.832,2.833c-1.563,1.562-1.563,4.094,0,5.656 c1.562,1.562,4.094,1.562,5.657,0l2.833-2.832c1.562-1.562,1.562-4.095,0-5.657C16.298,44.576,13.767,44.576,12.204,46.139z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff" d="M32.003,51.999c-2.211,0-4,1.789-4,4V60c0,2.211,1.789,4,4,4 s4-1.789,4-4l-0.004-4.001C36.003,53.788,34.21,51.999,32.003,51.999z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff" d="M51.798,46.143c-1.559-1.566-4.091-1.566-5.653-0.004 s-1.562,4.095,0,5.657l2.829,2.828c1.562,1.57,4.094,1.562,5.656,0s1.566-4.09,0-5.656L51.798,46.143z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff" d="M60.006,27.997l-4.009,0.008 c-2.203-0.008-3.992,1.781-3.992,3.992c-0.008,2.211,1.789,4,3.992,4h4.001c2.219,0.008,4-1.789,4-4 C64.002,29.79,62.217,27.997,60.006,27.997z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff" d="M51.798,17.859l2.828-2.829c1.574-1.566,1.562-4.094,0-5.657 c-1.559-1.567-4.09-1.567-5.652-0.004l-2.829,2.836c-1.562,1.555-1.562,4.086,0,5.649C47.699,19.426,50.239,19.418,51.798,17.859z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff" d="M32.003,11.995c2.207,0.016,4-1.789,4-3.992v-4 c0-2.219-1.789-4-4-4c-2.211-0.008-4,1.781-4,3.993l0.008,4.008C28.003,10.206,29.792,11.995,32.003,11.995z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#231Fffffff20" d="M12.212,17.855c1.555,1.562,4.079,1.562,5.646-0.004 c1.574-1.551,1.566-4.09,0.008-5.649l-2.829-2.828c-1.57-1.571-4.094-1.559-5.657,0c-1.575,1.559-1.575,4.09-0.012,5.653 L12.212,17.855z"></path> </g> </g></svg>`
    }else{
        theme.innerHTML=`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19.9001 2.30719C19.7392 1.8976 19.1616 1.8976 19.0007 2.30719L18.5703 3.40247C18.5212 3.52752 18.4226 3.62651 18.298 3.67583L17.2067 4.1078C16.7986 4.26934 16.7986 4.849 17.2067 5.01054L18.298 5.44252C18.4226 5.49184 18.5212 5.59082 18.5703 5.71587L19.0007 6.81115C19.1616 7.22074 19.7392 7.22074 19.9001 6.81116L20.3305 5.71587C20.3796 5.59082 20.4782 5.49184 20.6028 5.44252L21.6941 5.01054C22.1022 4.849 22.1022 4.26934 21.6941 4.1078L20.6028 3.67583C20.4782 3.62651 20.3796 3.52752 20.3305 3.40247L19.9001 2.30719Z" fill="#ffffff"></path> <path d="M16.0328 8.12967C15.8718 7.72009 15.2943 7.72009 15.1333 8.12967L14.9764 8.52902C14.9273 8.65407 14.8287 8.75305 14.7041 8.80237L14.3062 8.95987C13.8981 9.12141 13.8981 9.70107 14.3062 9.86261L14.7041 10.0201C14.8287 10.0694 14.9273 10.1684 14.9764 10.2935L15.1333 10.6928C15.2943 11.1024 15.8718 11.1024 16.0328 10.6928L16.1897 10.2935C16.2388 10.1684 16.3374 10.0694 16.462 10.0201L16.8599 9.86261C17.268 9.70107 17.268 9.12141 16.8599 8.95987L16.462 8.80237C16.3374 8.75305 16.2388 8.65407 16.1897 8.52902L16.0328 8.12967Z" fill="#ffffff"></path> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#ffffff"></path> </g></svg>`
    }
})
function refresh(){
    window.location.reload()
}

const ul_holder=document.querySelector(".body ul")
async function delete_customer(id,name,item){
    if (confirm(`Are you sure you want to delete ${name} ${id}`)){
        console.log(item)
        const request = await fetch("https://smsprovider-1.onrender.com/api/v1/customers/delete",{
            method: 'DELETE',
            headers: {
                "Content-type": "application/json"
            },
            body:JSON.stringify({
                "phoneNumber":[id]
            })
        })
        const response=await request
        
        if (response.ok) {
            fetch_data()
            alertmsg("success","#4070f4")
        }else{
            alertmsg("success","red")
        }
        console.log(response)
        const list=document.querySelector(".body ul")
        list.removeChild(list.children[item])
        fetch_data()
    }
}
function checkPhoneValid(){
    const phn=document.querySelector(".phn")
    if (phn.value.length===11){
        document.querySelector(".save_btn").removeAttribute("disabled","")
        return true
    }else{
        document.querySelector(".save_btn").setAttribute("disabled","")
        return false
    }
}
document.querySelector("form").addEventListener("submit",e=>{
    e.preventDefault()
})
const phn=document.querySelector(".phn")
const nmm=document.querySelector(".nmm")
async function addCustomers(){
    const phone_data =document.querySelector(".phn").value
    const name_data= document.querySelector(".nmm").value
    const phn_dta= ` ${phone_data} `
    const cpd=`+234${parseFloat(phn_dta)}`
    const nnn_data=`${name_data}`
    try {
        if ( nums.includes(cpd)){
            alertmsg("Number already exists","red")
        }
        if (checkPhoneValid() && !nums.includes(cpd)){
            
            const request = await fetch("https://smsprovider-1.onrender.com/api/v1/customers/add",{
                method: "POST",
                headers: {
                    "Content-type": 'application/json' // Indicates the content 
                },
                body :JSON.stringify({
                    "name":nnn_data,  
                    "phoneNumber":cpd
                })
                
            })
            const response = await request
            if (response.ok) {
                fetch_data()
                alertmsg("success","#4070f4")
            }else{
                alertmsg("failed","red")
            }
            console.log(nums)            
        }
   } catch (error) {
        console.log(error)
   }
    
      
}
const alert_msg=document.querySelector(".alert")
function alertmsg(msg,background){
    alert_msg.innerHTML=msg
    alert_msg.style.background=background
    alert_msg.classList.add("show")
    setTimeout(()=>{
        alert_msg.classList.remove("show")
        
    },1000)
}
// document.querySelector(".save_btn").addEventListener("click",addCustomers)

function promptEdit(){
    document.querySelector(".prompt_wrapper").classList.add("show")
    
}
function save_txt(){
    if (document.querySelector(".txt_rea").value.length>10){
        localStorage.setItem("customers_msg",`${document.querySelector(".txt_rea").value}`)
        alertmsg("Message edited","#4070f4")
        document.querySelector(".text-data").innerHTML=document.querySelector(".txt_rea").value
        document.querySelector(".txt_rea").value=""
    }else{
        alertmsg("Message must be greater than 10 charters","red")
    }
}
function promptClose(){
    document.querySelector(".prompt_wrapper").classList.remove("show")
}
function showPrompt2(){
    document.querySelector(".prompt_wrapper2").classList.add("show")
}
function closePrompt2(){
    document.querySelector(".prompt_wrapper2").classList.remove("show")
}
function show_contacts(){
    document.querySelector(".all_contacts").classList.add("show")
}
function show_contacts(){
    document.querySelector(".all_contacts").classList.add("show")
}
function close_contacts(){
    document.querySelector(".all_contacts").classList.remove("show")
}

function filter_item(){
    const search_value=document.querySelector(".search_holder .searchCon1")
    const search_items=document.querySelectorAll("ul .items")
    search_items.forEach((item,index)=>{
        if((item.getAttribute("key").toUpperCase()).match(search_value.value.toUpperCase())){
            item.classList.add("ppp")
            item.classList.remove("hide")
        }else{
            item.classList.remove("ppp")
            item.classList.add("hide")
        }
    })
}
function filter_item2(){
    const search_value=document.querySelector(".search_holder .fireman")
    const search_items=document.querySelectorAll(".each_contacts .contact_item")
    search_items.forEach((item,index)=>{
        if((item.getAttribute("key").toUpperCase()).match(search_value.value.toUpperCase())){
            item.classList.add("ppp")
            item.classList.remove("hide")
        }else{
            item.classList.remove("ppp")
            item.classList.add("hide")
        }
    })
}
async function sendSingleSms(data303){
    try {
        const request =await fetch("https://smsprovider-1.onrender.com/api/v1/sms/single",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "reciever":data303,
                "information":localStorage.getItem("customers_msg")  
            }) 
        })
        const response=await request.json()
        const data=response
        const jsn= data
        console.log(jsn.msg)
        if (jsn.msg===`400 : "You have insufficient balance"`){
            alertmsg("Insufficient balance","red")
        }else{
            alertmsg("Message sent","#4070f4")
        }
        // console.log(sharp_data.message.toString().slice(5,sharp_data.message.toString().length))
    } catch (error) {
        console.log(error)
    }
}

async function sendBulkSms(data234){
    try {
        const request =await fetch("https://smsprovider-1.onrender.com/api/v1/sms/bulk",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "recievers":data234,
                "information":localStorage.getItem("customers_msg")  
            }) 
        })
        const response=await request
        const data =await response.json()
        const msgs=(JSON.parse(data.msg).message).toString()
        if (msgs===`400 : "You have insufficient balance"`){
            alertmsg("insufficient balance","red")
        }else{
            alertmsg("Message sent","#4070f4")
        }
    } catch (error) {
        console.log(error)
    }
}
const acc_det=document.querySelector(".account_details")
function show_acc(){
    acc_det.classList.add("show")
}
acc_det.addEventListener("click",()=>{
    acc_det.classList.remove("show")
})
