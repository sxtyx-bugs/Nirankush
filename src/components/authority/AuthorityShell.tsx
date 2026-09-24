import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function AuthorityShell({ children }: { children: ReactNode }) {
  return (
    <div className="authority">
      <header className="authority-header">
        <nav className="authority-wrap authority-nav" aria-label="मुख्य">
          <Link className="authority-brand" href="/">
            <Image src="/author-profile.jpeg" width={44} height={44} alt="" aria-hidden="true" />
            <span>निरांकुश</span>
          </Link>
          <div className="authority-links">
            <Link href="/nirankush">लेखक</Link>
            <Link href="/sahyajinashi">पुस्तक</Link>
            <Link href="/lekh">लेख</Link>
            <Link href="/media">माध्यम माहिती</Link>
          </div>
        </nav>
      </header>
      {children}
      <footer className="authority-footer">
        <div className="authority-wrap authority-footer-grid">
          <div><strong>निरांकुश (अंकुश पाटील)</strong><br />मराठी कवी, लेखक व सादरकर्ता</div>
          <div className="authority-links">
            <a href="https://www.instagram.com/nirankush/">Instagram</a>
            <a href="https://www.facebook.com/niraankush/">Facebook</a>
            <a href="https://www.youtube.com/@TheNirankushVoice">YouTube</a>
            <a href="https://wa.me/918983539860">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

