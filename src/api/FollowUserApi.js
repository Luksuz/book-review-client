
const token = localStorage.getItem('token');
export default async function handleFollow(followed) {
    const response = await fetch(`http://localhost:8000/api/follow/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Token ${token}`
        },
        body: JSON.stringify({
            "followed": followed
        })
    });
    const status = response.status;
    const data = await response.json();
    console.log(data);
    return status;
}