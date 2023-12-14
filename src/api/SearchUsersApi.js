

export default async function searchUsers(searchTerm) {
    const response = await fetch(`http://44.219.26.16:8000/api/search/${searchTerm}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const data = await response.json();
    console.log(data);
    return data;
}