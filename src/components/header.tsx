'use client';
import { useState } from 'react';
import { Menu, X, Waves } from 'lucide-react';
const links = [['Technology','#technology'],['Pipeline','#pipeline'],['About','#about'],['Leadership','#leadership'],['Awards','#awards']];
export function Header() { const [open,setOpen] = useState(false); return <header className="header"><div className="shell nav"><a className="brand" href="#home" aria-label="SonicRx home"><Waves size={31} strokeWidth={2.7}/><span>Sonic<span className="brand-accent">Rx</span></span></a><nav className={open?'nav-links open':'nav-links'} aria-label="Main navigation">{links.map(([label,href])=><a onClick={()=>setOpen(false)} href={href} key={href}>{label}</a>)}<a className="nav-contact" href="#contact" onClick={()=>setOpen(false)}>Get in touch ↗</a></nav><button className="menu-toggle" aria-label="Toggle menu" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></header> }
