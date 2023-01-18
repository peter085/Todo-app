var input = document.querySelector(" .input_div .input")
var btn = document.querySelector(" .input_div .addButton")
var container = document.querySelector(" .container")





function createTodo(){

  var del = document.createElement("div")
  container.appendChild(del)
    var output = document.createElement("h1")
    del.appendChild(output)
    output.textContent = input.value

    var btn1 = document.createElement("button")
    btn1.type = "submit"
    
    btn1.innerText = "edit"


    del.appendChild(btn1)

    del.style.display = "flex"
    del.style.gap = "20%"

  btn1.style.borderRadius = "20px"
  btn1.style.backgroundColor = "green"
  btn1.style.border = "none"
  btn1.style.paddingLeft = "30px"
  btn1.style.paddingRight = "30px"
  btn1.style.cursor = "pointer"

    var btn2 = document.createElement("button")
    btn1.type = "submit"
    
    btn2.innerText = "delete"
    del.appendChild(btn2)
    
  btn2.style.borderRadius = "20px"
  btn2.style.backgroundColor = "green"
  btn2.style.border = "none"
  btn2.style.paddingLeft = "30px"
  btn2.style.paddingRight = "30px"
  btn2.style.cursor = "pointer"

btn1.addEventListener('click', () =>{

 output.contentEditable = true
 output.style.backgroundColor = "black"


})


document.addEventListener("dblclick", () =>{

  output.contentEditable = false
  output.style.backgroundColor = "transparent"
})

btn2.addEventListener('click', () =>{
 container.removeChild(del)
})


}

 







btn.addEventListener('click',createTodo)
// btn.addEventListener('click',delt) 