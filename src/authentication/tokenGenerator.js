async function tokenGenerator() {
    try {
        let token = ""
        for (let index = 6; index > 0; index--) {
            let number = Math.floor(Math.random() * 10 + 1)
            number > 9 ? token += number - 1 : token += number
        }
        return token
    } catch {
        return false
    }
}

export { tokenGenerator }