import { useState } from "react";
import { navItems } from "../data/siteData.js";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="回到首页">
        <span className="brand-mark">家</span>
        <span>我们家的小站</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label="打开导航"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`site-nav ${isOpen ? "open" : ""}`} aria-label="主导航">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
