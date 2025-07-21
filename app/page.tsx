import NewsSection from './components/NewsSection'
import ProfileSection from './components/Profile'
import StorySection from './components/StorySection'
import CharacterSection from './components/CharacterSection'
import Navbar from './components/Navbar'
import GallerySection from './components/GallerySection'
import SpecialSection from './components/SpecialSection'
import TopSection from './components/TopSection'
import { storyData } from './data/storyData'
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

      {/* Introductionセクション */}
      <ProfileSection />

      {/* Storyセクション */}
      <StorySection data={storyData} />

      {/* Characterセクション */}
      <CharacterSection characters={characters} />

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
