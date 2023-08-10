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
    let li = document.createElement("li");
    li.innerText = input.value;
    ul.style.display = "flex";
    ul.append(li);



ul.innerHTML

    input.value = "";
  } else {
    errorMsj.style.display = "inline";
  }
}
