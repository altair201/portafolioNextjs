'use client'
import Contac from "@/components/Contac/Contac";
import { useAppSelector } from '@/redux/hooks'

const ContacPage = () => {
    const darkMode = useAppSelector((state) => state.DarkModeSlice.darkMode);
    return (
        <main className={darkMode ? 'dark bg-zinc-900 h-screen pt-16' : 'h-screen pt-16'}>
            <Contac/>

        </main>
    )
};
export default ContacPage;