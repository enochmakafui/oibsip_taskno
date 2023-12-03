
const addButton = document.querySelector(".add");

addButton.addEventListener("click", () => {
    const input = document.querySelector("input");
    const value = input.value;
    console.log(value)
    if (value) {
        const li = document.createElement("li");
        li.classList.add("item");
        li.innerHTML = `
        <input type="checkbox" class="checkbox">
        <span class="item-name" >${value}</span>
        <button class="delete" ><i class="fas fa-trash"></i></button>`;
        const list = document.querySelector(".task-box");
        list.appendChild(li);
        input.value = "";
        deleteItem(li);
        cancelItem(li);
    }
});

function deleteItem(item) {
    const deleteButton = item.querySelector(".delete");
    deleteButton.addEventListener("click", () => {
        item.remove();
    });
}

function cancelItem(item) {

    const checkbox = item.querySelector(".checkbox");
    checkbox.addEventListener("change", () => {
        const span = item.querySelector(".item-name");
        // Use the 'span' element here
        
        span.classList.toggle("completed");
    });
}


