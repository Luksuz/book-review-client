export default async function handleFeedFetch(token, id) {
  try {
    const response = await fetch(`http://localhost:8000/api/get_followed_posts/`, {
      headers: {
        Authorization: `Token ${token}`,
      }
    });
    const data = await response.json();
    return data;
    } catch (err) {
    console.error(err);
    throw err;
  }
}
