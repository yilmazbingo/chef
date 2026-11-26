import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Xena’s Flavor Lab | Private Chef & Culinary Experiences NYC',description:'Bespoke private dining and thoughtfully crafted culinary events in New York City.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
