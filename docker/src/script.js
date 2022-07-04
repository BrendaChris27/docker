async function table() {
    console.log(name.value)
    console.log(email.value)
    const infor = document.getElementById("conteudo")
    infor.innerHTML = ""
    try {
        const response = await axios.get(`http://localhost:3000/list`);
        console.log(response);
        const data = await response.data;

        data.forEach(function (data) {
            infor.innerHTML += `
               <td>${data.name}</td>
               <td>${data.email}</td>
               <td><input type="button" onclick="deletarDados(${data.id})" value="Deletar"></input></td>`;
        });
    } catch (error) {
        console.error(error);
    }
}
table()

function incluirDados() {
    const name = document.getElementById("name")
    const email = document.getElementById("email")
    axios
        .post(`http://localhost:3000/list`, {
            id: Math.floor(Date.now() * Math.random()),
            name: name.value,
            email: email.value,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    name.value = "";
    email.value = "";
    table()
    document.location.reload(true)
}

function deletarDados(id) {
    axios
        .delete(`http://localhost:3000/list/${id}`)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    table()
    document.location.reload(true)
}