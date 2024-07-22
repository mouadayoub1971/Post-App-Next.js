export default async function PostFetch({ postId }) {
 await new Promise((resolve) => {
  setTimeout(() => {
   resolve()
  }, 2000)
 });
 const response = await fetch(
  `https://jsonplaceholder.typicode.com/posts/${postId}`,
  {
   next: {
    revalidate: 120,
   },
  }
 );
 const post = await response.json();
 return (
  <div
   style={{
    width: '70%',
    background: 'white',
    padding: '10px',
    color: 'black',
    borderRadius: '10px',
    marginTop: '6px',
   }}
  >
   <h1>text below is the post title</h1>
   <h1>{post.title}</h1>
  </div>
 );
}
