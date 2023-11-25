'use client'
import Proyect from "@/components/Proyects/Proyects";
import { useAppSelector } from '@/redux/hooks'

const ProyectPage = () => {
    const darkMode = useAppSelector((state) => state.DarkModeSlice.darkMode);
    return (
        <main className={darkMode ? 'dark bg-zinc-900 h-screen containerDark' : 'containerDark'}>
            <Proyect/>

        </main>
    )
};
export default ProyectPage;