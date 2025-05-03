export default function MobileLayout() {
  return (
    <div className="p-4 bg-white text-base text-gray-900">
      <h1 className="text-xl font-semibold mb-3">📱 모바일 전용 레이아웃</h1>
      <p>이 화면은 모바일에서만 보입니다.</p>
      <div className="mt-4 space-y-2">
        <div className="p-3 bg-blue-100 rounded">카드 1: 최근 활동</div>
        <div className="p-3 bg-blue-100 rounded">카드 2: 친구 소식</div>
        <div className="p-3 bg-blue-100 rounded">카드 3: 추천 콘텐츠</div>
      </div>
    </div>
  );
}
