"use client";
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const isActive = (path: any) => pathName === path;
  

  return (
    <div className={styles.navbar}>
      <Link href='/' className={isActive('/') ? styles.activeLink : styles.navLink}>Home</Link>
      <Link href='/about' className={isActive('/about') ? styles.activeLink : styles.navLink}>About</Link>
      <Link href='/about/us' className={isActive('/about/us') ? styles.activeLink : styles.navLink}>About Us</Link>
      <Link href='/about/someone' className={isActive('/about/someone') ? styles.activeLink : styles.navLink}>About Someone Else</Link>
      <Link href='/listofposts' className={isActive('/listofposts') ? styles.activeLink : styles.navLink}>Posts</Link>
    </div>
  )
}

export default Navbar