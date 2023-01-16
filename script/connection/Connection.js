export async function fetchApi(uri, method, header, body) {
    let jwtHash;
    if (header) jwtHash = sessionStorage.getItem('Hash');
    const connection = await fetch(`https://authentication-api-pvz6.onrender.com${uri}`, {
        method: method,
        headers: {
            "content-type": "application/json",
            "Permissions-Policy": "interest-cohort=()",
            "Hash": jwtHash
        },
        body: JSON.stringify(body)
    })
    return connection
}

export async function fetchFinance(uri) {
    const connection = await fetch(`https://brapi.dev/api/quote/${uri}`, {
        method: 'GET',
        headers: {
            "content-type": "application/json",
            "Permissions-Policy": "interest-cohort=()",
        }
    })
    return connection
}