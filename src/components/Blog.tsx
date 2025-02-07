export default function Blog() {
  const posts = [
    {
      title: "The Future of Design Systems",
      date: "March 15, 2024",
      excerpt: "Exploring how design systems are evolving in the modern digital landscape."
    },
    {
      title: "Typography Trends in 2024",
      date: "March 10, 2024",
      excerpt: "A deep dive into the latest typography trends shaping digital design."
    },
    {
      title: "Designing for Accessibility",
      date: "March 5, 2024",
      excerpt: "Best practices for creating inclusive digital experiences."
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-neutral-900" id="blog">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-neutral-900 dark:text-white">
          Latest Articles
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post.title} 
              className="group cursor-pointer bg-neutral-50 dark:bg-neutral-800 hover:shadow-xl hover:shadow-rose-100/20 dark:hover:shadow-rose-500/5 rounded-xl p-6 transition-all"
            >
              <div className="space-y-4">
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {post.date}
                </p>
                <h3 className="text-xl font-semibold group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  {post.excerpt}
                </p>
                <span className="text-sm font-medium inline-flex items-center text-rose-500 dark:text-rose-400">
                  Read More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
} 