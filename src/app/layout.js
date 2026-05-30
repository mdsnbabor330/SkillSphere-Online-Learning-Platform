import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SkillSphere — Learn Online Anytime, Anywhere",
  description: "Join over 20,000+ students learning from world-class mentors. Transform your career with industry-leading courses on SkillSphere.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" data-theme='light'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box w-11/12 max-w-5xl p-0 overflow-hidden bg-black">
            <iframe 
              className="w-full aspect-video" 
              src="https://www.youtube.com/embed/GF9awfBYouI?si=CSsCRLwjyRRk0SEH" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
            </iframe>
          </div>
          <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
        </div>
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
