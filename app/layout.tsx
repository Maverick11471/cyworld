// app/layout.tsx
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-white min-h-screen flex justify-center items-center">
        <div className=" bg-gray-50 border border-gray-300 rounded-md shadow-md p-4 mx-auto overflow-hidden ">
          {children}
        </div>
      </body>
    </html>
  );
}
