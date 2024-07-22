export default function post(props){
 console.log(props);
 return (
  <div>
  <h1>[post]</h1>
  <h1>{props.params.post}</h1>
  </div>
 )
}