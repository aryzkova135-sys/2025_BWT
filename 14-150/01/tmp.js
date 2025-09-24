function updateNames() {
    const surnameNode = document.getElementById('surname');
    surnameNode.innerHTML = "Ryzhkova";

    const nameNode = document.getElementById('name');
    nameNode.innerHTML = "Anastasia";

    const nameNode = document.getElementById('fathername');
    nameNode.innerHTML = "Ivanovna";
}

const node_for_click = document.getElementById("for_click");
node_for_click.addEventListener("click", updateNames);
