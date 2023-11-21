'use client'
import { useGetProyectsQuery } from "@/redux/services/proyectsAPI";



const Proyect = () => {
    const {data, isLoading, error} = useGetProyectsQuery();
    console.log(data);
    
    return(
        <div>proyect</div>
    )
};
export default Proyect;