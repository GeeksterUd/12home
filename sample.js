const text=document.getElementById("text")
const total =document.getElementById("total")
const remain=document.getElementById("remain")
text.addEventListener("keyup",()=>{
    total.innerText=`Total characters:${text.value.length}`
    remain.innerText=`Remaining character:${text.getAttribute("maxLength")-text.value.length}`
})