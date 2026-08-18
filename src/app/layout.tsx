import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ujwal Pachghare | DevOps & Cloud Engineer",
  description: "Portfolio of Ujwal Pachghare - DevOps & Cloud Engineer at Digiflux Technologies. Specializing in AWS, Kubernetes, CI/CD Automation, and Site Reliability Engineering.",
  keywords: ["Ujwal Pachghare", "DevOps Engineer", "Cloud Engineer", "AWS", "Kubernetes", "SRE", "Terraform", "ArgoCD", "GitOps"],
  authors: [{ name: "Ujwal Pachghare" }],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Ujwal Pachghare | DevOps & Cloud Engineer",
    description: "AWS & Kubernetes Engineer | CI/CD Automation | Site Reliability Engineering",
    url: "https://uj5ghare.github.io",
    siteName: "Ujwal Pachghare Portfolio",
    images: [{ url: "/favicon.png", width: 1024, height: 1024, alt: "Ujwal Pachghare" }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster
          position="bottom-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#ffffff',
              color: '#242D51',
              border: '1px solid #EFEDFB',
              boxShadow: '0 12px 32px -12px rgba(88, 58, 203, 0.25)',
            },
            success: {
              iconTheme: {
                primary: '#583ACB',
                secondary: '#ffffff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#ffffff',
              },
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
