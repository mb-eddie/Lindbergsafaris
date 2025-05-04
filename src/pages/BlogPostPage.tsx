import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { motion } from 'framer-motion';
import { Calendar, User, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const BlogPostPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    navigate('/404');
    return null;
  }

  return (
    <article className="min-h-screen bg-white dark:bg-neutral-900">
      <div className="relative h-[60vh] min-h-[400px]">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center text-white"
            >
              <span className="inline-block px-3 py-1 bg-primary-500 rounded-full text-sm font-medium mb-4">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                {post.title}
              </h1>
              <div className="flex items-center justify-center space-x-6 text-white/90">
                <div className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Tag className="h-5 w-5 mr-2" />
                  <span>{post.category}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="prose dark:prose-invert prose-lg">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-700">
            <h3 className="text-2xl font-serif font-bold text-neutral-800 dark:text-neutral-200 mb-4">
              Share this article
            </h3>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Share on Facebook
              </button>
              <button className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
                Share on Twitter
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Share on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostPage;