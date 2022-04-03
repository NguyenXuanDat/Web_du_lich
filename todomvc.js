const input = document.querySelector("#newlist");
const new_list = document.querySelector(".middle");
const container = document.querySelector(".container")

function newsubmit() {
    const list = input.value;
    if (list === "") {
        alert("Bạn hãy nhập công việc cần làm");
        return;
    }
    const new_div = document.createElement("div");
    new_div.classList.add("to-do");
    new_list.appendChild(new_div);
    const new_todo = document.querySelector(".to-do");
    const new_input = document.createElement("input")
    new_input.classList.add('text');
    new_input.type = 'text';
    new_input.value = list;
    new_input.setAttribute("readonly", "readonly");
    new_div.appendChild(new_input);
    const new_button = document.createElement("button");
    new_button.classList.add("delete");
    new_div.appendChild(new_button);
    new_button.innerText = "Delete";

    input.value = "";
    new_button.addEventListener('click', function() {
        new_list.removeChild(new_div);
    });
    new_input.addEventListener('dblclick', function() {
        new_input.removeAttribute("readonly");
    });
    new_input.addEventListener('mouseout', function() {
        new_input.setAttribute("readonly", "readonly");
    });
}