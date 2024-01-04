'use client'
import { useSearchParams } from 'next/navigation'

export default async function Comision(){   

    const searchParams = useSearchParams();
    const id  = searchParams.get('id');   
    console.log("Id --> " + id);   
    
    return(
        <>
        <h1>Comision</h1>  
        </>
    );
}