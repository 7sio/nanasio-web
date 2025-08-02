import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import { newsData } from '../data/newsData';

const NewsPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">All News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <div key={news.id} className="bg-white rounded shadow-md overflow-hidden">
              <Image src={news.image} alt={news.alt} className="w-full h-48 object-cover" width={1920} height={1080} />
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{news.title}</h2>
                <p className="text-gray-700">{news.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsPage;
