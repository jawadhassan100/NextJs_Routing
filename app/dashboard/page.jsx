'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import Loading from './loading';
import { useEffect } from 'react';



export default function page(){
    const [loading, setLoading] = useState(true);
    const [triggerError, setTriggerError] = useState(false); 
    const router = useRouter()
    useEffect(()=>{
        const timer = setTimeout(() => {
            setLoading(false); 
        }, 2000); 

        return () => clearTimeout(timer); 
    },[])

    if (triggerError) {
        throw new Error('Simulated error for testing purposes');
    }

    
    return(
        <div className=" text-center ">
            {loading ? (
                <Loading/>) :(
                    <>
                    <h1 className=" text-4xl mb-4">Hello Dashboard</h1>
                    <div className="flex flex-col gap-3">
                    <button 
                        className="font-semibold bg-white rounded-sm px-4 pb-2 hover:bg-black hover:text-white link"
                        type="button"
                        onClick={() => setTriggerError(true)} // Button to trigger error
                    >
                        Simulate Error
                    </button>
                    <button 
                    className={`font-semibold bg-white rounded-sm px-4 pb-2 hover:bg-black hover:text-white link `}
                    type="button"
                    onClick={()=>{router.push("/dashboard/settings")}}
                    >Go to Settings</button>
                    </div>
                    </>
                )
            

            }
    </div>
    )
}