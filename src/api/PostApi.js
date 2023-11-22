

export const createPost = async(author, title, content) => {
    console.log(author);    
    console.log(title);
    console.log(content);
    const response = await fetch('http://localhost:8000/api/bot/create_review', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "author": author,
            "title": title,
            "content": content
        })
    });
    const data = await response.json();
    console.log(data);
    return data;
}

export const deletePost = async(post_id) => {
    const response = await fetch(`http://localhost:8000/api/bot/delete_review/${post_id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "post": post_id
        })
    });
    const data = await response
    return data.status;
}

