'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import { timelineData } from '../data/timelineData';
import { TimelineYear } from '../types/timeline';

const Timeline = () => {
  return (
    <>
      <Navbar />
      <section id="timeline" className="relative py-16 px-4 sm:px-10">
        <h2 className="text-3xl font-bold text-center mb-10 tracking-wide">Timeline - 年表</h2>

        <div className="flex justify-center">
          <div className="relative border-l-4 border-blue-400/80 pl-6 max-w-lg bg-white/70 backdrop-blur-md shadow-md rounded-md p-4">
            {timelineData.map((yearData: TimelineYear, yearIndex: number) => (
              <div key={yearIndex} className="mb-10">
                <h3 className="text-2xl font-bold text-black">{yearData.year}</h3>
                {yearData.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="mb-6 relative">
                    {/* ドット */}
                    <div className="absolute -left-[1.1rem] top-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white z-10 animate-pulse" />

                    {/* 本文 */}
                    <div className="ml-2">
                      <h4 className="text-xl font-semibold text-black">{event.month}</h4>
                      <p className="text-md font-medium text-gray-700">{event.title}</p>
                      <p className="text-sm text-gray-600">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Timeline;
