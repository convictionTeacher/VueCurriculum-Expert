import React from 'react'
import styles from '@/styles/Slug.module.css'
import { getAllPosts, getSinglePost } from '../../../lib/notionAPI'
import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import Link from 'next/link'

export const getStaticPaths = async () => {
  const allPosts = await getAllPosts();
  const paths = allPosts.map(({ slug }) => ({ params: {slug} }))

  return {
    // paths: [
    //   { params: { slug: "first_post" } },
    //   { params: { slug: "second_post" } },
    //   { params: { slug: "third_post" } }
    // ],
    paths, //上記と同様の記述(こちらは4つ目の投稿がされても自動的にpathが作成される)
    fallback: "blocking"
  }
}

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug);

  return {
    props: {
      post,
    },
    revalidate: 60 * 60 * 12,
  }
}

const Post = ({ post }) => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.text_container}>{post.metadata.title}</h1>
      <span className={styles.date}>Posted date at {post.metadata.date}</span>
      <br />
      {post.metadata.tags.map((tag, index) => (
        <Link href={`/posts/tag/${tag}/page/1`} className={styles.tag_anchor}>
            <p className={styles.tag} key={index}>
              {tag}
            </p>
          </Link>
      ))}
      <div className={styles.description}>
        <Markdown
          children={post.markdown.parent}
          components={{
            code(props) {
              const {children, className, node, ...rest} = props
              const match = /language-(\w+)/.exec(className || '')
              return match ? (
                <SyntaxHighlighter
                  {...rest}
                  children={String(children).replace(/\n$/, '')}
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              )
            }
          }}
        ></Markdown>
      </div>
    </section>
  )
}

export default Post