function updateNames() {
    const name1Node = document.getElementById('name1');
    name1Node.innerHTML = "Ryzhkova";

    const name2Node = document.getElementById('name2');
    name2Node.innerHTML = "Anastasia";

    const name3Node = document.getElementById('name3');
    name3Node.innerHTML = "Ivanovna"; // Corrected line
}

const node_for_click = document.getElementById("for_click");
node_for_click.addEventListener("click", updateNames);
