"use client"
// multiple dynamic segment
import { useParams } from "next/navigation"


export default function page(){
    const params = useParams(); // Get dynamic ID
    const { category , size  } = params; // Extract the `id` param from the route
 return(
    <div className="bg-cyan-300 h-[100vh] flex flex-col justify-center items-center ">
    <h1 className="font-extrabold text-4xl ">Clothes Size: {size}</h1>
    <p className="font-extrabold text-4xl ">The category of this clothes is: {category}</p>
  </div>
 )
}