"use client";

import Script from "next/script";

export default function Ads() {
  return (
    <div className="my-8 w-full flex justify-center">
      {/* 广告容器 */}
      <div
        id="container-1a111780103622bce12844820d84d8cd"
        className="min-h-[250px] w-full"
      />

      {/* 广告脚本 */}
      <Script
        src="https://pl28579745.effectivegatecpm.com/1a111780103622bce12844820d84d8cd/invoke.js"
        strategy="afterInteractive"
        data-cfasync="false"
      />
    </div>
  );
}
