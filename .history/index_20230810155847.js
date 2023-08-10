let input =document.querySelector('input')
let addBtn =document.querySelector(".add-btn")
let ul =document.querySelector('ul')
addBtn.addEventListener('click', addList)

function addList(e){
    e.preventDefault()
    console.log(input.value);
    let li = document.createElement('li')
    li.innerText= input.value
    ul.style.display= 'flex'
    ul.append(li)
}