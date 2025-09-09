import { type BlogPost } from '../types';

interface BlogPostCardProps {
  post: BlogPost;
}

function BlogPostCard({ post }: BlogPostCardProps) {
  const handleReadMore = () => {
    // In a real app, this would navigate to the post detail page
    // console.log(`Navigate to post: ${post.slug}`);
    // For now, we'll just scroll to the top of the article
    const target = document.querySelector('#articles');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <article className="card card-hover">
      <div className="h-48 gradient-bg flex items-center justify-center text-white">
        <i className={`${post.icon} text-5xl`}></i>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary-600 mb-2 line-clamp-2">
          {post.title}
        </h3>
        <div className="text-sm text-gray-500 mb-3 flex items-center gap-4">
          <span>
            <i className="fas fa-calendar mr-1"></i>
            {post.date}
          </span>
          <span>
            <i className="fas fa-user mr-1"></i>
            {post.author}
          </span>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <button
          onClick={handleReadMore}
          className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors group"
        >
          Read More
          <i className="fas fa-arrow-right ml-1 group-hover:translate-x-1 transition-transform"></i>
        </button>
      </div>
    </article>
  );
}

interface BlogGridProps {
  posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <section id="articles" className="py-12">
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        Featured Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}