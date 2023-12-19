'use client'
import Proyect from "@/components/Proyects/Proyects";
import { useAppSelector } from '@/redux/hooks'

const ProyectPage = () => {
    const darkMode = useAppSelector((state) => state.DarkModeSlice.darkMode);
    return (
        <main className={darkMode ? 'dark' : ''}>
            <Proyect/>

        </main>
    )
};
export default ProyectPage;