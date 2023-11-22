

async function handleRegistration(username, email, password, passwordConfirmation, newsletter) {
    const response = await fetch('http://localhost:8000/api/register/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "username": username,
            "email": email,
            "password": password,
            "passwordConfirmation": passwordConfirmation,
            "newsletter": newsletter
        })
    });
    const data = await response.json();
    return data;
}


export default handleRegistration;