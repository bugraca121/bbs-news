import Link from 'next/link';

const navItems = [
  "Home", "News", "Sport", "Business", "Technology", 
  "Health", "Culture", "Arts", "Travel", "Earth", 
  "Audio", "Video", "Live"
];

export function Navigation() {
  return (
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-10">
      <div className="max-w-[1200px] mx-auto px-4">
        <ul className="flex items-center gap-5 overflow-x-auto whitespace-nowrap scrollbar-hide py-3 text-[15px] font-[500] text-gray-700">
          {navItems.map((item) => (
            <li key={item}>
              <Link 
                href="#" 
                className="hover:text-black hover:border-b hover:border-black pb-3 transition-colors"
                style={{
                  borderBottom: item === 'News' ? '2px solid black' : ''
                }}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
