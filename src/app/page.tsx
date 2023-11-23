'use client'
import Landing from '@/components/Home/Landing'
import { useAppSelector } from '@/redux/hooks'

export default function Home() {
  const darkMode = useAppSelector((state) => state.DarkModeSlice.darkMode);
  return (
    <main className={darkMode ? 'dark bg-zinc-900 h-screen text-white' : 'h-screen'} >
      <Landing />
    </main>
  )
}
