'use client'
import Contac from "@/components/Contac/Contac";
import { useAppSelector } from '@/redux/hooks'

const contac = () => {
    const darkMode = useAppSelector((state) => state.DarkModeSlice.darkMode);
    return (
        <main className={darkMode ? 'dark bg-zinc-900 containerPrimary' : 'containerPrimary'}>
            <Contac/>

        </main>
    )
};
export default contac;