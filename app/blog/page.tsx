'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Calendar, User } from 'lucide-react'
import Navigation from '@/components/navigation'
import Image from 'next/image'
import { getRandomTattooImages, TattooImage } from '@/lib/images'

export default function BlogPage() {
  const [bgImages, setBgImages] = useState<TattooImage[]>([])

  useEffect(() => {
    getRandomTattooImages(6).then(setBgImages).catch(console.error)
  }, [])
  const posts = [
    {
      id: 1,
      title: 'The Art of Custom Tattoo Design',
      author: 'Alex Kumar',
      date: 'March 15, 2024',
      category: 'Design Tips',
      excerpt: 'Learn how to collaborate with your artist to create the perfect custom tattoo design that matches your vision.',
      image: 'Design Tips',
    },
    {
      id: 2,
      title: 'Tattoo Styles Explained: Finding Your Perfect Match',
      author: 'Maya Patel',
      date: 'March 10, 2024',
      category: 'Education',
      excerpt: 'Explore different tattoo styles from minimalism to realism and find which style resonates with your personality.',
      image: 'Education',
    },
    {
      id: 3,
      title: 'Color Theory in Tattoo Art',
      author: 'Rahul Singh',
      date: 'March 5, 2024',
      category: 'Art',
      excerpt: 'Understanding color harmony, contrast, and balance helps create stunning, long-lasting tattoo artwork.',
      image: 'Color Theory',
    },
    {
      id: 4,
      title: 'The Healing Process: Week by Week',
      author: 'Arjun Desai',
      date: 'February 28, 2024',
      category: 'Aftercare',
      excerpt: 'A detailed breakdown of what to expect during each stage of tattoo healing and how to care for your ink.',
      image: 'Healing',
    },
    {
      id: 5,
      title: 'Piercing Myths vs Reality',
      author: 'Alex Kumar',
      date: 'February 20, 2024',
      category: 'Piercings',
      excerpt: 'Debunk common myths about body piercings and learn the truth about pain, healing, and safety.',
      image: 'Piercings',
    },
    {
      id: 6,
      title: 'Tattoo Trends 2024: What\'s Hot Right Now',
      author: 'Maya Patel',
      date: 'February 15, 2024',
      category: 'Trends',
      excerpt: 'Discover the latest tattoo trends making waves in 2024 and get inspiration for your next piece.',
      image: 'Trends',
    },
  ]

  const categories = ['All', 'Design Tips', 'Education', 'Art', 'Aftercare', 'Piercings', 'Trends']

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navigation isScrolled={true} />

      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-6xl sm:text-7xl font-black tracking-tight mb-4 text-white">
              TATTOO BLOG
            </h1>
            <p className="text-xl text-gray-300">
              Tips, trends, and insights from our experienced artists. Stay informed about tattoos, piercings, and body art.
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-16 border border-border hover:border-accent transition-all overflow-hidden group">
            <div className="bg-[#0f0f0f] aspect-video flex items-center justify-center relative overflow-hidden">
              {bgImages[0] && (
                <Image
                  src={bgImages[0].src}
                  alt="Featured blog post"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            </div>
            <div className="p-8 bg-secondary">
              <div className="mb-3">
                <span className="inline-block px-3 py-1 bg-accent text-black text-xs font-bold tracking-widest mb-3">
                  FEATURED
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4 group-hover:text-accent transition-colors">
                {posts[0].title}
              </h2>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <User size={16} />
                  {posts[0].author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={16} />
                  {posts[0].date}
                </span>
              </div>
              <p className="text-muted-foreground mb-6">{posts[0].excerpt}</p>
              <Link
                href={`/blog/${posts[0].id}`}
                className="inline-block px-6 py-3 bg-accent text-black font-bold hover:bg-opacity-90 transition-all"
              >
                READ FULL ARTICLE
              </Link>
            </div>
          </div>

          {/* Recent Posts Grid */}
          <div>
            <h2 className="text-3xl font-bold mb-8 tracking-tight">RECENT ARTICLES</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.slice(1).map((post) => (
                <article
                  key={post.id}
                  className="border border-border hover:border-accent transition-all overflow-hidden group flex flex-col"
                >
                  {/* Post Image */}
                  <div className="bg-[#0f0f0f] aspect-video flex items-center justify-center relative overflow-hidden">
                    {bgImages[post.id] && (
                      <Image
                        src={bgImages[post.id].src}
                        alt="Blog thumbnail"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent"></div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6 bg-secondary flex-1 flex flex-col">
                    <span className="inline-block w-fit px-3 py-1 bg-accent/20 text-accent text-xs font-bold tracking-widest mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-accent transition-colors flex-1">
                      {post.title}
                    </h3>
                    <div className="flex gap-3 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <User size={14} />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-block px-4 py-2 bg-accent text-black text-xs font-bold hover:bg-opacity-90 transition-all w-fit"
                    >
                      READ MORE
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-16 p-8 bg-gradient-to-r from-black to-secondary border border-accent">
            <h3 className="text-2xl font-bold mb-2">STAY UPDATED</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest tips, trends, and exclusive offers.
            </p>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-accent text-black font-bold whitespace-nowrap hover:bg-opacity-90 transition-all"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
