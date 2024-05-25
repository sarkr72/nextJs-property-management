// 'use client'
// import React, { useState } from 'react';
// import Image from 'next/image';
// import logo from '@/assets/images/logo-white.png';
// import profileDefault from '@/assets/images/profile.png';
// import Link from 'next/link';
// import { FaGoogle } from 'react-icons/fa';

// const Navbar2 = () => {
//   const [isNavbarOpen, setIsNavbarOpen] = useState(false);
//   const [isProfileOpen, setIsProfileOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState('Home');

//   const toggleNavbar = () => {
//     setIsNavbarOpen(!isNavbarOpen);
//     setIsProfileOpen(false); // Close profile dropdown when navbar toggles
//   };

//   const toggleProfile = () => {
//     setIsProfileOpen(!isProfileOpen);
//     setIsNavbarOpen(false); // Close navbar when profile dropdown toggles
//   };

//   const handleLinkClick = (linkName) => {
//     setActiveLink(linkName);
//     setIsNavbarOpen(false); // Close the navbar when a link is clicked
//   };

//   const handleDropdownItemClick = (itemName) => {
//     // Handle dropdown item click here
//     console.log(`Clicked on ${itemName}`);
//     setIsProfileOpen(false); // Close the profile dropdown after item click
//   };

//   return (
//     <nav className="bg-gray-800">
//       <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex justify-between items-center h-16">
//         {/* Logo and text */}
//         <div className="flex items-center">
//           <Image className='h-10 w-auto' src={logo} alt='PropertyPulse' />
//           <span className="text-white ml-2">Property</span>
//         </div>
//         {/* Navbar links */}
//         <div className="hidden lg:flex lg:space-x-4">
//           <Link href="/" passHref>
//             <span onClick={() => handleLinkClick('Home')} className={`cursor-pointer text-sm font-medium ${activeLink === 'Home' ? 'text-white' : 'text-gray-300'} px-3 py-2 rounded-md hover:bg-gray-700 hover:text-white`}>Home</span>
//           </Link>
//           <Link href="/" passHref>
//             <span onClick={() => handleLinkClick('About')} className={`cursor-pointer text-sm font-medium ${activeLink === 'About' ? 'text-white' : 'text-gray-300'} px-3 py-2 rounded-md hover:bg-gray-700 hover:text-white`}>Properties</span>
//           </Link>
//           <Link href="/" passHref>
//             <span onClick={() => handleLinkClick('Login')} className={`cursor-pointer text-sm font-medium ${activeLink === 'Login' ? 'text-white' : 'text-gray-300'} px-3 py-2 rounded-md hover:bg-gray-700 hover:text-white`}>Add Property</span>
//           </Link>
//           <Link href="/" passHref>
//             <span onClick={() => handleLinkClick('register')} className={`cursor-pointer flex items-center text-sm font-medium ${activeLink === 'Login' ? 'text-white' : 'text-gray-300'} px-3 py-2 rounded-md hover:bg-gray-700 hover:text-white`}> <FaGoogle className="mr-1" /> <span>Login or Register</span></span>
//           </Link>
//         </div>
//         {/* Profile dropdown */}
//         <div className="relative flex items-center">
//           <button onClick={toggleProfile} className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white" aria-label="User menu" aria-haspopup="true">
//             <Image className='h-8 w-8 rounded-full' src={profileDefault} alt='Profile' />
//           </button>
//           {/* Dropdown menu */}
//           {isProfileOpen && (
//             <div className="absolute right-0 mt-40 w-48 bg-white rounded-md shadow-lg origin-top-right ring-1 ring-black ring-opacity-5">
//               <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
//                 <button onClick={() => handleDropdownItemClick('Your Profile')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Your Profile</button>
//                 <button onClick={() => handleDropdownItemClick('Save Properties')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Save Properties</button>
//                 <button onClick={() => handleDropdownItemClick('Sign Out')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Sign Out</button>
//               </div>
//             </div>
//           )}
//         </div>
//         {/* Hamburger menu button */}
//         <div className="flex-shrink-0 lg:hidden">
//           <button onClick={toggleNavbar} className="text-gray-300 hover:text-white focus:outline-none focus:text-white" aria-label="Toggle navigation">
//             <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//       {/* Mobile menu */}
//       <div className={`${isNavbarOpen ? 'block' : 'hidden'} lg:hidden`}>
//         <div className="px-2 pt-2 pb-3 space-y-1">
//           {/* Mobile menu links */}
//           <Link href="/" passHref>
//             <span onClick={() => handleLinkClick('Home')} className={`cursor-pointer text-sm font-medium ${activeLink === 'Home' ? 'text-white' : 'text-gray-300'} block px-3 py-2 rounded-md hover:bg-gray-700 hover:text-white`}>Home</span>
//           </Link>
//           <Link href="/" passHref>
//             <span onClick={() => handleLinkClick('About')} className={`cursor-pointer text-sm font-medium ${activeLink === 'About' ? 'text-white' : 'text-gray-300'} block px-3 py-2 rounded-md hover:bg-gray-700 hover:text-white`}>Properties</span>
//           </Link>
//           <Link href="/" passHref>
//             <span onClick={() => handleLinkClick('Login')} className={`cursor-pointer text-sm font-medium ${activeLink === 'Login' ? 'text-white' : 'text-gray-300'} block px-3 py-2 rounded-md hover:bg-gray-700 hover:text-white`}>Add Property</span>
//           </Link>
//           <Link href="/" passHref>
//             <span onClick={() => handleLinkClick('register')} className={`cursor-pointer flex items-center text-sm font-medium ${activeLink === 'Login' ? 'text-white' : 'text-gray-300'} block px-3 py-2 rounded-md hover:bg-gray-700 hover:text-white`}> <FaGoogle className="mr-1" /> <span>Login or Register</span></span>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar2;

