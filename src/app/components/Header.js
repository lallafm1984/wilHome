'use client'

import { useState , useEffect} from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'


const products = [
  { name: '인사말',  href: '/Pages/Test'},
  { name: '회사소개',  href: '#'},
  { name: '연혁',  href: '#'},
  { name: '조직도',   href: '#'},
  { name: '오시는 길',  href: '#'},
]

const products2 = [
  { name: 'Laffair',  href: '#'},
]

const products3 = [
  { name: '가맹점 혜택',  href: '#'},
  { name: '창업 절차',  href: '#'},
  { name: '창업 비용',  href: '#'},
  { name: '창업 상담',  href: '#'},
]

const laffair = "L\'AFFAIR";

const menuItems = [
  {
    title: 'W.I.L',
    subMenu: ['인사말' , '회사 소개', '연혁', '조직도' , '오시는 길']
  },
  {
    title: `${laffair}`,
    subMenu: [`${laffair} 소개`, `${laffair} 컨셉` , `${laffair} 기획/생산`, `${laffair} 생산처 현황` , '커머스 사업현황']
  },
  {
    title: '쇼핑몰',
    subMenu: [`${laffair}`]
  },
  {
    title: '창업 정보',
    subMenu: ['가맹점 혜택', '창업 절차', '창업 비용','창업 상담']
  }
];

// 모바일 메뉴가 열렸을 때 스크롤 방지




function Header(){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveMenu(null);
  };
  
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
  

  return(
   
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
          className={`lg:hidden fixed inset-y-0 left-0 w-full sm:w-full bg-white/95 shadow-xl transform transition-transform duration-300 overflow-y-auto ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          style={{ top: '64px' }}
        >
        </div>

        <nav className={`lg:hidden ${
            isMenuOpen ? 'h-full translate-x-0' : '-translate-x-full h-0 '
          }`}>
            <ul className="p-4">
              {menuItems.map((item, idx) => (
                <li key={idx} className="border-b border-black last:border-0">
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
    </header>

   
  )
}

export default Header;
