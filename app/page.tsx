import Image from "next/image";
import CategoriesList from "./conponents/CategoriesList";
import Posts from "./conponents/posts";
import postsData from "@/data";

export default function Home() {
  return (
<>
    <CategoriesList/>
   { postsData && postsData.length>0 ?
   (postsData.map((post)=> <Posts key={post.id} 
        id={post.id}
        author={post.author}
        date={post.datePublished}
        thambnail='https://lynkbooster.com/wp-content/uploads/2021/04/generateur-app-sans-developpeur-700x423-1-e1619712125455.jpg'
        authorEmail= 'test@gmail.com'
        title={post.title}
        content={post.content}
        links={post.links||[]}
        category={post.category}
        />)) 
   :<div className="py-6">there is no post</div>}
  </>
  );
}
