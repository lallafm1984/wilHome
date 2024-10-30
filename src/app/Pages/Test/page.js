'use client'

import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon , CalendarIcon  } from '@heroicons/react/24/outline';

const LingerieBrandSite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

// 모바일 메뉴가 열렸을 때 스크롤 방지
useEffect(() => {
  if (isMenuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }
  return () => {
    document.body.style.overflow = 'unset';
  };
}, [isMenuOpen]);

 
  const menuItems = [
    {
      title: '브랜드 스토리',
      subMenu: ['브랜드 철학', '히스토리', '디자인 철학']
    },
    {
      title: '컬렉션',
      subMenu: ['신제품', '베스트셀러', '시그니처 라인', '시즌 컬렉션']
    },
    {
      title: '제품',
      subMenu: ['브라', '팬티', '세트', '나이트웨어', '액세서리']
    },
    {
      title: '매장안내',
      subMenu: ['매장 찾기', '플래그십 스토어', '백화점 매장']
    }
  ];

  const heroSlides = [
    {
      image: "/Images/SampleBg_1.png",
      title: "Elegance Defined",
      subtitle: "당신만의 특별한 순간을 위한 럭셔리 란제리",
    },
    {
      image: "/Images/SampleBg_2.png",
      title: "Summer Collection",
      subtitle: "자연스러운 실루엣을 완성하는 시그니처 라인",
    },
    {
      image: "/Images/SampleBg_3.png",
      title: "Timeless Beauty",
      subtitle: "클래식한 디자인과 현대적 감각의 조화",
    }
  ];

  const newsItems = [
    {
      id: 1,
      image: "/Images/news1.png",
      date: "2024.03.15",
      title: "2024 봄 시즌 컬렉션 출시",
      description: "자연스러운 실루엣과 부드러운 터치감으로 완성된 2024 봄 시즌 컬렉션을 만나보세요.",
      category: "NEW COLLECTION"
    },
    {
      id: 2,
      image: "/Images/news2.png",
      date: "2024.03.10",
      title: "W.I.L 플래그십 스토어 오픈",
      description: "서울 가로수길에 위치한 W.I.L의 새로운 플래그십 스토어에서 특별한 경험을 만나보세요.",
      category: "STORE NEWS"
    },
    {
      id: 3,
      image: "/Images/news3.png",
      date: "2024.03.05",
      title: "지속가능한 패션을 위한 에코 라인 출시",
      description: "환경을 생각하는 W.I.L의 첫 번째 에코 프렌들리 컬렉션을 소개합니다.",
      category: "SUSTAINABILITY"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

 // 모바일 메뉴 닫기 함수
 const closeMenu = () => {
  setIsMenuOpen(false);
  setActiveMenu(null);
};

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50">
    {/* 헤더 */}
    <header className="fixed w-full top-0 z-50">
    <div className="relative bg-gradient-to-r from-rose-50/95 via-white/95 to-rose-50/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <h1 className="text-4xl font-serif text-rose-900">W.I.L</h1>
            
            {/* 모바일 메뉴 버튼 */}
            <button 
              className="lg:hidden p-2 z-50 text-rose-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="메뉴 열기/닫기"
            >
              {isMenuOpen ? 
                <XMarkIcon className="h-6 w-6" /> : 
                <Bars3Icon className="h-6 w-6" />
              }
            </button>

            {/* 데스크톱 메뉴 */}
            <nav className="hidden lg:block">
              <ul className="flex space-x-8">
                {menuItems.map((item, idx) => (
                  <li 
                    key={idx}
                    className="relative"
                    onMouseEnter={() => setActiveMenu(idx)}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <button className="flex items-center space-x-1 py-2 text-base text-rose-900 hover:text-rose-700">
                      <span>{item.title}</span>
                      <ChevronDownIcon className="h-4 w-4 ml-1" />
                    </button>
                    
                    {/* 데스크톱 서브메뉴 */}
                    <div 
                      className={`absolute left-0 mt-2 w-48 bg-white/95 shadow-lg rounded-md overflow-hidden transition-all duration-300 ${
                        activeMenu === idx ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}
                    >
                      <ul className="py-2">
                        {item.subMenu.map((subItem, subIdx) => (
                          <li key={subIdx}>
                            <a 
                              href="#" 
                              className="block px-4 py-2 text-rose-800 hover:bg-rose-50"
                            >
                              {subItem}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* 모바일/태블릿 메뉴 */}
        <div 
          className={`fixed inset-0 bg-rose-900/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={closeMenu}
          style={{ top: '64px' }}
        />
        
        <div
          className={`lg:hidden fixed inset-y-0 left-0 w-full sm:w-80 bg-white/95 shadow-xl transform transition-transform duration-300 overflow-y-auto ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          style={{ top: '64px' }}
        >
          <nav className="h-full">
            <ul className="p-4">
              {menuItems.map((item, idx) => (
                <li key={idx} className="border-b border-rose-100 last:border-0">
                  <button
                    className="flex items-center justify-between w-full py-4 px-2 text-base font-medium text-rose-900"
                    onClick={() => setActiveMenu(activeMenu === idx ? null : idx)}
                  >
                    <span>{item.title}</span>
                    <ChevronDownIcon 
                      className={`h-5 w-5 transition-transform duration-200 ${
                        activeMenu === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-200 ${
                    activeMenu === idx ? 'max-h-64' : 'max-h-0'
                  }`}>
                    <ul className="bg-rose-50/50 py-2">
                      {item.subMenu.map((subItem, subIdx) => (
                        <li key={subIdx}>
                          <a
                            href="#"
                            className="block py-3 px-8 text-sm text-rose-800 hover:text-rose-900 hover:bg-rose-100/50"
                            onClick={(e) => {
                              e.preventDefault();
                              closeMenu();
                            }}
                          >
                            {subItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>

    {/* 메인 컨텐츠 */}
    <main className="pt-20">
      {/* 히어로 섹션 */}
      <section className="h-96 relative overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={slide.image}
              className="w-full h-full object-cover transform scale-110 transition-transform duration-[10000ms] ease-out"
              style={{
                transform: currentSlide === index ? 'scale(1)' : 'scale(1.1)'
              }}
            />
             <div className="absolute inset-0 bg-gradient-to-b from-rose-900/10 via-rose-900/20 to-rose-900/30" />
            
            <div className="absolute inset-0 flex items-center justify-center text-white text-center">
              <div className={`space-y-6 transition-all duration-1000 ${
                currentSlide === index 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}>
                 <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl drop-shadow">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'w-8 bg-white' : 'w-2 bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* 뉴스 섹션 */}
      <section className="py-20 relative">
          {/* 럭셔리한 배경 패턴 */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '30px 30px'
            }}/>
          </div>
          
          <div className="relative bg-gradient-to-b from-rose-50/50 via-white/50 to-rose-50/50 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-serif mb-4 text-rose-900">Latest News</h3>
                <p className="text-rose-700">W.I.L의 최신 소식을 만나보세요</p>
              </div>
          
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsItems.map((item) => (
                  <article 
                    key={item.id} 
                    className="group bg-gradient-to-br from-white/90 to-rose-50/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-rose-100"
                  >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-rose-900/90 text-white text-xs px-3 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-rose-700 mb-3">
                    <CalendarIcon className="h-4 w-4" />
                    <time className="text-sm">{item.date}</time>
                  </div>
                  
                  <h4 className="text-xl font-medium mb-3 text-rose-900 group-hover:text-rose-700 transition-colors">
                    {item.title}
                  </h4>
                  
                  <p className="text-rose-700/80 text-sm mb-4">
                    {item.description}
                  </p>
                  
                  <button className="inline-flex items-center text-sm font-medium text-rose-900 group-hover:text-rose-700">
                    자세히 보기
                    <ChevronDownIcon className="h-4 w-4 ml-1 rotate-[-90deg]" />
                  </button>
                </div>
              </article>
            ))}
             </div>
          </div>
        </div>
      </section>

      {/* 컬렉션 섹션 */}
      <section className="py-20 relative">
          {/* 럭셔리한 대각선 배경 */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-100/50 via-white/50 to-rose-50/50 transform -skew-y-6"></div>
          
          <div className="relative">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl md:text-4xl font-serif text-center mb-12 text-rose-900">Collections</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((item) => (
                  <div 
                    key={item}
                    className="group relative overflow-hidden rounded-lg cursor-pointer shadow-lg"
                  >
                    <img 
                      src="/Images/Sample_1.png"
                      alt={`Collection ${item}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* 럭셔리한 오버레이 효과 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white text-xl font-serif tracking-wider">자세히 보기</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
    </main>

    {/* 푸터 */}
    <footer className="relative">
        {/* 럭셔리한 패턴 배경 */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}/>
        </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">고객센터</h4>
            <p>평일 09:00 - 18:00</p>
            <p>주말 및 공휴일 휴무</p>
            <p className="text-xl font-semibold mt-2">1588-0000</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-rose-200">회사소개</a></li>
              <li><a href="#" className="hover:text-rose-200">이용약관</a></li>
              <li><a href="#" className="hover:text-rose-200">개인정보처리방침</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-rose-200">Instagram</a>
              <a href="#" className="hover:text-rose-200">Facebook</a>
              <a href="#" className="hover:text-rose-200">YouTube</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
  );
};

export default LingerieBrandSite;