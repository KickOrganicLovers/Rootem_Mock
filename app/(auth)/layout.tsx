
//ルートの
export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className="light">
        <body className="antialiased">
            {children}
        </body>
    </html>
  );
}
