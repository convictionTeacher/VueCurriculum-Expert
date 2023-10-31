import Link from 'next/link'
import React from 'react'
import styles from '@/styles/Tag.module.css'

const Tag = ( props ) => {
  const { tags } = props;

  return (
    <div>
      <section className={styles.tags_container}>
        <h2 className={styles.tags_ttl}>タグ一覧</h2>
        <div className={styles.tags_list}>
          {tags.map((tag, index) => (
            <Link href={`/posts/tag/${tag}/page/1`} key={index}>
              <span className={styles.tags_label}>{tag}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Tag