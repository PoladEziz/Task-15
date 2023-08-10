let input =document.querySelector('input')
let addBtn =document.querySelector(".add-btn")
addBtn.addEventListener('click', addList)

function addList(e){
    e.prevenetDefault()
    console.log('list elave olundu');
}