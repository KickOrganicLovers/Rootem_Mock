//共通の処理が必要な場合はここにかく

export default function AuthRootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    );
}
