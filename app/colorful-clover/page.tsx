import React from 'react';
import Navbar from '../components/Navbar';

const ColorfulCloverPage = () => {
    return (
        <div>
            <Navbar />
            <h1 className="text-center text-3xl font-bold mt-16">Colorful Clover</h1>
            <div className="flex justify-center mt-8">
                <a href="/colorful-clover/spring" className="mx-4">
                    <img src="/images/colorful-clover/spring.jpg" alt="Spring" className="w-32 h-32 object-cover" />
                </a>
                <a href="/colorful-clover/summer" className="mx-4">
                    <img src="/images/colorful-clover/summer.jpg" alt="Summer" className="w-32 h-32 object-cover" />
                </a>
                <a href="/colorful-clover/autumn" className="mx-4">
                    <img src="/images/colorful-clover/autumn.jpg" alt="Autumn" className="w-32 h-32 object-cover" />
                </a>
                <a href="/colorful-clover/winter" className="mx-4">
                    <img src="/images/colorful-clover/thumbnail-winter.jpg" alt="Winter" className="w-32 h-32 object-cover" />
                </a>
            </div>
        </div>
    );
};

export default ColorfulCloverPage;
