'use client'
import Contac from "@/components/Contac/Contac";
import { useAppSelector } from '@/redux/hooks'

const ContacPage = () => {
    const darkMode = useAppSelector((state) => state.DarkModeSlice.darkMode);
    return (
        <main className={darkMode ? 'dark bg-zinc-900 sm:h-screen pt-16' : 'bg-gradient-to-b from-white to-950 to-gray-500 h-screen pt-16'}>
            <Contac/>

        </main>
    )
};
export default ContacPage;