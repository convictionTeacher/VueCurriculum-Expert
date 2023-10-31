import Link from 'next/link'
import React from 'react'
import styles from '@/styles/Pagination.module.css'
import { getPageLink } from '../../lib/helper';

const Pagination = ( props ) => {
  const { numberOfPage, tag } = props;

  let pages = [];
  for (let i = 1; i <= numberOfPage; i++) {
    pages.push(i);
  }

  return (
    <section className={styles.Pagination_container}>
      <ul className={styles.Pagination_lists}>
        {pages.map((page) => (
          <li className={styles.Pagination_number} key={page}>
            <Link href={getPageLink(tag, page)}>{page}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Pagination