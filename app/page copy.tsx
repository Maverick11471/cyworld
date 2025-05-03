// app/page.tsx (홈 페이지)
"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex text-sm text-black font-sans">
      {/* 왼쪽 프로필 영역 */}
      <div className="w-1/4 border-r pr-4">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-pink-300 rounded-full mb-2"></div>
          <div className="text-center font-bold">사이좋은 사람들</div>
          <div className="text-center text-xs">싸이월드</div>
          <div className="text-center text-xs mt-2 text-gray-500">
            TODAY 197 | TOTAL 1599623
          </div>

          <div className="mt-4 w-full text-left text-xs">
            <div className="font-bold">HISTORY</div>
            <div>싸이홈 ♥</div>
            <div>🍀 😊 😍</div>
          </div>
        </div>
      </div>

      {/* 가운데 메인 콘텐츠 영역 */}
      <div className="w-3/4 pl-4">
        <div className="text-base font-bold text-blue-800 mb-2">
          사이좋은 사람들, 싸이월드
        </div>

        <div className="bg-white border border-gray-300 rounded p-2">
          <div className="font-semibold text-sm mb-1">최근게시판</div>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>오늘 만든 아이템 소개</li>
            <li>새로운 미니미랑 한컷</li>
            <li>친구야, 만나서 반가워</li>
            <li>도토리 선물용 아이템</li>
          </ul>

          <div className="mt-4">
            <div className="font-semibold text-sm mb-2">미니룸</div>
            <div className="w-full h-60 bg-blue-100 border border-gray-400 rounded flex items-center justify-center">
              <div className="text-center text-blue-800 font-semibold">
                미니룸 프리뷰 영역
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
