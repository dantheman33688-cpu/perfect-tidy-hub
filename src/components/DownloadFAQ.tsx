// src/components/PerfectTidyDownloadFAQ.tsx

import React from 'react';

const PerfectTidyDownloadFAQ: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-700">
      {/* -------------------- 1. FAQ: Download & Updates -------------------- */}
      <section id="perfect-tidy-faq" className="py-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Perfect Tidy Download & Game FAQ
            </h2>
          </div>
          
          <div className="divide-y divide-gray-100">
            {/* Q1: Game Type/Genre */}
            <div className="faq-item p-6 hover:bg-gray-50 transition-colors">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full mr-3">Q</span>
                What type of game is Perfect Tidy?
              </h3>
              <p className="mt-3 pl-9 text-gray-600 border-l-2 border-blue-100">
                Perfect Tidy is a relaxing, satisfying puzzle game focused on organization and sorting. Players use simple tap, drag, and slide mechanics to tidy up messes and arrange items into their perfect final state.
              </p>
            </div>

            {/* Q2: How to Download & Cost */}
            <div className="faq-item p-6 hover:bg-gray-50 transition-colors">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full mr-3">Q</span>
                Where can I download Perfect Tidy for free?
              </h3>
              <p className="mt-3 pl-9 text-gray-600 border-l-2 border-blue-100">
                It is available for free download on the 
                <span className="inline-flex items-center mx-1 px-2 py-0.5 bg-blue-50 text-blue-600 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  </svg>
                  App Store for iOS devices
                </span> 
                and the 
                <span className="inline-flex items-center mx-1 px-2 py-0.5 bg-green-50 text-green-600 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 18v-6l5 3-5 3zm7-15H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 16H7V5h10v14z"/>
                  </svg>
                  Google Play Store for Android devices
                </span>. 
                The core game experience is free, with optional in-app purchases available.
              </p>
            </div>

            {/* Q3: Internet Requirement */}
            <div className="faq-item p-6 hover:bg-gray-50 transition-colors">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full mr-3">Q</span>
                Does Perfect Tidy support offline play?
              </h3>
              <p className="mt-3 pl-9 text-gray-600 border-l-2 border-blue-100">
                <span className="inline-block px-2 py-0.5 bg-purple-100 text-purple-800 rounded-md text-sm mr-1">Offline Play</span>
                The core levels and organization experience support offline play, allowing you to relax anytime, anywhere. However, some features, such as leaderboards and special events, may require an internet connection.
              </p>
            </div>

            {/* Q4: Update Frequency */}
            <div className="faq-item p-6 hover:bg-gray-50 transition-colors">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full mr-3">Q</span>
                How often is the game updated, and what new content is added?
              </h3>
              <p className="mt-3 pl-9 text-gray-600 border-l-2 border-blue-100">
                <span className="inline-block px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded-md text-sm mr-1">Regular Updates</span>
                Perfect Tidy receives regular updates, typically adding new levels, challenge content, and seasonal events to keep the relaxing experience fresh. Check the App Store or Google Play for the latest version information.
              </p>
            </div>

            {/* Q5: Difficulty/Time Limit */}
            <div className="faq-item p-6 hover:bg-gray-50 transition-colors">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full mr-3">Q</span>
                What should I do if I struggle with timed levels?
              </h3>
              <p className="mt-3 pl-9 text-gray-600 border-l-2 border-blue-100">
                When facing difficulties on timed levels, players can usually extend the timer by 
                <span className="inline-block mx-1 px-2 py-0.5 bg-blue-100 text-blue-700 rounded-md">watching an ad</span> 
                or by 
                <span className="inline-block mx-1 px-2 py-0.5 bg-green-100 text-green-700 rounded-md">purchasing the premium version</span> 
                to help successfully complete the organization task.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- 2. System Requirements & Version History -------------------- */}
      <section id="system-requirements" className="py-8 mt-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 px-6 py-4 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
              System Requirements and PC Play
            </h2>
          </div>
          
          <div className="p-6">
            {/* Mobile Requirements */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Mobile Device Requirements
              </h3>
              <ul className="space-y-2 text-gray-600 ml-2">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 bg-blue-100 text-blue-600 rounded-full mr-3 mt-0.5">•</span>
                  <span><strong className="text-gray-800">Android Version:</strong> Requires Android 6.0 and up</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 bg-blue-100 text-blue-600 rounded-full mr-3 mt-0.5">•</span>
                  <span><strong className="text-gray-800">iOS Version:</strong> Requires iOS 13.0 and up</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 bg-blue-100 text-blue-600 rounded-full mr-3 mt-0.5">•</span>
                  <span><strong className="text-gray-800">App Size:</strong> Approximately 41.5MB</span>
                </li>
              </ul>
            </div>

            {/* PC Emulation Requirements */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                PC Emulation Requirements (via BlueStacks/MEmu)
              </h3>
              <p className="text-gray-600 mb-3 ml-2">Play on PC using Android Emulators (Windows 7 and up) with:</p>
              <ul className="space-y-2 text-gray-600 ml-2">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 bg-purple-100 text-purple-600 rounded-full mr-3 mt-0.5">•</span>
                  <span><strong className="text-gray-800">Processor:</strong> Intel or AMD Processor</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 bg-purple-100 text-purple-600 rounded-full mr-3 mt-0.5">•</span>
                  <span><strong className="text-gray-800">Memory:</strong> Minimum 4GB RAM</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 bg-purple-100 text-purple-600 rounded-full mr-3 mt-0.5">•</span>
                  <span><strong className="text-gray-800">Storage:</strong> 5GB or more available space</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 bg-purple-100 text-purple-600 rounded-full mr-3 mt-0.5">•</span>
                  <span><strong className="text-gray-800">Other:</strong> Administrator permissions and latest graphics drivers</span>
                </li>
              </ul>
            </div>
            
            {/* Historical Version Information */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Historical Version Information
              </h3>
              <p className="text-gray-600 mb-3 ml-2">Perfect Tidy is continuously being optimized and updated:</p>
              <ul className="space-y-2 text-gray-600 ml-2">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 bg-indigo-100 text-indigo-600 rounded-full mr-3 mt-0.5">•</span>
                  <span>Game versions update frequently; the earliest version was released around late 2024</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 bg-indigo-100 text-indigo-600 rounded-full mr-3 mt-0.5">•</span>
                  <span>The latest version documented on platforms like Aptoide is <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-md">1.2.41</span> (July 2025)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 bg-indigo-100 text-indigo-600 rounded-full mr-3 mt-0.5">•</span>
                  <span>Main distribution platforms consistently provide the newest, most optimized version</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PerfectTidyDownloadFAQ;