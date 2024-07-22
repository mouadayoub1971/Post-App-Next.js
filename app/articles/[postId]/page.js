import PostFetch from "@/app/components/PostFetch";
import { Suspense } from "react";

export default async function PostId({ params }) {
 const id = params.postId; 
 const JSXVariable = (<dic><h1>Wait Dog</h1></dic>) 
 return (
  <div
  >
   <h1>Before suspense</h1>
   <Suspense fallback={JSXVariable}>
    <PostFetch postId={id}/>
   </Suspense>
  </div>
 );
}