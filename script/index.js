let email = document.getElementById("floatingInput")
let password = document.getElementById("floatingPassword")
const form = document.querySelector("[data-form]")
const userError = document.getElementById("userError")


class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    static createUser() {
        const user = new User(email.value, password.value)
        return user
    }
}

async function connect() {
    const conexao = await fetch('https://authentication-api-pvz6.onrender.com/v1/login', {
        method: "POST",
        body: JSON.stringify(User.createUser())
    });
    const conexaoConvertida = await conexao.json();
    if (conexaoConvertida.result) {
        console.log("liberado")
    } else {
        userError.innerHTML = conexaoConvertida.message
    }

    return conexaoConvertida;
}

form.addEventListener('submit', (e) => {
    connect()
    e.preventDefault()
})