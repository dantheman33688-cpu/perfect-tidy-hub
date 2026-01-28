import Hero from "@/components/Hero";
import Levels from "@/components/Levels";
import Features from "@/components/Features";
import Download from "@/components/Download";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Ads from "@/components/Ads";


import PlayNow from "@/components/PlayNow";
import ShareButtons from "@/components/ShareButtons";


export default function Home() {
  const shareUrl = "https://www.perfecttidyhub.com/"; // Example URL
  const shareText = "Check out this awesome game!"; // Example text

  return (
    <>
      <Hero />

       {/* 在这里添加广告，广告会显示在 Hero 和 Levels 之间 */}
       <Ads />
       
      <Ads />
      <Levels />
      <Features />
      <Download />
      <About />
      <FAQ />
      <PlayNow />
      
      <ShareButtons url={shareUrl} text={shareText} />
    </>
  );
}
