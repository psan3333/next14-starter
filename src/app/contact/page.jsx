"use client"

import Image from 'next/image';
import styles from './contact.module.css';
// import { useEffect, useState } from 'react';
// import dynamic from 'next/dynamic';

// const HydrationTestNoSSr = dynamic(() => import('@components/hydrationTest'), {ssr: false});

const ContactPage = () => {
  
  // const a = Math.random();

  // console.log(a);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.image}/>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname"/>
          <input type="text" placeholder="Email Address"/>
          <input type="text" placeholder="Phone Number (Optional)"/>
          <textarea 
          name='' 
          id='' 
          cols={30} 
          rows={10} 
          placeholder='Message'
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage