import { Link } from 'wouter';
import author from '../../../content/author.json';
import { formatPostDate, getPost } from './posts.js';

export function BlogPost({ slug }: { slug: string }) {
  const post = getPost(slug);

  if (!post) {
    return <BlogPostNotFound />;
  }

  const { Component } = post;

  return (
    <article className="post">
      <Link className="back-link" href="/">
        Back to posts
      </Link>
      <header className="post-header">
        <time dateTime={post.date}>{formatPostDate(post.date)}</time>
        <h1>{post.title}</h1>
        <p>{post.summary}</p>
        <p className="byline">
          By{' '}
          <a href={author.site} rel="noreferrer">
            {author.name}
          </a>
        </p>
      </header>
      <div className="prose">
        <Component />
      </div>
    </article>
  );
}

export function BlogPostNotFound() {
  return (
    <section className="not-found">
      <p className="eyebrow">404</p>
      <h1>Post not found</h1>
      <p>This route does not have a matching MDX post.</p>
      <Link href="/">Return to the post list</Link>
    </section>
  );
}
