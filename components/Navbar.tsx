"use client";
import Image from "next/image";
import { useState } from "react";
export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <header className="absolute z-20 top-0 w-full border-b border-white/20">
      <nav className="mx-auto max-w-[1600px] flex items-center justify-between px-6 md:px-14 py-6 text-ivory">
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Xena's Flavor Lab"
            width={65}
            height={65}
            className="object-contain"
            priority
          />

          <div className="brand">
            XENA’S FLAVOR LAB
            <span>PRIVATE CHEF · NEW YORK</span>
          </div>
        </a>

        <div className="hidden md:flex gap-9 text-[11px] uppercase tracking-[.19em]">
          <a href="#experiences">Experiences</a>
          <a href="#philosophy">Philosophy</a>
          <a href="#gallery">Gallery</a>
        </div>
        <a href="#inquire" className="hidden md:block outline-btn">
          Inquire <span>↗</span>
        </a>
        <button
          className="md:hidden uppercase tracking-widest text-xs"
          onClick={() => setMenu(!menu)}
          aria-expanded={menu}
        >
          {menu ? "Close" : "Menu"}
        </button>
      </nav>
      {menu && (
        <div
          className="md:hidden bg-ink p-8 flex flex-col gap-6 text-ivory"
          onClick={() => setMenu(false)}
        >
          {["Experiences", "Philosophy", "Gallery", "Inquire"].map((x) => (
            <a key={x} href={"#" + x.toLowerCase()}>
              {x}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
