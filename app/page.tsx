'use client';

import { useEffect, useState } from 'react'
import NewsSection from './components/NewsSection'
import ProfileSection from './components/ProfileSection'
import ContentsSection from './components/ContentsSection'
import CharacterSection from './components/CharacterSection'
import Navbar from './components/Navbar'
import GallerySection from './components/GallerySection'
import SpecialSection from './components/SpecialSection'
import TopSection from './components/TopSection'
import { characters } from './data/characterData'
import { specialData } from './data/specialData'
import LoadingScreen from '@/components/LoadingScreen' // ← ローディング画面のコンポーネント

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // sessionStorageにフラグがないならローディングを見せる
    const hasVisited = sessionStorage.getItem('hasVisited')
    if (hasVisited) {
      setIsLoading(false)
    } else {
      sessionStorage.setItem('hasVisited', 'true')
      // 任意の秒数だけ表示
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 2000) // 2秒ローディング

      return () => clearTimeout(timer)
    }
  }, [])

  if (isLoading) {
    return <LoadingScreen /> // ← ここでローディング画面を表示
  }

  return (
    <main className="font-sans scroll-smooth">
      {/* Topセクション */}
      <TopSection />
      <Navbar />

      {/* Newsセクション */}
      <NewsSection />

      {/* Profileセクション */}
      <ProfileSection />

      {/* Characterセクション */}
      <CharacterSection characters={characters} />

      {/* Contensセクション */}
      <ContentsSection />

      {/* Galleryセクション */}
      <GallerySection />

      {/* Specialセクション */}
      <SpecialSection data={specialData} />

      {/* クレジットセクション */}
      <footer className="text-center text-sm text-gray-500 py-8">
        © 2025 ななしお All Rights Reserved.
      </footer>
    </main>
  )
}
