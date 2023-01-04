let email = document.getElementById("floatingInput")
let password = document.getElementById("floatingPassword")
const form = document.querySelector("[data-form]")
const userError = document.getElementById("userError")


class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    static loginUser() {
        const user = new User(email.value, password.value)
        return user
    }
}

async function connect() {
    const connection = await fetch('https://authentication-api-pvz6.onrender.com/v1/login', {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "Permissions-Policy": "interest-cohort=()"
        },
        body: JSON.stringify(User.loginUser())
    });
    const convertedConnection = await connection.json();
    if (!convertedConnection.result){
        userError.innerHTML = conexaoConvertida.message
    }
    return
}

form.addEventListener('submit', (e) => {
    connect()
    e.preventDefault()
})