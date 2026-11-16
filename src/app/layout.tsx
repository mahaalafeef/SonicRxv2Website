import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'SonicRx | Ultrasound-Activated Nanomedicine', description: 'SonicRx is developing ultrasound-responsive nanomedicines for precision delivery of therapeutic cargo.', openGraph: { title: 'SonicRx', description: 'Focused delivery. Greater possibility.', type: 'website' } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
