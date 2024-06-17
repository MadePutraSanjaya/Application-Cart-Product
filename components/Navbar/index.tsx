"use client"
import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/libs/redux/store';
import { setCart } from '@/libs/redux/cartSlice';
import Cookies from 'js-cookie';

const Index = () => {
  const [mounted, setMounted] = useState(false);
  const cart = useSelector((state: RootState) => state.cart.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const cookieCart = Cookies.get('cart');
    if (cookieCart) {
      dispatch(setCart(JSON.parse(cookieCart)));
    }
    setMounted(true);
  }, [dispatch]);

  if (!mounted) return null;

  const totalItems = cart.length;
  const subtotal = cart.reduce((total: number, item) => total + item.price, 0);

  return (
    <div>
      <div className="fixed z-50 navbar bg-white border border-b-[1px]" id="navbarTop">
        <div className="w-full px-6 mx-auto sm:px-16 max-w-7xl flex items-center justify-between">
          <div className="flex-none">
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={100} height={48} className="w-auto h-12 md:h-16" />
            </Link>
          </div>

          {/* Navigation Links for Desktop */}
          <ul className="hidden lg:flex lg:space-x-10">
            <li>
              <Link className="font-light text-black navLink" href="/">Home</Link>
            </li>
            <li>
              <Link className="font-light text-black navLink" href="/products">Products</Link>
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
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="badge badge-sm indicator-item bg-secondary2 text-white">{totalItems}</span>
                </div>
              </div>
              <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                  <span className="font-bold text-lg">{totalItems} Items</span>
                  <span className="text-info">Subtotal: ${subtotal.toFixed(2)}</span>
                  <div className="card-actions">
                    <Link href="/cart">
                      <button className="btn btn-primary btn-block">View cart</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <Link href="/" className="justify-between">
                    Profile
                    {/* <span className="badge">New</span> */}
                  </Link>
                </li>
              </ul>
            </div>

           
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Index;
