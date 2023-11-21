import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { db } from "@/firebase/config";
import { type NextRequest, NextResponse } from "next/server";


export const POST =async (req:NextRequest): Promise<NextResponse> => {
    try {
        const {name, description, image, lgithub, ldeploy}=await req.json();

        if(!name ||!description || !image || !lgithub){
            throw new Error('Missinng data')
        }
        await addDoc(collection(db,'proyects'),{
            name,
            description,
            image,
            lgithub,
            ldeploy
        })
        return NextResponse.json({ message: 'Proyect creado' }, { status: 201 })
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status:400})
    }
}

export const GET = async (): Promise<NextResponse> => {
    try {
        const proyectsref =  query(collection(db,'proyects'))
        const proyects = await getDocs(proyectsref)
        const proyectsData = proyects.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
        }))
        return NextResponse.json( proyectsData , { status: 200 })
    } catch (error:any) {
        return NextResponse.json({ error: error.message }, { status: 400 })
    }
    
}