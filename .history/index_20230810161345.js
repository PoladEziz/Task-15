let input = document.querySelector("input");
let addBtn = document.querySelector(".add-btn");
let ul = document.querySelector("ul");
let errorMsj = document.querySelector("span");
addBtn.addEventListener("click", addList);

function addList(e) {
    e.preventDefault();
    console.log(input.value);
    if (input.value) {
        errorMsj.style.display = "none";
        // let li = document.createElement("li");
        // li.innerText = input.value;
        // ul.style.display = "flex";
        // ul.append(li);
        ul.style.display = 'flex'
        ul.innerHTML += `<li>
<p>${input.value}</p>
<button class="remove-btn">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#C4C4C4"/>
        <path d="M6 6L14 14" stroke="#C4C4C4"/>
        <path d="M6 14L14 6" stroke="#C4C4C4"/>
        </svg>
</button>
</li> 
`;

        input.value = "";
    } else {
        errorMsj.style.display = "inline";
    }

    let allRemoveBtns= document.querySelectorAll(".remove-btn")
    allRemoveBtns.forEach(item=>{
        item.addEventListener('click')
    })
}
