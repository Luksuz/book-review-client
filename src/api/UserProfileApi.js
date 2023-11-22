
const token = localStorage.getItem('token');

export default async function fetchUserProfile(id) {
    const response = await fetch(`http://localhost:8000/api/profile/${id}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Token ${token}`
        }
    });
    const data = await response.json();
    console.log(data)
    return data;
}