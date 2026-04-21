import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from 'astrowind:config';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('post');

  const sortedPosts = posts
    .filter((post) => !post.data.draft)
    .sort((a, b) => {
      const dateA = a.data.publishDate?.getTime() || 0;
      const dateB = b.data.publishDate?.getTime() || 0;
      return dateB - dateA;
    });

  return rss({
    title: SITE.name || 'Austin Sonderman',
    description:
      'Software Engineer specializing in AI and Full-Stack development. Lessons in Learning and Building: A Journey Through Code, Creativity, and Continuous Growth.',
    site: context.site?.toString() || SITE.site || '',
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt || '',
      link: `/${post.slug}/`,
      pubDate: post.data.publishDate || new Date(),
      author: post.data.author || 'Austin Sonderman',
      categories: [...(post.data.category ? [post.data.category] : []), ...(post.data.tags || [])],
      content: post.body,
    })),
    customData: '<language>en-us</language>',
    stylesheet: '/rss-styles.xsl',
  });
}
