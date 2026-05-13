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
    <article>
      <Link
        className="text-primary-700 decoration-primary-200 hover:text-primary-800 hover:decoration-primary-400 mb-8 inline-flex text-sm font-medium underline"
        href="/"
      >
        Back to posts
      </Link>
      <header className="border-b border-gray-200 pb-8">
        <time className="mb-2 block text-sm text-gray-500" dateTime={post.date}>
          {formatPostDate(post.date)}
        </time>
        <h1 className="mb-4 text-5xl leading-none font-bold text-gray-950 sm:text-6xl">
          {post.title}
        </h1>
        <p className="max-w-2xl text-lg text-gray-600">{post.summary}</p>
        <p className="mt-4 text-base text-gray-600">
          By{' '}
          <a
            className="text-primary-700 decoration-primary-200 hover:text-primary-800 hover:decoration-primary-400 underline"
            href={author.site}
            rel="noreferrer"
          >
            {author.name}
          </a>
        </p>
      </header>
      <div className="prose prose-gray mt-8 max-w-none">
        <Component />
      </div>
    </article>
  );
}

export function BlogPostNotFound() {
  return (
    <section className="py-20">
      <p className="text-primary-700 mb-3 text-xs font-bold tracking-[0.12em] uppercase">404</p>
      <h1 className="mb-4 text-5xl leading-none font-bold text-gray-950 sm:text-6xl">
        Post not found
      </h1>
      <p className="mb-6 max-w-2xl text-lg text-gray-600">
        This route does not have a matching MDX post.
      </p>
      <Link
        className="text-primary-700 decoration-primary-200 hover:text-primary-800 hover:decoration-primary-400 underline"
        href="/"
      >
        Return to the post list
      </Link>
    </section>
  );
}
