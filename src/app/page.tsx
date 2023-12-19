'use client'
import Landing from '@/components/Home/Landing'
import { useAppSelector } from '@/redux/hooks'

export default function Home() {
  const darkMode = useAppSelector((state) => state.DarkModeSlice.darkMode);
  return (
    <main className={darkMode ? 'dark' : ''} >
      <Landing />
    </main>
  )
}
