function find_edit() {
    const change_node = document.getElementById('name');
    change_node.innerHTML = "Victor";
}

const node_for_click = document.getElementById("for_click");
node_for_click.addEventListener("click", find_edit);
