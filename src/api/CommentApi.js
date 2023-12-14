
const token = localStorage.getItem("token");

export const SendComment = async (commentAuthorId, comment, postId) => {
    console.log(commentAuthorId);
    console.log(comment);
    console.log(postId);
    const response = await fetch('http://44.219.26.16:8000/api/comment/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Token ${token}`
        },
        body: JSON.stringify({
            "author": commentAuthorId,
            "content": comment,
            "post_id": postId
        })
    });
    const data = await response.json();
    console.log(data);
    return data;
    }
    
export const deleteComment = async(comment_id) => {
    const response = await fetch(`http://44.219.26.16:8000/api/bot/delete_comment/${comment_id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Token ${token}`

        }
    });
    const data = await response
    console.log(data);
}

export const changeCommentapi = async(comment_id, content) => {
    const response = await fetch(`http://44.219.26.16:8000/api/bot/change_comment`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "comment_id": comment_id,
            "content": content
        })
    });
    const data = await response
    console.log(data);
}

