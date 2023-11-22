
const token = localStorage.getItem("token");
export default async function handleLike(post_id, user_id){

    const response = await fetch(`http://localhost:8000/api/like/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`,
        },
        body: JSON.stringify({
            "post_id": post_id,
        }),
    });
    const status = response.status;
    const data = await response.json();
    console.log(data);
    return status;
}