import Link from 'next/link';
import Todo from '../components/todo';

export const metadata = {
 title: 'this is articles page',
};

export default async function articles() {
 const result = await fetch("https://jsonplaceholder.typicode.com/posts", {
  next: {
   revalidate: 120,
  },
 });
 const posts = await result.json();
 const JSXPosts = posts.map((post) => {
  return (
   <>
    <Link href={`/articles/${post.id}`} style={{width:"70%"}}>
    <div
     key={post.id}
     style={{
      width: '100%',
      background: 'white',
      padding: '10px',
      color: 'black',
      borderRadius: '10px',
      marginTop: '6px',
     }}
     >
     <h1>{post.title}</h1>
     <h1>{post.body}</h1>
    </div>
    <hr style={{color:"white" , marginTop: "2px"}} />
     </Link>
   </>
  );
 })
 return (
  <div>
   <h1>this is the posts pages</h1>
   {/* display post */}
   <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>{JSXPosts}</div>
  </div> 
 );
}
