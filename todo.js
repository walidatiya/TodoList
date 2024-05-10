document.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.addEventListener('click', function() {
        btn.parentElement.remove();
    });
});

let task = document.querySelector("input")
let message = document.getElementById("invalid")

document.getElementById("add-btn").onclick = function () {
    if(task.value === ""){
        task.style = "border-color : gray ; outline : 3px solid rgba(255,0,0,0.5)"
        message.innerHTML = `
        inavalid!
        `
        message.style=  "color : red ; margin-top : 7px ;font-size : 13px"
        document.querySelector('.input-part').appendChild(message)
    }else{
        message.remove()
        task.style = `` ;
        let container = document.querySelector(".tasks-part")
        let ctnTask = document.createElement("div")
        let btnRemove = document.createElement('button')
        let span = document.createElement("span")
        span.innerHTML = `${task.value}`
        btnRemove.className = "remove-btn"
        btnRemove.innerHTML = '<i class="fa-solid fa-trash"></i>'
        ctnTask.className = "task"
        span.className ='task-name'
        span.addEventListener("click" , function() {
            span.style = `text-decoration: line-through; color : green`
        })

        ctnTask.appendChild(span)

        
        ctnTask.appendChild(btnRemove) ;
    
        btnRemove.addEventListener('click' , () =>{
            btnRemove.parentElement.remove();
        });
    
        container.appendChild(ctnTask) ;
    }

}


document.querySelectorAll('.task-name').forEach((element)=>{
    element.addEventListener('click',() => {
        element.style = `text-decoration: line-through; color : green`
    })
}

)