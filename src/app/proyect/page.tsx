'use client'
import Proyect from "@/components/Proyects/Proyects";
import { useAppSelector } from '@/redux/hooks'

const proyect = () => {
    const darkMode = useAppSelector((state) => state.DarkModeSlice.darkMode);
    return (
        <main className={darkMode ? 'dark bg-zinc-900 containerPrimary' : 'containerPrimary'}>
            <Proyect/>

        </main>
    )
};
export default proyect;