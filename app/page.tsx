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

export default function Home() {
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
