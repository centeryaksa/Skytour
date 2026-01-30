import { Link, useLocation } from 'react-router';

export function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { path: '/universities', label: '상품' },
    { path: '/guides', label: '가이드' },
    { path: '/reviews', label: '후기' },
    { path: '/faq', label: 'FAQ' },
    { path: '/about', label: '소개' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-900">
            SKY Campus Tour
          </Link>
          
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === item.path
                    ? 'text-blue-600'
                    : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/booking/seoul"
              className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              투어 예약하기
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
