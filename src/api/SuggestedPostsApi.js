
const token = localStorage.getItem('token');
export default async function fetchSuggestedPosts(userId) {
    const response = await fetch(`http://44.219.26.16:8000/api/suggested_posts/`,
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Token ${token}`
        },
    });
    const data = await response.json();
    console.log(data);
    return data;
}