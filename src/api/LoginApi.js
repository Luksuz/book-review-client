

async function handleLogin(username, password) {
    const response = await fetch('http://localhost:8000/api/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "username": username,
            "password": password,
        })
    });
    const data = await response.json();
    return data;
}


export default handleLogin;