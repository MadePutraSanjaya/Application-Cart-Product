import React from 'react';
import Image from 'next/image';

const Index = () => {
  return (
    <div>
      <div className="fixed z-50 navbar bg-white border border-b-[1px]" id="navbarTop">
        <div className="w-full px-6 mx-auto sm:px-16 max-w-7xl flex items-center justify-between">
          <div className="flex-none">
            <a href="/">
              <Image src="/logo.png" alt="Logo" width={100} height={48} className="w-auto h-12 md:h-16" />
            </a>
          </div>
          
          {/* Navigation Links for Desktop */}
          <ul className="hidden lg:flex lg:space-x-10">
            <li>
              <a className="font-light text-black navLink" href="/">Home</a>
            </li>
            <li>
              <a className="font-light text-black navLink" href="/about">About Us</a>
            </li>
            <li>
              <a className="font-light text-black navLink" href="/itinerary">Itinerary</a>
            </li>
            <li>
              <a className="font-light text-black navLink" href="/services">Services</a>
            </li>
            <li>
              <a className="font-light text-black navLink" href="/contact">Contact</a>
            </li>
          </ul>
          
          {/* Search Bar */}
          <div className="flex items-center gap-4">
            <label className="input bg-secondary flex items-center gap-2">
              <input type="text" className="grow w-[20vw] bg-secondary" placeholder="What are you looking for?" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
              </svg>
            </label>

            {/* cart */}
            <div className="dropdown dropdown-end gap-2">
                <div tabIndex={0} className="btn btn-circle gap-2">
                  <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <span className="badge badge-sm indicator-item">8</span>
                  </div>
                </div>
                <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                  <div className="card-body">
                    <span className="font-bold text-lg">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">View cart</button>
                    </div>
                  </div>
                </div>
              </div>

            {/* Mobile Menu Button */}
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle lg:hidden" />
            <div className="lg:hidden">
              <label htmlFor="my-drawer-3" aria-label="open sidebar" className="text-black btn btn-square btn-ghost">
                <svg id="hamburger" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </div>
          </div>

          {/* Mobile Drawer Menu */}
          <div className="drawer-side lg:hidden">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <ul className="min-h-full p-4 space-y-3 menu w-80 bg-base-100">
              <li>
                <a id="drawer-link" className="font-light text-black" href="/">Home</a>
              </li>
              <li>
                <a id="drawer-link" className="font-light text-black" href="/about">About Us</a>
              </li>
              <li>
                <a id="drawer-link" className="font-light text-black" href="/itinerary">Itinerary</a>
              </li>
              <li>
                <a id="drawer-link" className="font-light text-black" href="/services">Services</a>
              </li>
              <li>
                <a id="drawer-link" className="font-light text-black" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
