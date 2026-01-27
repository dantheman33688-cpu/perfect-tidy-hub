// src/app/playonline/page.tsx
import { Metadata } from 'next';
import GameDetail from "@/components/GameDetail";
import Levels from "@/components/Levels";
import Image from 'next/image';
import Ads from "@/components/Ads";


export const metadata: Metadata = {
  title: 'Play Perfect Tidy Online - Free ASMR Organizing Game',
  description: 'Escape into ultimate chill & relaxation with Perfect Tidy. A satisfying ASMR puzzle game featuring cleaning, sorting, and organizing mini-games to ease your stress.',
  alternates: {
    canonical: 'https://www.perfecttidyhub.com/playonline',
  },
  openGraph: {
    title: 'Perfect Tidy Level Guides & Solutions - Play Online Free',
    description: 'Perfect Tidy puzzle game guide with hundreds of level walkthroughs, solutions, and relaxing ASMR gameplay tips.',
    images: ['/images/thumbnails/perfect-tidy-cover.jpg'],
    url: 'https://www.perfecttidyhub.com/playonline',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perfect Tidy Level Guides & Solutions - Play Online Free',
    description: 'Perfect Tidy puzzle game guide with hundreds of level walkthroughs, solutions, and relaxing ASMR gameplay tips.',
    images: ['/images/thumbnails/perfect-tidy-cover.jpg'],
  },
};

export default function HexaSortPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 主内容容器 */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* 游戏详情区块 */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <GameDetail
            title="Play Perfect Tidy Online"
            subtitle="A satisfying ASMR organizing and sorting game"
            description="Perfect Tidy is a highly-addictive casual puzzle game designed to soothe your mind. It combines various mini-games like tidying, sorting, cleaning, and decorating with comforting ASMR sounds to deliver the ultimate relaxing experience."
            image="/games/perfect-tidy.jpg"
            developer="Relaxation Games Studio"
            iframeSrc="https://relaxgame.win/games/perfect-tidy/"
            overview={
              <div className="text-gray-800">
                <p className="leading-relaxed text-lg">
                  Step into a digital sanctuary of order and relaxation with <strong>Perfect Tidy</strong>. 
                  This highly-detailed organization puzzle game is designed to be a therapeutic escape, 
                  inviting players to transform cluttered chaos into satisfying, <strong>picture-perfect order</strong>. 
                  Interact with a variety of everyday scenes—from messy workspaces to disorganized kitchen cabinets—using 
                  intuitive tap, drag, and slide mechanics that make the act of tidying deeply satisfying.
                </p>
              </div>
            }
            whatIs={
              <div className="text-gray-800">
                <p className="leading-relaxed text-lg">
                  <strong>Perfect Tidy</strong> is a relaxing, anti-stress puzzle game rooted in the joy of organization and precision. 
                  Unlike simple sorting games, this title requires a keen eye for detail and an understanding of spatial logic. 
                  Each level functions as a unique challenge where players must not only place items correctly but also adhere 
                  to real-world organizing rules, such as stacking by size, grouping by type, and assembling broken components.
                </p>
              </div>
            }
            howToPlay={
              <div className="text-gray-800 space-y-6">
                {/* 通用游戏说明 */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="leading-relaxed text-lg font-medium text-gray-900">
                    The core gameplay is centered on precise item arrangement and restoration. 
                    To succeed, players must pay close attention to the spatial requirements 
                    and implied order of each scene, often requiring strategic planning to manage 
                    limited space and required sequences.
                  </p>
                </div>

                {/* 示例关卡1：书桌整理 */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="leading-relaxed text-lg mb-4">
                    <strong>Example Level: The Tidy Desk:</strong> Success demands not just placement, but assembly. 
                    Begin by repairing items, like snapping the dropped keycap back onto the keyboard 
                    or joining the Joy-Con controllers to the Nintendo Switch. Then, organize items logically: 
                    spectacles belong in their case, digital accessories like AirPods and power banks in designated areas, 
                    and devices placed neatly on the charging mat or resting pad.
                  </p>
                  <div className="flex justify-center">
                    <Image 
                      height="300"
                      width="450"
                      alt="Perfect Tidy Level 2 Walkthrough: Arranging the keyboard, Switch, headphones, and devices on the desk for perfect order." 
                      title="Perfect Tidy Level 2 Solution: Organizing a messy desk." 
                      loading="lazy" 
                      src="/perfect-tidy-level-2.png" 
                      className="rounded-lg shadow-md border border-gray-200"
                    />
                  </div>
                </div>

                {/* 示例关卡2：餐具整理 */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="leading-relaxed text-lg mb-4">
                    <strong>Example Level: The Dish Rack:</strong> Precision is key. Plates must be stacked in descending order of size, 
                    from largest (bottom) to smallest (top). Cutlery, such as knives, forks, and chopsticks, must be grouped 
                    and arranged sequentially, usually by length, within their respective compartments. All remaining items, 
                    like cups and bowls, must fit precisely into their designated slots to complete the level.
                  </p>
                  <div className="flex justify-center">
                    <Image 
                      height="300"
                      width="450"
                      alt="Perfect Tidy Level 3 Solution: Stacking plates by size and sorting cutlery in the kitchen drawer organization puzzle." 
                      title="Perfect Tidy Level 3 Walkthrough: Precise organization of kitchen cutlery and dinnerware." 
                      loading="lazy" 
                      src="/perfect-tidy-level-3.png" 
                      className="rounded-lg shadow-md border border-gray-200"
                    />
                  </div>
                </div>
              </div>
            }
          />
        </section>

        <Ads />
        
        {/* 关卡选择区块 */}
        <section className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl shadow-sm border border-gray-100 p-6">
          <Levels />
        </section>
        
      </div>
    </div>
  );
}