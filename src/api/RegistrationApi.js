

async function handleRegistration(username, email, password, passwordConfirmation, newsletter) {
    const response = await fetch('http://44.219.26.16:8000/api/register/', {
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