import localFont from "next/font/local";
import "./globals.css";
import dynamic from 'next/dynamic';

const AuthProvider = dynamic(() => import('./AuthContext').then(mod => mod.AuthProvider), {
  ssr: false
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
