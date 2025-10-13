"use client";
import { useState, useRef, useEffect } from "react";

export default function PlayNow() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handlePlayNow = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    setIsModalOpen(false);
    setIsFullscreen(false);
  };

  const toggleFullscreen = () => {
    if (!isFullscreen && modalRef.current) {
      modalRef.current.requestFullscreen?.().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen?.();
    }
    setIsFullscreen(!isFullscreen);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Play Perfect Tidy Online",
        text: "Experience the ultimate ASMR tidying game directly in your browser!",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  // 监听全屏状态变化
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <>
      <section className="bg-[#f0f4f8] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-100">
            {/* 左边：图标+文字 */}
            <div className="flex items-center gap-5">
              {/* 游戏手柄图标 */}
              <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8 text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 8h6m-3-3v6m9 3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              {/* 文本 */}
              <div>
                <h3 className="text-xl font-bold text-blue-600">
                  Start Organizing Now: Play Perfect Tidy Instantly!
                </h3>
                <p className="text-amber-700 mt-2">
                  Experience the ultimate ASMR tidying game directly in your browser—no download or installation required.
                </p>
              </div>
            </div>

            {/* 右边：按钮 */}
            <button
              onClick={handlePlayNow}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-3 shadow-md transition-colors min-w-[180px] justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 3l14 9-14 9V3z"
                />
              </svg>
              <span className="text-lg">Play Now</span>
            </button>
          </div>
        </div>
      </section>

      {/* 模态框/蒙版 */}
      {isModalOpen && (
        <div className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 ${isFullscreen ? 'p-0' : 'p-4'}`}>
          <div
            ref={modalRef}
            className={`bg-white overflow-hidden flex flex-col ${isFullscreen ? 'fixed inset-0 rounded-none' : 'rounded-xl max-w-4xl w-full max-h-[90vh]'}`}
          >
            {/* 蒙版头部 - 带有logo和描述 */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6 text-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 8h6m-3-3v6m9 3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Perfect Tidy</h3>
                  <p className="text-sm opacity-80">ASMR Organization Game</p>
                </div>
              </div>

              {/* 操作按钮 */}
              <div className="flex space-x-2">
                <button onClick={handleShare} className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                </button>
                <button onClick={toggleFullscreen} className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    {isFullscreen ? (
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2h2a1 1 0 010 2H5a1 1 0 01-1-1V3a1 1 0 011-1zm0 16a1 1 0 01-1-1v-2H1a1 1 0 110-2h2a1 1 0 011 1v2a1 1 0 01-1 1zm16 0a1 1 0 01-1-1v-2h-2a1 1 0 110-2h2a1 1 0 011 1v2a1 1 0 01-1 1zm0-16a1 1 0 011 1v2h2a1 1 0 110 2h-2a1 1 0 01-1-1V3a1 1 0 011-1z" clipRule="evenodd" />
                    ) : (
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H5v3a1 1 0 01-2 0V4zm0 12a1 1 0 012 0v-3h3a1 1 0 110 2H4a1 1 0 01-1-1zm12 0a1 1 0 01-1 1h-4a1 1 0 010-2h3v-3a1 1 0 112 0v4zm0-12a1 1 0 011 1v2h2a1 1 0 110 2h-2a1 1 0 01-1-1V3a1 1 0 011-1z" clipRule="evenodd" />
                    )}
                  </svg>
                </button>
                <button onClick={closeModal} className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* iframe游戏区域 */}
            <div className="flex-grow">
              <iframe
                ref={iframeRef}
                src="https://tentrix-game.example.com"
                className="w-full h-full border-0"
                allowFullScreen
                allow="autoplay; fullscreen"
              ></iframe>
            </div>
            
            {/* 评论区 */}
            <div className="bg-gray-100 p-4">
              <h4 className="text-lg font-semibold">Comments</h4>
              <textarea className="w-full p-2 mt-2 border rounded-md" rows={4} placeholder="Add your comment..."></textarea>
              <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md">Submit</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
