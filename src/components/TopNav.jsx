"use client"
import Link from 'next/link'
import { UserCircleIcon, BooksIcon } from '@phosphor-icons/react/dist/ssr'
import styles from '@/app/page.module.css'

export default function TopNav() {
    return (
        <>
            <div className={styles.topContainer}>
                <a href='/'>Manga</a>
                <div className={styles.topRightContainer}>
                    <Link href="/library"><BooksIcon size={27}/></Link>
                    <Link href="/dashboard"><UserCircleIcon size={30}/></Link>
                </div>
            </div>
        </>
    )
}