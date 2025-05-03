"use client";

import { useState } from "react";

export default function PCLayout() {
  const [activeTab, setActiveTab] = useState("홈");

  const renderContent = () => {
    switch (activeTab) {
      case "홈":
        return <div className="p-4">홈 콘텐츠입니다 🏠</div>;
      case "프로필":
        return <div className="p-4">프로필 정보 👤</div>;
      case "다이어리":
        return <div className="p-4">다이어리 페이지 📔</div>;
      case "사진첩":
        return <div className="p-4">사진첩 📸</div>;
      case "방명록":
        return <div className="p-4">방명록 ✍️</div>;
      default:
        return <div className="p-4">콘텐츠를 선택해주세요</div>;
    }
  };

  return (
    <>
      <div className="min-w-[1200px] h-[600px] flex overflow-hidden bg-white">
        {/* 왼쪽 */}
        <div className="w-1/4 p-4 flex flex-col">
          <div className="h-10">투데이</div>
          <div className="flex-1 bg-yellow-50">프로필</div>
        </div>

        {/* 스프링 */}
        <div className="w-[20px] flex flex-col items-center justify-center bg-gray-200">
          {Array.from({ length: 10 }).map((_, i) => (
            <img
              key={i}
              src="/spiral.png"
              className="w-2 h-2 my-1"
              alt="spiral ring"
            />
          ))}
        </div>

        {/* 오른쪽 */}
        <div className="w-3/4 p-4 flex flex-col">
          <div className="h-10">투데이</div>
          <div className="flex flex-1">
            {/* 메인 콘텐츠 + 이어지는 탭 영역 */}
            <div className="flex-1 bg-yellow-50 border-r border-sky-300 rounded-l-[30px] rounded-r-none shadow-inner relative">
              {/* 파란 탭의 흰 테두리를 시각적으로 연결 */}
              <div className="absolute top-0 right-[-10px] w-[10px] h-full bg-yellow-50 z-10" />
              {renderContent()}
            </div>

            {/* 오른쪽 띠지 탭 - 스타일 개선 */}
            <div className="w-[90px]  text-white flex flex-col justify-start items-start py-4 pr-2 space-y-2 shadow-md rounded-l-md">
              {["홈", "프로필", "다이어리", "사진첩", "방명록"].map((label) => (
                <button
                  key={label}
                  onClick={() => setActiveTab(label)}
                  className={`w-full text-left pl-3 py-1 rounded-r-full text-sm font-semibold transition-all duration-150 ${
                    activeTab === label
                      ? "bg-white text-sky-700 font-bold shadow-inner"
                      : "bg-sky-500 hover:bg-sky-600"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
