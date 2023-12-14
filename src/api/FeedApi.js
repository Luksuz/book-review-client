export default async function handleFeedFetch(token, id) {
  try {
    const response = await fetch(`http://44.219.26.16:8000/api/get_followed_posts/`, {
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
