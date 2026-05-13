import { Link } from 'wouter';
import author from '../../../content/author.json';
import { formatPostDate, posts } from './posts.js';

export function BlogIndex() {
  return (
    <>
      <section className="intro">
        <p className="eyebrow">Personal notes by {author.name}</p>
        <h1>Minimal MDX Blog</h1>
        <p>
          A small reproduction of the MDX blog shape: a list of posts, the posts themselves, and just
          enough routing to make the URLs useful.
        </p>
      </section>

      <section aria-labelledby="posts-heading">
        <h2 id="posts-heading">Posts</h2>
        <ol className="post-list">
          {posts.map((post) => (
            <li key={post.slug}>
              <article className="post-preview">
                <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                <h3>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p>{post.summary}</p>
              </article>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
