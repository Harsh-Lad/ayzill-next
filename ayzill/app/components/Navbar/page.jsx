"use client"
import styles from './page.module.css'
import { Icon } from '@iconify/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Image from 'next/image';
import logo from '../../../public/images/Logo.png'
import NextNProgress from 'nextjs-progressbar';
import Link from 'next/link';
import $ from "jquery";
import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
    console.log('loaded')
    AOS.init();
  })

  return (
    <>
      <div className={styles.navWrapper + " d-flex py-4 justify-content-between align-items-center px-2 px-lg-4 px-md-3 px-sm-2"}>

        <p className={styles.navBrand + " px-2 px-lg-4 px-md-3 px-sm-2"}><Image src={logo} /></p>
        {/* <p className={styles.navBrand + " px-2 px-lg-4 px-md-3 px-sm-2"}>AYZILL WATER</p> */}
        <div className={styles.navLinksWrapper + " px-5"}>
          <Link href={"/"} className={styles.navLinks + " active mx-3"}>Home</Link>
          <Link href={"/products"} className={styles.navLinks + " mx-3"}>Products</Link>
          <Link href={"/blogs"} className={styles.navLinks + "  mx-3"}>Blogs</Link>
          <Link href={"/aboutUs"} className={styles.navLinks + "  mx-3"}>About us</Link>
          <Link href={"/cart"} className={styles.navLinks + "  mx-3"}>Cart</Link>
          <Link href={"/signup"} className={styles.btnSignup + " mx-3 px-3 py-2"}>Signup</Link>
          <button onClick={onOpenModal}>Open modal</button>
        </div>
        <div className={styles.phoneMenuBtn + " px-2 px-lg-4 px-md-3 px-sm-2"}>
          <Icon icon="heroicons-solid:menu-alt-3" />
        </div>
      </div>


      <Modal open={open} onClose={onCloseModal} center>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </Modal>
    </>
  )
}