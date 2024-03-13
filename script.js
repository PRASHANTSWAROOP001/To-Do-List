const  inputValue = document.querySelector("#taskfield");

const taskList = document.querySelector(".todo-list");

inputValue.addEventListener("keypress",(e) => {
    if(e.key === "Enter"){
        addData();
    }
})

function addData(){
    if(inputValue.value === ""){
        alert("please enter any data")
    }
    else{
       let tempList = document.createElement("li")
       tempList.innerHTML = inputValue.value;

       taskList.appendChild(tempList)

       let tempSpan = document.createElement("span");
       tempSpan.setAttribute("class","redtick")
       tempSpan.innerHTML = `<span class="material-symbols-outlined">
       check_box_outline_blank
       </span>`

       let delButton = document.createElement("input");
       delButton.setAttribute("value","Delete")
       delButton.setAttribute("type","button")
       delButton.setAttribute("class","delButton");

       let doneButton = document.createElement("input");
       doneButton.setAttribute("value","Done")
       doneButton.setAttribute("type","button")
       doneButton.setAttribute("class","doneButton");

       tempList.appendChild(tempSpan)
       tempList.appendChild(delButton)
       tempList.appendChild(doneButton)

       inputValue.value = "";


    }
}

taskList.addEventListener("click",(e) =>{
    // console.log(e.target.tagName);
    // console.log(e.target.classList.value);

    if (e.target.classList.value === "delButton") {
        console.log(e.target.parentElement);
        e.target.parentElement.remove()
    }
    else if(e.target.classList.value === "doneButton"){
        // console.log(e.target.tagName)
        // console.log(e.target.parentElement.children[0])

        const oldSpan = e.target.parentElement.children[0]
        const newSpan = document.createElement("span");
        newSpan.setAttribute("class","greentick")
        newSpan.innerHTML = `<span class="material-symbols-outlined">
        check_box
        </span>`;
        e.target.parentElement.replaceChild(newSpan,oldSpan)

    }
   
},false)

const allDone = document.querySelector("#allDone")

allDone.addEventListener("click",(e) => {
    
    // console.log(e.target.textContent)

    if(e.target.textContent === "All Done"){

        //console.log(taskList.childElementCount)

        if(taskList.childElementCount >= 1){
            
            Array.from(taskList.childNodes).forEach((e)=>{
                if(e.tagName === "LI"){
                    e.remove();
                }
            })

        }
    }


})
