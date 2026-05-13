import type { ComponentType } from 'react';

export type PostFrontmatter = {
  title: string;
  date: string;
  summary: string;
};

export type Post = PostFrontmatter & {
  slug: string;
  Component: ComponentType;
};

type PostModule = {
  default: ComponentType;
  frontmatter: PostFrontmatter;
};

const postModules = import.meta.glob<PostModule>('../../../content/posts/*.mdx', {
  eager: true,
});

function slugFromPath(path: string) {
  return path.replace(/^..\/..\/..\/content\/posts\//, '').replace(/\.mdx$/, '');
}

export const posts: Post[] = Object.entries(postModules)
  .map(([path, module]) => ({
    ...module.frontmatter,
    slug: slugFromPath(path),
    Component: module.default,
  }))
  .sort((first, second) => Date.parse(second.date) - Date.parse(first.date));

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat('en', {
    dateStyle: 'medium',
  }).format(new Date(`${date}T00:00:00`));
}
