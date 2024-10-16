"use client"
// catch all dynamic route
import { useParams } from "next/navigation"


export default function page(){
    const params = useParams(); // Get dynamic ID
    const { slug  } = params; // `slug` will be an array of URL segments
 return(
    <div className="bg-pink-300 h-[100vh] flex flex-col justify-center items-center ">
    <h1 className="font-extrabold text-4xl ">Category Page:</h1>
    <p className="font-extrabold text-4xl ">{slug ? slug.join(' / ') : 'No Categories'}</p>
  </div>
 )
}