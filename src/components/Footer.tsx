import Link from 'next/link';  // <-- Add this import at the top

export default function Footer() {
    return (
      <footer className="bg-[#f0f4f8] py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo和描述 */}
            <div className="mb-6 md:mb-0">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 rounded-lg p-2 mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-600">Perfect Tidy</h3>
              </div>
              <p className="text-amber-700">
                  Perfect Tidy offers a unique blend of satisfying sorting, brain-boosting puzzles, and therapeutic ASMR soundscapes. Download now to elevate your spiritual life and de-stress through the art of organization.
              </p>
            </div>
            
            {/* 链接 */}
            <div>
              <h3 className="font-bold text-lg text-blue-600 mb-4">Help</h3>
              <ul className="space-y-3">
                <li><Link href="/download" className="text-amber-700 hover:text-blue-600 transition-colors">Download</Link></li>
                <li><Link href="/levels" className="text-amber-700 hover:text-blue-600 transition-colors">Levels</Link></li>
                <li><Link href="/playonline" className="text-amber-700 hover:text-blue-600 transition-colors">Play Online</Link></li>      
                <li><Link href="/privacy" className="text-amber-700 hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-amber-700 hover:text-blue-600 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>

            
            {/* 游戏链接 */}
            <div>
              <h3 className="font-bold text-lg text-blue-600 mb-4">Games</h3>
              <ul className="space-y-3">
                <li><a href="/playonline" className="text-amber-700 hover:text-blue-600 transition-colors">Perfect Tidy</a></li>
              </ul>
            </div>
            
            {/* 联系方式 */}
            <div>
              <h3 className="font-bold text-lg text-blue-600 mb-4">Contact Us</h3>
              <p className="text-amber-700 mb-3">support@perfecttidy.com</p>
            </div>
          </div>
          
          {/* 版权信息 */}
          <div className="border-t border-gray-300 mt-10 pt-6 text-center">
            <p className="text-amber-700">
              © 2025 Perfect Tidy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }