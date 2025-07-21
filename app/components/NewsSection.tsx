'use client'
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { newsData } from '../data/newsData';
import { motion } from 'framer-motion';

const NewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const memoizedNewsData = useMemo(() => newsData.slice(0, 4), []); // 上位4件のみ
  const currentNews = memoizedNewsData[currentIndex];

  return (
    <section id="news" className="relative scroll-mt-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('/bg_news-section.jpg')] bg-cover bg-center blur-sm"></div>
      </div>

      <div className="relative z-10">
        <div className="relative z-10 text-center mb-10">
          <h2
            className="text-4xl font-bold mb-10 text-pink-600"
            style={{
              textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5)',
              fontFamily: '"Bodoni MT", "Didot", "Didot LT STD", "Hoefler Text", Garamond, "Times New Roman", serif',
              fontWeight: '100',
              letterSpacing: '0.3em',
            }}
          >
            News
          </h2>
        </div>

        <div className="carousel flex flex-col items-center">
          <div className="flex justify-center gap-4">
            {memoizedNewsData.map((news, index) => (
              <Link href={news.link} key={`news-${news.id}`}>
                <motion.div
                  className="relative cursor-pointer transition-all duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setCurrentIndex(index)}
                >
                  <img
                    src={news.image}
                    alt={news.alt}
                    className={`w-64 h-32 object-cover rounded shadow-md transition-opacity duration-300 ${index === currentIndex ? 'opacity-100 scale-105 ring-4 ring-blue-400' : 'opacity-60 hover:opacity-80'}`}
                  />
                  {index === currentIndex && (
                    <div className="absolute bottom-1 right-1 bg-blue-500 text-white text-xs px-2 py-0.5 rounded">
                      SELECTED
                    </div>
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="carousel-indicators flex justify-center mt-4 mb-4">
            {memoizedNewsData.map((news, index) => (
              <div
                key={`indicator-${news.id}`}
                className={`w-2 h-2 rounded-full mx-1 cursor-pointer ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            href="/news"
            className="mt-4 mb-4 inline-block px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition"
          >
            View more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
