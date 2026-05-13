import { Route, Switch } from 'wouter';
import { BlogIndex, BlogPost, BlogPostNotFound } from './features/blog/index.js';

export function App() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-4 py-16 sm:py-20">
      <Switch>
        <Route path="/" component={BlogIndex} />
        <Route path="/blog/:slug">{(params) => <BlogPost slug={params.slug} />}</Route>
        <Route component={BlogPostNotFound} />
      </Switch>
    </main>
  );
}
