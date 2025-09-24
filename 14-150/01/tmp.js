function updateNames() {
    const surnameNode = document.getElementById('surname');
    surnameNode.innerHTML = "Ryzhkova";

    const nameNode = document.getElementById('name');
    nameNode.innerHTML = "Anastasia";

    const fathernameNode = document.getElementById('fathername');
    fathernameNode.innerHTML = "Ivanovna"; // Corrected line
}

const node_for_click = document.getElementById("for_click");
node_for_click.addEventListener("click", updateNames);
