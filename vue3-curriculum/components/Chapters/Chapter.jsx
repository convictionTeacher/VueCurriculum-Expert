import Link from 'next/link';
import React from 'react'

const Chapter = (props) => {
  const { title, description, tags, slug, isPaginationPage } = props;
  return (
    <>
      {isPaginationPage ? (
        <section className='chapter_cards'>
          <div className='card_container'>
            <Link href={`/posts/${slug}`}>
              <h2>{title}</h2>
            </Link>
            <div className='tag_wrapper'>
              {tags.map((tag, index) => (
                <Link href={`/posts/tag/${tag}/page/1`} className='tag_anchor' key={index}>
                  <span className='tag_container'>{tag}</span>
                </Link>
              ))}
            </div>
          </div>
          <p>{description}</p>
        </section>
      ): (
        <section className='index_cards'>
          <Link href={`/posts/index`} className='index_caution'>
            <h2>カリキュラム説明・注意事項</h2>
          </Link>
          <p>カリキュラムを始める前にこちら読んでください。</p>
        </section>
      )}
    </> 
  )
}

export default Chapter