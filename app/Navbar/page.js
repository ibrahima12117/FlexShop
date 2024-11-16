"use client"

import { Search, Moon, Sun } from 'lucide-react';
import { useState } from 'react';

function Navbar() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    document.body.style.backgroundColor = theme === 'light' ? 'white' : 'black';
    document.body.style.color = theme === 'light' ? 'black' : 'white';
  
  };

  return ( 
    
    <div className="flex justify-around font-bold mt-8">
     
      <img src='https://th.bing.com/th?id=OIP.17Z49hdASIEoD7ez2FX_QQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'alt='' className='w-16 h-12 rounded-full'/>
  
      <a href="/">Accueil</a>
      <a href="/Produit">Produit</a>
      <a href="/Commande">Commande</a>
      <a href="/Contact">Contact</a>
      <div className="flex gap-2">
        <input type="text" placeholder="Search..." className="bg-slate-600 rounded-full" />
        <button>
        <Search />
        </button>
      </div>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? <Moon /> : <Sun />}
      </button>
    </div>
  );
}

export default Navbar;
