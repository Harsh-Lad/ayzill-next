"use client"

import styles from './page.module.css'
import { Icon } from '@iconify/react';

export default function HomeBtn() {
    return(
        <a href="/signup" className={styles.btnSignup + " px-3 py-2 mt-3"} data-aos="fade-up">View Product</a>
        // <button type="button" class={styles.buyBtn + " btn btn-primary mt-4 px-3"} data-aos="fade-up">View Product <Icon icon="material-symbols:arrow-forward-rounded" color="white" /></button>

    )
}