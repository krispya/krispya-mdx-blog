import { Route, Switch } from 'wouter';
import { BlogIndex, BlogPost, BlogPostNotFound } from './features/blog/index.js';

export function App() {
  return (
    <main className="site-shell">
      <Switch>
        <Route path="/" component={BlogIndex} />
        <Route path="/blog/:slug">{(params) => <BlogPost slug={params.slug} />}</Route>
        <Route component={BlogPostNotFound} />
      </Switch>
    </main>
  );
}
