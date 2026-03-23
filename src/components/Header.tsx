import Link from 'next/link';
import { SearchIcon, MenuIcon } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left: Menu & Search */}
        <div className="flex items-center gap-4 w-1/3">
          <button className="p-1 hover:bg-gray-100 rounded-sm" aria-label="Menu">
            <MenuIcon size={24} strokeWidth={1.5} />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded-sm" aria-label="Search">
            <SearchIcon size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Center: Logo */}
        <div className="flex-1 flex justify-center items-center w-1/3">
          <Link href="/" className="flex items-center gap-0.5">
            <div className="w-8 h-8 bg-black flex items-center justify-center text-white text-xl font-bold">B</div>
            <div className="w-8 h-8 bg-black flex items-center justify-center text-white text-xl font-bold">B</div>
            <div className="w-8 h-8 bg-black flex items-center justify-center text-white text-xl font-bold">S</div>
          </Link>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center justify-end gap-4 w-1/3 text-sm font-medium">
          <button className="bg-black text-white px-4 py-2 font-bold text-[13px] hover:bg-gray-800 transition-colors">
            Register
          </button>
          <span className="text-[13px] font-bold text-gray-400 cursor-default">
            Sign In
          </span>
        </div>
      </div>
    </header>
  );
}
