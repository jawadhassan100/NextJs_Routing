"use client"
// dynamic segment
import { useParams } from "next/navigation"


export default function page(){
    const params = useParams(); // Get dynamic ID
    const { id } = params; // Extract the `id` param from the route
 return(
    <div className="bg-yellow-300 h-[100vh] flex flex-col justify-center items-center ">
    <h1 className="font-extrabold text-4xl ">Product ID: {id}</h1>
    <p className="font-extrabold text-4xl ">This is the page for the Product with ID: {id}</p>
  </div>
 )
}