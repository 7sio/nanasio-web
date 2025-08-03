"use client";

import React, { useState } from 'react';
import Modal from './Modal';
import Image from 'next/image';
import { galleryImages } from '../data/galleryData';
import { motion } from 'framer-motion';

const GallerySection: React.FC = () => {
  const images = galleryImages.map(image => ({
    src: image.imageUrl,
    title: image.title,
    worldName: image.worldName,
    author: image.worldAuthor,
    description: image.description
  }));

  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    worldName: string;
    author: string;
    description: string;
  } | null>(images[0] || null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const showPreviousImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const showNextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const openModal = (image: {
    src: string;
    title: string;
    worldName: string;
    author: string;
    description: string;
  }) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    setCurrentIndex(images.indexOf(image));
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.section
      id="gallery"
      className="relative text-black px-4 sm:px-8 md:px-20 py-10 scroll-mt-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('/bg_gallery-section.webp')] bg-cover bg-center blur-sm"></div>
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
            Gallery
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-[4px] sm:gap-[6px] md:gap-[8px]">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              className="w-[80px] sm:w-[90px] md:w-[168px] aspect-square object-cover cursor-pointer"
              width={168}
              height={168}
              onClick={() => openModal(image)}
            />
          ))}
        </div>
        {selectedImage && (
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2 sm:p-4"
              onClick={closeModal}
            >
              <div
                className="relative bg-white rounded-lg shadow-lg max-w-[95vw] max-h-[calc(100vh-80px)] sm:max-h-[calc(100vh-100px)] overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full flex justify-center items-center px-2 pt-6 sm:px-8 sm:pt-6 pb-2">
                  <Image
                    src={selectedImage.src || ''}
                    alt="Selected"
                    className="object-contain max-h-[calc(100vh-220px)] max-w-[calc(100%-2rem)] w-auto h-auto"
                    width={800}
                    height={600}
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      showPreviousImage();
                    }}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-4 sm:p-5 rounded-full hover:bg-black/70 text-xl"
                  >
                    ‹
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      showNextImage();
                    }}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-4 sm:p-5 rounded-full hover:bg-black/70 text-xl"
                  >
                    ›
                  </button>

                  <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 bg-white text-black w-8 h-8 rounded-full shadow hover:bg-gray-200"
                  >
                    ×
                  </button>
                </div>

                <div className="p-3 text-center text-black bg-white text-sm">
                  <h3 className="text-lg font-semibold">{selectedImage?.title}</h3>
                  <p className="text-xs">{selectedImage?.worldName} - create by: {selectedImage?.author}</p>
                  <p className="text-xs mt-1">{selectedImage?.description}</p>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </motion.section>
  );
};

export default GallerySection;